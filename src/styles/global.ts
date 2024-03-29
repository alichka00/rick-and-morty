import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }


  body{
    font-family: Raleway, sans-serif;
    color: #fffc;
    background-color: #0f0d0df7;
  }
  
  li{
    list-style-type: none;
  }

  a {
    color: #9dd1c5;
    text-decoration: none;
  }
`
