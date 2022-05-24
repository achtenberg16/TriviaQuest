import style from 'styled-components';
import { CardSettings } from './CardSettings';

export const CardRanking = style(CardSettings)`
width: 600px;
height: 500px;
`;

export const RankingResult = style.div`
width: 75%;
height: 60%;
overflow: auto;
&::-webkit-scrollbar {
    width: 6px;
}
&::-webkit-scrollbar-track {
    background-color: yellow;
    border-radius: 10px;
}
&::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius:10px;
}
`;

export const Player = style.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 10px 5px 0;
`;

export const RankingText = style.span`
font-size: 24px;
max-width: 120px;
overflow: hidden;
`;

export const RankingNumber = style(RankingText)`
background-color: #FFE05F;
border-radius: 4px;
padding: 5px;
color: black;
font-size: 20px
`;

export const PlayerImg = style.img`
border-radius: 50%;
margin-left: 20px;
`;

export const Hr = style.hr`
width:95%;
margin: auto;
`;
