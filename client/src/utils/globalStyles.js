import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        font-family: 'Lato';
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
`;

export const theme = {
	flexin: (jc = `center`, ai = `center`, fd = `row`, fw = `nowrap`) =>
		css`
			display: flex;
			justify-content: ${jc};
			align-items: ${ai};
			flex-direction: ${fd};
			flex-wrap: ${fw};
		`,
	button: css`
		width: 100%;
		padding: 10px 15px;
		border: 0.5px solid black;
		cursor: pointer;
		font-weight: 100;
		font-size: 20px;
		letter-spacing: 1.2px;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.3s ease-in-out;

		&:hover {
			letter-spacing: 2.5px;
		}
	`,
	page: css`
		height: 100vh;
		width: 100%;
	`
};
