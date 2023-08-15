import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: #3388cc;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: black;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  padding: 20px 60px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export { StyledLink, Header, Nav, NavWrapper, Container };
