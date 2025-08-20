import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './Main';

// describe('Main', () => {
//     test('displays the first line', () => {
//         render(<Main />);
//         expect(screen.getByText('One does not simply')).toBeInTheDocument();
//     });
//     test('displays the second line', () => {
//         render(<Main />);
//         // expect(screen.getByText('Walk into mordor')).toBeInTheDocument();
//         expect(screen.getByText('Walk into Mordor')).toBeInTheDocument();
//     });
//     test('displays the img', () => {
//         render(<Main />);

//         expect(screen.getByRole('img').src).toContain('https://i.imgflip.com/1bij.jpg');
//     });
// });

test('displays the top and bottom text lines and the meme image', () => {
    render(<Main />);

    expect(screen.getByText('One does not simply')).toBeInTheDocument();
    expect(screen.getByText('Walk into Mordor')).toBeInTheDocument();
    expect(screen.getByRole('img').src).toBe('https://i.imgflip.com/1bij.jpg');
});
