import React from "react";
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { TOKEN_ENPOINT } from "../helpers/constants";
import { mockFetchToken, questionsResponse } from './mocks/fetchMock';


const TEST_ID = {
  inputName: "input-player-name",
  inputEmail: "input-gravatar-email",
  buttonSettings: "btn-settings",
  buttonPlay: "btn-play",
}

const VALUES = {
  name: 'Alessandro',
  email: 'ale1000@gmail.com',
  token: 'ea26fc847f769da555987722608af7c80c54694264e5823d5c9b835d4593611b'
}

describe('1 - Login Screen', () => {
    beforeEach(()=> renderWithRouter(<App />));

  it('possible to write the name', () => {
    const nameField = screen.getByTestId(TEST_ID.inputName);
    expect(nameField).toBeInTheDocument();
    userEvent.type(nameField, VALUES.name);
    expect(screen.getByTestId(TEST_ID.inputName).value).toBe(VALUES.name);
  })

  it('possible to write the email', () => {  
    const emailField = screen.getByTestId(TEST_ID.inputEmail);
    expect(emailField).toBeInTheDocument();
    userEvent.type(emailField, VALUES.email);
    expect(screen.getByTestId(TEST_ID.inputEmail).value).toBe(VALUES.email);
  })

  it('there is a play button', async () => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => questionsResponse});
    const buttonPlay = screen.getByTestId(TEST_ID.buttonPlay);
    expect(buttonPlay).toBeInTheDocument();
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(buttonPlay);
    expect(fetch).toHaveBeenCalledWith(TOKEN_ENPOINT);
    expect(await screen.findByText('Alessandro')).toBeVisible()
    expect(localStorage.getItem('token')).toBe(VALUES.token);
  })

  it('test the settings button', async() => {
    const buttonSettings = screen.getByTestId(TEST_ID.buttonSettings);
    expect(buttonSettings).toBeInTheDocument();
    userEvent.click(buttonSettings);
    const settings = await screen.findByText('Settings')
    expect(settings).toBeVisible()
  })

})