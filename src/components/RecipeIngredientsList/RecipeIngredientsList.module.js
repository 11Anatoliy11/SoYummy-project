import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 16px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 343px;
  min-height: 42px;
  padding: 12px 14px;
  margin-bottom: 24px;

  background: var(--green-color);
  border-radius: 8px;
`;

export const HeadText = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;

  color: var(--background-color);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const List = styled.ul`
  margin-bottom: 50px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 343px;
  min-height: 86px;
  padding: 10px 29px 10px 10px;

  background: #ebf3d4;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IngredientTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: #3e4462;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Measure = styled.div`
  min-width: 47px;
  max-width: 70px;
  min-height: 23px;
  padding: 4px;
  margin-right: 28px;
  text-align: center;

  background: var(--green-color);
  border-radius: 4px;

  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;

  color: var(--background-color);
`;

// Временное, удалить
export const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
`;
