import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogOut } from '../../Redux/Auth/operation';
import { useAuth } from '../../Hooks/Auth';

import { NavWrapper } from '../Login/Login.styled';
import { Button, Text } from '../Menu/Menu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(userLogOut());

  const { user } = useAuth();

  return (
    <NavWrapper>
      <Text>Hello, {user.name} !</Text>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </NavWrapper>
  );
};