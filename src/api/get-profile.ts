import { api } from '@/lib/axios'

interface GetProfileResponse {
  phone: string | null
  email: string
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
