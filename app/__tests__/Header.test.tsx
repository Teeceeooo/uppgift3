import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

test('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Characters')).toBeInTheDocument()
    expect(screen.getByText('Films')).toBeInTheDocument()
    expect(screen.getByText('Planets')).toBeInTheDocument()
    expect(screen.getByText('Quiz')).toBeInTheDocument()
})
