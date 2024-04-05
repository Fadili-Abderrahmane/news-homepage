import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   /* reset style */
   *,*::after,*::before {
      padding: 0;
      margin:0;
      box-sizing: border-box;
   }

   //variables
   :root{
      //colors
     --soft-orange:hsl(35, 77%, 62%);
     --soft-red:hsl(5, 85%, 63%);
     --off-white:hsl(36, 100%, 99%);
     --grayish-blue:hsl(233, 8%, 79%);
     --dark-grayish-blue:hsl(236, 13%, 42%);
     --very-dark-blue:hsl(240, 100%, 5%);
      //typography
      --font-size:15px;
      --font-family:"Inter", sans-serif;
   }

   html {
      font-size: var(--font-size);
      font-family: var(--font-family);
   }

   body {
      background-color: var(--off-white);
      height:5000px;
   }

`;

export default GlobalStyle;

export const Container = styled.div`
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 1rem;
`;
