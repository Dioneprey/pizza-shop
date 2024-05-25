import { http, HttpResponse } from 'msw'

import { GetDailyReceiptInPeriodResponse } from '../get-daily-receipt-in-period'

export const getDailyReceiptInPeriodMock = http.get<
  never,
  never,
  GetDailyReceiptInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    {
      receipt: 10000,
      date: '01/01/2024',
    },
    {
      receipt: 13000,
      date: '02/01/2024',
    },
    {
      receipt: 15400,
      date: '03/01/2024',
    },
    {
      receipt: 13200,
      date: '04/01/2024',
    },
    {
      receipt: 18000,
      date: '05/01/2024',
    },
  ])
})
