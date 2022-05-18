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

describe('1 - Game Screen', () => {
  beforeEach(async() => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => questionsResponse});
    renderWithRouter(<App />)
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(screen.getByTestId(TEST_ID.buttonPlay));
    expect(await screen.findByText(/Alessandro/i)).toBeVisible()
  })
  it('check if the questions are on the screen', async() => {
    expect(await screen.findByTestId(/wrong-answer/)).toBeVisible()
    expect(await screen.findByTestId(/correct-answer/)).toBeVisible()
  })

  it
})