import pb from '@/lib/pocketbase/client'

export interface LeadData {
  name: string
  email: string
  whatsapp: string
  message?: string
  interest?: string
}

export interface Lead extends LeadData {
  id: string
  created: string
  updated: string
}

export const createLead = (data: LeadData) => pb.collection('leads').create<Lead>(data)

export const getLeads = () => pb.collection('leads').getFullList<Lead>({ sort: '-created' })
export const deleteLead = (id: string) => pb.collection('leads').delete(id)
