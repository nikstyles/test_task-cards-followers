import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  max-width: 480px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 15px;
    max-width: 768px;
  }
  @media (min-width: 1280px) {
    padding: 0 20px;
    max-width: 1240px;
  }
`;
