import React from "react";
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { TOKEN_ENPOINT } from "../helpers/constants";


describe('1 - Login Screen', () => {
    beforeEach(()=> renderWithRouter(<App />));

  it('possible to write the name', () => {
    const nameField = screen.getByTestId("input-player-name")
    expect(nameField).toBeInTheDocument();

    userEvent.type(nameField, 'Alessandro');
    expect(screen.getByTestId("input-player-name").value).toBe('Alessandro');

    
  })

  it('possible to write the email', () => {  
    const emailField = screen.getByTestId("input-gravatar-email")
    expect(emailField).toBeInTheDocument();

    userEvent.type(emailField, 'ale1000@gmail.com');
    expect(screen.getByTestId("input-gravatar-email").value).toBe('ale1000@gmail.com');
  })

  it('there is a play button', async () => {
    global.fetch = jest.fn();
    fetch.mockResolvedValue({
      status: 200,
      json: async () => ({
      response_code: 0,
      response_message: 'Token Generated Successfully!',
      token: 'ea26fc847f769da555987722608af7c80c54694264e5823d5c9b835d4593611b',
      }),
    }); 

    const btn = screen.getByTestId("btn-play")
    expect(btn).toBeInTheDocument();

    userEvent.type(screen.getByTestId("input-player-name"), 'Alessandro');
    userEvent.type(screen.getByTestId("input-gravatar-email"), 'ale1000@gmail.com');
    userEvent.click(btn);
    
    expect(fetch).toHaveBeenCalledWith(TOKEN_ENPOINT);

    const game = await screen.findByText('game')
    expect(game).toBeVisible()
    expect(localStorage.getItem('token')).toBe('ea26fc847f769da555987722608af7c80c54694264e5823d5c9b835d4593611b');
  })

  it('test the settings button', async() => {
    const btn = screen.getByTestId("btn-settings")
    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    const settings = await screen.findByText('Settings')
    expect(settings).toBeVisible()
  })

})