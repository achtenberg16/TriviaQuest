import style from 'styled-components';

export const CardSettings = style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 350px;
height: 397px;
background-color: var(--purple-primary);
margin: 0 auto;
margin-top: 150px;
border-radius 40px;
border-color: -internal-light-dark(#AFAFAF), #AFAFAF);
gap: 14px
`;

export const Select = style.select`
width: 80%;
height:  40px;
background-color: var(--purple-secondary);
color: white;
font-size: 14px;
padding: 10px;
border-radius: 50px
`;

export const H1Settings = style.h1`
font-size: 36px;
font-weight: 600;
margin-bottom: 20px;
color: var(--green)
`;
