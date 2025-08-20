import { test, expect, describe } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    test('update the top text', async () => {
        // Arrange
        const user = userEvent.setup();
        render(<App />);
        const topTextbox = screen.getAllByRole('textbox')[0];

        // Act
        await user.clear(topTextbox);
        await user.type(topTextbox, 'A coder does not simply');

        // Assert
        expect(screen.getByText('A coder does not simply')).toBeInTheDocument();
    });

    test('update the bottom text', async () => {
        // Arrange
        const user = userEvent.setup();
        render(<App />);
        const bottomTextbox = screen.getAllByRole('textbox')[1];

        // Act
        await user.clear(bottomTextbox);
        await user.type(bottomTextbox, 'Code without coffee');

        // Assert
        expect(screen.getByText('Code without coffee')).toBeInTheDocument();
    });

    test('Testing image mock api request', async () => {
        // Arrange
        const user = userEvent.setup();
        render(<App />);
        const btnImg = screen.getByRole('button', { name: 'Get a new meme image 🖼' });

        // Act
        // await user.clear(btnImg);
        await user.click(btnImg);

        // Assert
        const images = screen.getAllByRole('img');
        expect(images[1].src).toBe('https://i.imgflip.com/1c1uej.jpg');
    });
});
