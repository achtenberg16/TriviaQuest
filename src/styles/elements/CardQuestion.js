import style from 'styled-components';

export const MainContainer = style.div`
display: flex;
flex-direction: column;
width: 500px;
height: 350px;
background-color: white;
border-radius: 30px;
position: relative;
`;

export const ContainerHeader = style.div`
display: flex;
background-color: var(--purple-secondary);
justify-content: space-between;
align-items: center;
border-radius: 25px 25px 0px 0px;
height: 90px;
padding: 0px 20px;
font-size: 18px;
font-weight: 600;
`;

export const SpanTimer = style.span`
color: var(--yellow);
`;

export const Questiontext = style.p`
display: block;
width: 334px;
margin: 37px auto;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
color: var(--gray);
font-size: 22px
`;

export const ParagBotton = style.p`
position: absolute;
bottom: 10px;
color: var(--gray);
width: 100%;
font-size: 32px;
font-weight: 600;
display: flex;
padding: 0px 30px;
justify-content: space-between;
align-items: center;
`;

export const MainContainerQuestion = style.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 940px;
margin: 0 auto;
margin-top: 4%
`;

export const OptionsContainer = style.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 350px;
gap: 35px;
`;

export const OptionButton = style.button`
text-align: center;
background-color: white;
color: var(--gray);
width: 385px;
font-size: 24px;
font-weight: 600;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
height: 50px;
border-radius: 20px;
`;

export const NextButtonStyled = style.button`
width: 120px;
height: 50px;
font-size: 24px;
background-color: var(--green);
color: black;
font-weight: 600;
border-radius: 20px;
margin-top: 30px;
margin-left: 50%;
&:hover {
  margin-left: 49.9%;
}
`;
