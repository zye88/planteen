import styled, {css} from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const sectionStyles = css`
    width: 100%;
    margin: 45px 0px;
`

const rowStyles = css`
    display: flex;
    flex-direction: row;
`;

export const IntroSectionContainer = styled.div`
    ${sectionStyles}
    ${rowStyles}

    h2 {
        font-size: 30pt;
        line-height: 40pt;
    }
    
    .section-image {
        height: 500px;
        width: 600px;
        margin-left: 39px;
    }
`;

export const WorkshopSectionContainer = styled.div`
    ${sectionStyles}
    ${rowStyles}

    .section-image {
        width: 411px;
        height: 325px;
        margin-right: 25px;
    }
`;

export const GiftSectionContainer = styled.div`
    ${sectionStyles}
    ${rowStyles}

    .section-image {
        width: 411px;
        height: 325px;
        margin-left: 25px;
    }
`;