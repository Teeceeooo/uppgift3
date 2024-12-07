import { render, screen } from '@testing-library/react'
import StatCard from '../components/StatCard'

test('renders StatCard with label and value', () => {
    render(<StatCard label="Characters" value={82} />)
    expect(screen.getByText('Characters')).toBeInTheDocument()
    expect(screen.getByText('82')).toBeInTheDocument()
})
