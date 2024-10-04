import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`

    /*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

/*=============== VARIAVEL CSS ===============*/
:root {
  --header-height: 3.5rem;

  /*========== Cores ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --black-color: hsl(220, 24%, 12%);
  --black-color-light: hsl(220, 24%, 15%);
  --black-color-lighten: hsl(220, 20%, 18%);
  --white-color: #fff;
  --body-color: hsl(220, 100%, 97%);

  /*========== Fonte e tipografia ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: "Montserrat", sans-serif;
  --normal-font-size: .938rem;

  /*========== Font weight ==========*/
  --font-regular: 400;
  --font-semi-bold: 600;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*========== Tipografia responsiva ==========*/
@media screen and (min-width: 1024px) {
  :root {
    --normal-font-size: 1rem;
  }
}

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
}


#root{
      min-height: 100dvh;
      display:flex ;
      flex-direction: column;

}


`

export default GlobalStyled