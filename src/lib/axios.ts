import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}

api.interceptors.response.use(
  function (response) {
    const contentType = response.headers['content-type']
    if (contentType && contentType.indexOf('text/html') !== -1) {
      throw new Error('Erro: a resposta da API é HTML, não JSON')
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)
