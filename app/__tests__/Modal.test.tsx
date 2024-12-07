import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../components/Modal'

test('renders Modal when isOpen is true and calls onClose when Close is clicked', async () => {
    const mockOnClose = jest.fn()

    render(
        <Modal
            isOpen={true}
            onClose={mockOnClose}
            title="Test Modal"
            content="This is a modal"
        />
    )

    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('This is a modal')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Close'))

    expect(mockOnClose).toHaveBeenCalledTimes(1)
})
