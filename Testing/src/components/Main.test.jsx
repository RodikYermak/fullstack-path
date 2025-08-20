import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('Main', () => {
    test('displays the top and bottom text lines and the meme image', () => {
        render(<Main />);

        expect(screen.getByText('One does not simply')).toBeInTheDocument();
        expect(screen.getByText('Walk into Mordor')).toBeInTheDocument();
        expect(screen.getByRole('img').src).toBe('https://i.imgflip.com/1bij.jpg');
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('displays the labels, inputs, and button for meme creation', () => {
        render(<Main />);

        // Labels
        expect(screen.getByText('Top Text')).toBeInTheDocument();
        expect(screen.getByText('Bottom Text')).toBeInTheDocument();

        // Input fields
        expect(screen.getByPlaceholderText('One does not simply')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Walk into Mordor')).toBeInTheDocument();

        // Button
        expect(screen.getByRole('button', { name: 'Get a new meme image 🖼' })).toBeInTheDocument();
    });
});