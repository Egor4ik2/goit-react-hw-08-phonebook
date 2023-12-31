import React from 'react';
import { useDispatch } from 'react-redux';

import { userRegister } from '../../Redux/Auth/operation';

import { Form, Label } from './Register.styled';
import { Button } from '../Menu/Menu.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(userRegister(userData));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
