import React from "react";
import { act, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { mockFetchToken, questionsResponse, invalidTokenQuestionsResponse } from './mocks/fetchMock';


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
    userEvent.click(screen.getByTestId(/wrong-answer/));
    expect((await screen.findByTestId(/wrong-answer/)).classList[0]).toBe('incorrect-answer')
    expect((await screen.findByTestId(/correct-answer/)).classList[0]).toBe('correct-answer')
    expect(screen.getByTestId(/correct-answer/)).toHaveAttribute('disabled')
   })

   it('check if next button is correct', async() => {
    expect(await screen.findByTestId(/wrong-answer/)).toBeVisible()
    userEvent.click(screen.getByTestId(/wrong-answer/));
    userEvent.click(screen.getByTestId('btn-next'))
    expect(await screen.findByTestId(/wrong-answer-0/)).toBeVisible()
    
   })
})

describe('2 - Game Screen', () => {
  it('when receiving an invalid token', async() => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => invalidTokenQuestionsResponse});
    renderWithRouter(<App />)
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(screen.getByTestId(TEST_ID.buttonPlay));
    expect(await screen.findByText(/Play/i)).toBeVisible()
  })
  it('assertions store is correct', async() => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => questionsResponse});
    const { store } = renderWithRouter(<App />)
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(screen.getByTestId(TEST_ID.buttonPlay));
    jest.setTimeout(40000)
    await act(async() => {
        await new Promise((r) => setTimeout(r, 30000));
      expect(await screen.findByText('0')).toBeVisible()
    })
    userEvent.click(await screen.findByTestId(/correct-answer/))
    userEvent.click(screen.getByTestId('btn-next'))
    const assertions = store.getState().player.assertions
    expect(assertions).toBe(1)
  })

  it('', async () => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => questionsResponse});
    const { store } = renderWithRouter(<App />)
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(screen.getByTestId(TEST_ID.buttonPlay));
    jest.setTimeout(5000)
    await act(async() => {
        await new Promise((r) => setTimeout(r, 2000));
      expect(await screen.findByText('28')).toBeVisible()
      userEvent.click(screen.getByTestId(/wrong-answer-0/));
      await new Promise((r) => setTimeout(r, 2000));
    })
  })
})

