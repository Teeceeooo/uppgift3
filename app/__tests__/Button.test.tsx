import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

test('calls onClick when button is clicked', async () => {
    const mockOnClick = jest.fn()

    render(<Button label="Click Me" onClick={mockOnClick} />)

    const button = screen.getByText('Click Me')

    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
})
