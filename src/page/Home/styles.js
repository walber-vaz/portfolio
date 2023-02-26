import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
  background: ${props => props.theme.colors.background};

  & img {
    width: 100%;
    max-width: 220px;
    will-change: filter;
    margin-top: -8rem;
    filter: drop-shadow(0 0 4rem ${props => props.theme.colors.shadow});
    border-radius: 50%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    margin-top: 4rem;
    text-align: center;
  }

  & span {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
