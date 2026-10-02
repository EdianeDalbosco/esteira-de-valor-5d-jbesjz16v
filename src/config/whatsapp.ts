// Re-export centralizado a partir de @/lib/constants para garantir fonte única da verdade
export {
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER as WHATSAPP_PHONE,
  PHONE_DISPLAY,
  ADDRESS_TEXT,
  WHATSAPP_MESSAGES,
  WHATSAPP_LINK,
  getWhatsAppUrl,
} from '@/lib/constants'

import { WHATSAPP_LINK, WHATSAPP_MESSAGES } from '@/lib/constants'

// URLs pré-calculadas para retrocompatibilidade
export const WHATSAPP_URL = WHATSAPP_LINK(WHATSAPP_MESSAGES.garantirVaga)
export const WHATSAPP_THANKYOU_URL = WHATSAPP_LINK(WHATSAPP_MESSAGES.confirmarHorario)
export const WHATSAPP_DIRECT_URL = WHATSAPP_LINK(WHATSAPP_MESSAGES.confirmarHorario)
