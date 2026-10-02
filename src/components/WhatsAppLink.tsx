import React, { useEffect, useState } from 'react'
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGES,
  getWhatsAppDesktopUrl,
  getWhatsAppMobileUrl,
  isMobileDevice,
} from '@/lib/constants'

export interface WhatsAppLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> {
  /**
   * Mensagem opcional pré-formatada. Caso omitida, usa WHATSAPP_MESSAGES.garantirVaga
   */
  message?: string | null
  /**
   * Número de WhatsApp opcional com DDI+DDD (padrão WHATSAPP_NUMBER)
   */
  phone?: string
  /**
   * Força abertura em mesma aba (_self) ou nova aba (_blank).
   * Por padrão: mobile abre em `_self` (mesma aba) para contornar bloqueadores de pop-up e webviews (Instagram, Safari, etc.);
   * desktop abre em `_blank`.
   */
  target?: '_self' | '_blank' | '_parent' | '_top'
  /**
   * Se informado, sobrescreve a detecção automática de ambiente mobile
   */
  isMobileOverride?: boolean
  /**
   * Conteúdo interno do link
   */
  children?: React.ReactNode
}

/**
 * Componente unificado e à prova de falhas para links de WhatsApp:
 * - Em mobile/webviews: utiliza URL direta `https://api.whatsapp.com/send?phone=...&text=...` e abre na MESMA aba (`_self`), contornando bloqueadores de popup/webview.
 * - Em desktop: utiliza `https://wa.me/...` com `target="_blank"` e `rel="noopener noreferrer"`.
 * - Possui manipulador onClick inteligente de fallback caso o clique precise forçar o redirecionamento imediato.
 */
export const WhatsAppLink = React.forwardRef<HTMLAnchorElement, WhatsAppLinkProps>(
  (
    {
      message,
      phone = WHATSAPP_NUMBER,
      target,
      rel,
      isMobileOverride,
      children,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    // Inicialização segura com fallback para renderização síncrona/SSR
    const [isMobile, setIsMobile] = useState<boolean>(() => {
      if (typeof isMobileOverride === 'boolean') {
        return isMobileOverride
      }
      return isMobileDevice()
    })

    useEffect(() => {
      if (typeof isMobileOverride === 'boolean') {
        setIsMobile(isMobileOverride)
      } else {
        setIsMobile(isMobileDevice())
      }
    }, [isMobileOverride])

    const href = isMobile
      ? getWhatsAppMobileUrl(message, phone)
      : getWhatsAppDesktopUrl(message, phone)

    // Se o target não for especificado explicitamente:
    // Mobile -> '_self' (mesma aba para evitar bloqueio em webviews/iOS)
    // Desktop -> '_blank' (nova aba)
    const resolvedTarget = target ?? (isMobile ? '_self' : '_blank')

    // Atributo rel seguro: noopener noreferrer para novas abas
    const resolvedRel =
      rel !== undefined ? rel : resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e)
      }

      // Se o evento foi cancelado por onClick customizado, não intervém
      if (e.defaultPrevented) {
        return
      }

      // Em dispositivos mobile (especialmente webviews do Instagram/Facebook ou Safari iOS),
      // forçamos o redirecionamento via window.location.href caso a navegação padrão falhe.
      if (isMobile && resolvedTarget === '_self') {
        // Deixa o evento natural rodar, mas adiciona um fallback imediato se necessário
        try {
          window.location.href = href
          e.preventDefault()
        } catch {
          // Permite que o comportamento padrão do <a> continue
        }
      }
    }

    return (
      <a
        ref={ref}
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    )
  },
)

WhatsAppLink.displayName = 'WhatsAppLink'

export default WhatsAppLink
