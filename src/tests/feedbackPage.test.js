import React from "react";
import { act, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from "@testing-library/user-event";
import { GOOD_FEEDBACK, TOKEN_ENPOINT } from "../helpers/constants";
import { mockFetchToken, questionsResponse } from './mocks/fetchMock';
import questions from "../redux/reducers/questions";


const TEST_ID = {
  inputName: "input-player-name",
  inputEmail: "input-gravatar-email",
  buttonSettings: "btn-settings",
  buttonPlay: "btn-play",
  buttonNext: 'btn-next',
  feedbackText: 'feedback-text',
  playAgain: 'btn-play-again',
  rankingBtn: 'btn-ranking',
  homeBtn: 'btn-go-home',
}

const VALUES = {
  name: 'Alessandro',
  email: 'ale1000@gmail.com',
  token: 'ea26fc847f769da555987722608af7c80c54694264e5823d5c9b835d4593611b',
  numberOfQuestions: 5,
  goodText: 'Well Done!',
  badText: 'Could be better...',
}

describe('3 - Feedback Screen', () => {
  beforeEach(async() => {
    global.fetch = jest.fn();
    fetch.mockResolvedValueOnce(mockFetchToken).mockResolvedValueOnce({json: async () => questionsResponse});
    renderWithRouter(<App />)
    userEvent.type(screen.getByTestId(TEST_ID.inputName), VALUES.name);
    userEvent.type(screen.getByTestId(TEST_ID.inputEmail), VALUES.email);
    userEvent.click(screen.getByTestId(TEST_ID.buttonPlay));
    expect(await screen.findByText(/Alessandro/i)).toBeVisible()
  })

  it('redirects to feedback screen', async () => {
    for (let i = 0; i < VALUES.numberOfQuestions; i+=1) {
        userEvent.click(await screen.findByTestId(/correct-answer/));
        userEvent.click(screen.getByTestId(TEST_ID.buttonNext))
    }
    userEvent.click(await screen.findByTestId(TEST_ID.feedbackText))
    expect(screen.getByTestId(TEST_ID.feedbackText).innerHTML).toBe(VALUES.goodText);
  })

  it('play again button redirects', async () => {
    jest.setTimeout(50000)
    for (let i = 0; i < VALUES.numberOfQuestions; i+=1) {
        userEvent.click(await screen.findByTestId('wrong-answer-0'));
        await act(async() => {
            await new Promise((r) => setTimeout(r, 2000));
        userEvent.click(await screen.findByTestId(TEST_ID.buttonNext))
       })
    }
    expect(screen.getByTestId(TEST_ID.feedbackText).innerHTML).toBe(VALUES.badText);
    userEvent.click(await screen.findByTestId(TEST_ID.playAgain))
    expect(screen.getByTestId(TEST_ID.inputName)).toBeInTheDocument();
  })

  it('redirects to ranking screen', async () => {
    for (let i = 0; i < VALUES.numberOfQuestions; i+=1) {
        userEvent.click(await screen.findByTestId(/correct-answer/));
        userEvent.click(screen.getByTestId(TEST_ID.buttonNext))
    }

    userEvent.click(await screen.findByTestId(TEST_ID.rankingBtn));
    expect(await screen.findByText(/Ranking/i)).toBeVisible()

    expect((await screen.findAllByTestId(/player-name/i)).length).toBe(3);

    userEvent.click(await screen.findByTestId(TEST_ID.homeBtn));
    expect(screen.getByTestId(TEST_ID.inputName)).toBeInTheDocument();
  })




})