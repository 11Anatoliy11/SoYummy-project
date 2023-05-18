import styled from '@emotion/styled';

export const FavoriteRecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 43px;
    padding-bottom: 100px;
    gap: 18px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        gap: 40px;
        padding-top: 97px;
        padding-bottom: 200px;
        }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        gap: 50px;
        padding-top: 93px;
        padding-bottom: 100px;
    }
`;