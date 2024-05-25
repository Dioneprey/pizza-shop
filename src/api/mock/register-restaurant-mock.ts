import { http, HttpResponse } from 'msw'

import { RegisterRestarauntBody } from '../register-restaurant'

export const registerRestaurantMock = http.post<never, RegisterRestarauntBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    } else {
      return new HttpResponse(null, { status: 400 })
    }
  },
)
