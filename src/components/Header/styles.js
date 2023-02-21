import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 1;

  section a {
    color: ${props => props.theme.colors.text};
    font-size: 2.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
  }

  & ul {
    display: flex;
    align-items: center;
  }

  & a {
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1rem;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }

    &:active {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
