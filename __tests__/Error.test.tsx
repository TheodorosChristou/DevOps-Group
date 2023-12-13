import React from 'react'
import {render, screen} from '@testing-library/react'
import Error from '@/components/Error'

it('Should have an image', () => {
    render(<Error />);
    const image = screen.getByAltText('404 image');
    expect(image).toBeInTheDocument()
})

it('Should have a link', () => {
    render(<Error />);
    const Link = screen.getByTestId('link');
    expect(Link).toHaveClass('mb-5')
})
it('Should have a heading', () => {
    render(<Error />);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('flex-col')
})
