import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`    
    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        src: url('fonts/Roboto/Roboto-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        src: url('fonts/Roboto/Roboto-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Open Sans';
        src: url('fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
