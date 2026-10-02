/**
 * Constantes globais do projeto EDVANCED | Esteira de Valor 5D
 */

/**
 * Número oficial de WhatsApp da empresa (DDI + DDD + número)
 * Cuiabá/MT — (65) 98100-3969
 */
export const WHATSAPP_NUMBER = '5565981003969'

/**
 * Telefone para exibição formatada na interface e acessibilidade
 */
export const PHONE_DISPLAY = '(65) 98100 3969'

/**
 * Endereço comercial oficial
 */
export const ADDRESS_TEXT = 'Rua Deputado Roberto Cruz, 246, Bairro Alvorada, Cuiabá/MT'

/**
 * Mensagens padrão para cada contexto de CTA de WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  // Botões "Garantir Vaga" (header / navegação mobile / rodapé)
  garantirVaga: 'Olá! Quero garantir minha vaga no programa Esteira de Valor 5D.',

  // "Falar no WhatsApp" (após formulário de lead) e "Confirmar horário no WhatsApp" (ThankYou)
  confirmarHorario:
    'Olá! Acabei de me inscrever no Esteira de Valor 5D e quero confirmar meu horário da Chamada Estratégica.',

  // Link simples do rodapé ("WhatsApp")
  rodape: 'Olá! Vim pelo site do Esteira de Valor 5D.',
} as const

/**
 * Gera URL canônica para o WhatsApp no formato seguro e universal:
 * https://wa.me/<número>?text=<mensagem URL-encoded>
 *
 * Sempre inclui parâmetro ?text= para compatibilidade estrita com WhatsApp Desktop,
 * WhatsApp Web e navegadores mobile/desktop.
 */
/**
 * Detecta se o ambiente de execução atual é um dispositivo mobile ou webview móvel.
 * Avalia userAgent, maxTouchPoints e navegadores embutidos (Instagram, Facebook, etc.).
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  const ua =
    navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || ''

  // Expressão regular ampla para cobrir iOS, Android, webviews de apps sociais e dispositivos móveis
  const mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|silk|fennec|bada|tizen|fban|fbav|instagram|threads|linkedinapp|twitter|micromessenger/i

  if (mobileRegex.test(ua)) {
    return true
  }

  // iPads com iPadOS 13+ identificam-se como Macintosh mas possuem tela de toque
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
    return true
  }

  return false
}

/**
 * Sanitiza o número de telefone e a mensagem
 */
function normalizePhoneAndMessage(
  message?: string | null,
  phone: string = WHATSAPP_NUMBER,
): { cleanPhone: string; safeMessage: string } {
  const cleanPhone =
    (phone && phone.trim().length > 0 ? phone : WHATSAPP_NUMBER).replace(/\D/g, '') ||
    WHATSAPP_NUMBER
  const safeMessage =
    typeof message === 'string' && message.trim().length > 0
      ? message.trim()
      : WHATSAPP_MESSAGES.garantirVaga
  return { cleanPhone, safeMessage }
}

/**
 * URL desktop padrão (wa.me)
 */
export function getWhatsAppDesktopUrl(
  message?: string | null,
  phone: string = WHATSAPP_NUMBER,
): string {
  const { cleanPhone, safeMessage } = normalizePhoneAndMessage(message, phone)
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(safeMessage)}`
}

/**
 * URL mobile direta (api.whatsapp.com/send) recomendada para contornar bloqueadores
 * de webviews móveis (Instagram, Facebook, Safari iOS).
 */
export function getWhatsAppMobileUrl(
  message?: string | null,
  phone: string = WHATSAPP_NUMBER,
): string {
  const { cleanPhone, safeMessage } = normalizePhoneAndMessage(message, phone)
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(safeMessage)}`
}

/**
 * Gera URL canônica para o WhatsApp no formato adequado ao ambiente:
 * - Mobile / Webviews: https://api.whatsapp.com/send?phone=...&text=...
 * - Desktop: https://wa.me/...
 *
 * Sempre inclui texto codificado para garantir que a mensagem pré-preenchida
 * chegue intacta em todos os dispositivos.
 */
export function WHATSAPP_LINK(
  message?: string | null,
  phone: string = WHATSAPP_NUMBER,
  forceMobile?: boolean,
): string {
  const isMobile = forceMobile ?? isMobileDevice()
  return isMobile ? getWhatsAppMobileUrl(message, phone) : getWhatsAppDesktopUrl(message, phone)
}

/**
 * Atalho semântico retrocompatível
 */
export const getWhatsAppUrl = WHATSAPP_LINK
