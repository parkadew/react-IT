
import styled, { css } from "styled-components"

const TDButton = ({ variant, size, shape }) => {
    return (
        <S.Button>
            {...{ size, shape, variant }}
        </S.Button>
    )
}
export default TDButton

const variantCSS = {
    primary: css`
        background-color: green;
        color:white;
    `,
    secondary: css`
        background-color: #0091ff;
        color: white;
    `,
    "primary-text": css`
    color:green;
    background-color: transparent;
    outline: none;
    `
}

const sizeCSS = {
    small: css`
        padding: 16px;
    `,
    medium: css`
        padding: 16px 32px;
    `,
    full: css`
        width:100%;
        aspect-ratio: 8/1;
    `
}


// variant 에따라 css가 변경 -> variant
// size에 따라 css가 변경 -> sizeCss
// shape에 따라 css가 변경 -> shapeCSS

const shapeCSS = {
    shape: css`
        border-radius: 8px;
    `,
    round: css`
        border-radius: 50%;
    `
}

const Button = styled.button`
    ${(props) => variantCSS[props.variant]}
    ${({ size }) => sizeCSS[size]}
    ${(props) => variantCSS[props.shape]}
`

const S = {
    Button,
}


