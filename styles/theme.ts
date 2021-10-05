import styled from 'styled-components';

export const theme = {
  main: 'mediumseagreen',
  mainBlue: '#2B4477',
};

export const CSSGlobal = styled.div`

  --primary-color: blue;
  --white-text-color: white;
  --bg-color: white;

  h1,h2,h3,h4,h5,p, label{
    font-family: Helvetica;
  }
  h1{
    font-size: 2em;
  }

  h2{
    font-size: 2em;
  }
  h3 {
    font-size: 3em;
  }
  h5 {
    font-size: 1em;
  }
`;
