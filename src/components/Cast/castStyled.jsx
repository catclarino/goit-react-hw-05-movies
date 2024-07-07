import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  gap: 15px;
  width: 100%;
  border-radius: 10px;
`;

export const Item = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 3px 3px 10px -1px rgba(0, 0, 0, 0.75);
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
