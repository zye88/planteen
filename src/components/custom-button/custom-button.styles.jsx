import styled, { css } from 'styled-components';

const nonInvertedStyles = css`
    background-color: #FFEC00;
    border: none;
    
    &:hover {
        background-color: #CDBD01;
    }
`;

const invertedStyles = css`
    background-color: white;
    border: 1px solid black;

    &:hover {
        border-color: #CDBD01;
        
        span {
            color: #CDBD01
        };
    }
`;

const getButtonStyles = ({inverted}) => {
    return inverted? invertedStyles: nonInvertedStyles;
};

export const CustomButtonContainer = styled.button`
    height: 45px;
    padding: 5px 18px;
    margin: 5px 8px;

    &:focus {
        outline: 35px;
    }

    img {
        width: 17px;
        height: 22px;
        margin: 7px 0px 5px 5px;
    }

    ${ getButtonStyles }
`;
