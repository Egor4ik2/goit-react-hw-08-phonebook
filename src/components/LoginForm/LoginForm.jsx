import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogIn } from '../../Redux/Auth/operation';

import { Form, Label } from '../Register/Register.styled';
import { Button } from '../Menu/Menu.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(userLogIn(userData));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};