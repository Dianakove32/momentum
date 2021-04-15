import {createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
.news-container {
    background: ${({theme})=> theme.bg};
    color: ${({theme})=> theme.text}
}
.clock-container{
    background: ${({theme})=> theme.clock};
}
`
export const lightTheme = {
    bg: '#e5e3dc',
    text: 'rgb(14, 13, 13);',
    clock: '#fade01'
}
export const darkTheme = {
    bg: 'rgb(14, 13, 13)',
    text: '#e5e3dc;',
    clock: '#cade05'
}