import styled from '@emotion/styled';

export const FavoriteRecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 43px;
    gap: 18px;
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        gap: 40px;
        padding-top: 97px;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        gap: 50px;
        padding-top: 93px;
        margin-bottom: -100px;
    }
`;