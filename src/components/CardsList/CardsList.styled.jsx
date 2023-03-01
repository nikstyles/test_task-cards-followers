import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (min-width: 1280px) {
    justify-content: center;
  }
`;
