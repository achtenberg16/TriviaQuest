import style from 'styled-components';

export const MainContainerFeedback = style.div`
display: flex;
flex-direction: column;
align-items: center;
width: 370px;
margin: 0 auto;
height: 440px;
background-color: var(--purple-secondary);
padding: 30px 0px;
gap: 15px;
text-align: center;
border-radius: 30px;
margin-top: 6%;
`;

export const H1feedback = style.h1`
font-size: 36px;
font-weight: 600;
margin-bottom: 20px;
color: var(--green)
`;

export const H2Feedback = style.h2`
font-size: 24px;
color: var(--yellow);
`;

export const Pfedback = style.p`
font-size: 20px;
font-weight: 600;
`;
