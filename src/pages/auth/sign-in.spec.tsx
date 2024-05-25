import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('Sign in', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/sign-in?email=johndoe@example.com']}>
          <QueryClientProvider client={queryClient}>
            <SignIn />
          </QueryClientProvider>
        </MemoryRouter>
      </HelmetProvider>,
    )

    expect(wrapper.getByDisplayValue('johndoe@example.com')).toBeInTheDocument()
  })
})
