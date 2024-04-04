import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('Navigation', async () => {
    render(<Page />)
    expect(screen.getByRole('heading')).toBeDefined()
})