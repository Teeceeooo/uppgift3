import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchCharacter from '../components/SearchCharacter'

test('calls onSearch when typing in search box', async () => {
    const mockOnSearch = jest.fn()
    render(<SearchCharacter onSearch={mockOnSearch} />)

    const input = screen.getByPlaceholderText('Search for a character')

    await userEvent.type(input, 'Luke')

    expect(mockOnSearch).toHaveBeenCalledTimes(4)
    expect(mockOnSearch).toHaveBeenCalledWith('L')
    expect(mockOnSearch).toHaveBeenCalledWith('Lu')
    expect(mockOnSearch).toHaveBeenCalledWith('Luk')
    expect(mockOnSearch).toHaveBeenCalledWith('Luke')
})
