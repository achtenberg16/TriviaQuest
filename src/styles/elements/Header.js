import style from 'styled-components';

export const HeaderS = style.header`
background-color: var(--purple-primary);
display: flex;
justify-content: center;
align-items: center; 
width: 950px;
height: 90px;
margin: 30px auto;
border-radius: 50px;
`;

export const DivHeader = style.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 590px;
color: var(--yellow);
font-size: 30px;
font-weight: 600;
`;

export const ImgHeader = style.img`
border-radius: 50%;
width: 65px
`;
