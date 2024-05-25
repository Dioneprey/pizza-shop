import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Pizza') {
      return new HttpResponse(null, { status: 204 })
    } else {
      return new HttpResponse(null, { status: 400 })
    }
  },
)
