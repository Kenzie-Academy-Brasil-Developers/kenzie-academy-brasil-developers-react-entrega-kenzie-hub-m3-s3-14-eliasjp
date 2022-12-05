import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-family-inter);
    }

    html, body, #root {
        height: 100%;
    }

    h1, h2, h3, p {
        color: var(--color-grey-0);
    }

    small {
        color: var(--color-grey-1); 
    }

    label {
        color: var(--color-grey-0);
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --color-success: #3FE864;
        --color-negative: #E83F5B;

        --font-family-inter: 'Inter', sans-serif;
    }
`