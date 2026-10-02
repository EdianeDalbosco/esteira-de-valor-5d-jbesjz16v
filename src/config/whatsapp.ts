// Configuração central de contato e WhatsApp do projeto EDVANCED | Esteira de Valor 5D

/**
 * Número oficial de WhatsApp configurado (apenas dígitos com código do país: DDI + DDD + número)
 * Exemplo padrão: '5565981003969'
 * Se o proprietário desejar alterar, basta alterar o valor desta constante abaixo.
 */
export const WHATSAPP_PHONE = '5565981003969'

/**
 * Telefone para exibição formatada na interface e acessibilidade
 */
export const PHONE_DISPLAY = '(65) 98100 3969'

/**
 * Endereço comercial oficial
 */
export const ADDRESS_TEXT = 'Rua Deputado Roberto Cruz, 246, Bairro Alvorada, Cuiabá/MT'

/**
 * Mensagens padrão pré-formatadas para iniciar a conversa no WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  general: 'Olá! Gostaria de mais informações sobre o Programa Esteira de Valor 5D da EDVANCED.',
  thankYouConfirm:
    'Olá! Acabei de me inscrever na Esteira de Valor 5D e gostaria de confirmar meu horário para a Chamada Estratégica.',
  directContact:
    'Olá! Gostaria de falar com a equipe estratégica da EDVANCED sobre a Esteira de Valor 5D.',
}

/**
 * Gera URL canônica para o WhatsApp no formato seguro https://wa.me/55XXXXXXXXXXX?text=mensagem
 * @param text Mensagem opcional pré-formatada (será URL-encoded)
 * @param phone Número opcional (se omitido, usa WHATSAPP_PHONE)
 */
export function getWhatsAppUrl(text?: string, phone: string = WHATSAPP_PHONE): string {
  // Limpa caracteres não numéricos do telefone garantindo formato estrito
  const cleanPhone = phone.replace(/\D/g, '')
  if (!text || !text.trim()) {
    return `https://wa.me/${cleanPhone}`
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text.trim())}`
}

/**
 * Links canônicos já montados para uso direto nos botões
 */
export const WHATSAPP_URL = getWhatsAppUrl(WHATSAPP_MESSAGES.general)
export const WHATSAPP_THANKYOU_URL = getWhatsAppUrl(WHATSAPP_MESSAGES.thankYouConfirm)
export const WHATSAPP_DIRECT_URL = getWhatsAppUrl(WHATSAPP_MESSAGES.directContact)
