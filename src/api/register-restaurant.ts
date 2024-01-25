import { api } from '@/lib/axios'

export interface RegisterRestarauntBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaraunt({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestarauntBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
