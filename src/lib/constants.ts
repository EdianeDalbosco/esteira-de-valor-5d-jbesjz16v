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
export function WHATSAPP_LINK(message?: string | null, phone: string = WHATSAPP_NUMBER): string {
  const cleanPhone =
    (phone && phone.trim().length > 0 ? phone : WHATSAPP_NUMBER).replace(/\D/g, '') ||
    WHATSAPP_NUMBER
  const safeMessage =
    typeof message === 'string' && message.trim().length > 0
      ? message.trim()
      : WHATSAPP_MESSAGES.garantirVaga
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(safeMessage)}`
}

/**
 * Atalho semântico retrocompatível
 */
export const getWhatsAppUrl = WHATSAPP_LINK
