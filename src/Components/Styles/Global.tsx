import { createGlobalStyle } from 'styled-components';
import BG from '../../assets/BG.svg';

import { device } from './BreakPoints';

const Global = createGlobalStyle`
.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}
//Reset 
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  color:#fff;
  font-family: 'Inter', sans-serif;
  background:url(${BG});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

//Scroll
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #87CEEB;
  border-radius: 5px;
}

// Typografia
.h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 3rem;
}

.h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 2.5rem;
}

.h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 2rem;
}

.h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 1.5rem;
}

.h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 1.25rem;
}

.h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: 1rem;
}

.b {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.5;
  font-size: 1rem;
}

@media ${device.md} {
  .h1 { font-size: 1.5rem; }
  .h2 { font-size: 1.25rem; }
  .h3 { font-size: 1rem; }
  .h4 { font-size: 0.8rem; }
  .h5 { font-size: 0.7rem; }
  .h6 { font-size: 0.6rem; }
  .b { font-size: 0.7rem; }
}

@media ${device.sm} {
  .h1 { font-size: 1.25rem; }
  .h2 { font-size: 1rem; }
  .h3 { font-size: 0.8rem; }
  .h4 { font-size: 0.7rem; }
  .h5 { font-size: 0.6rem; }
  .h6 { font-size: 0.5rem; }
}
`;

export default Global;
