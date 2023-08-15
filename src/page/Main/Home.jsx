
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { HeaderSpan, MainText } from './Main.styled';
import { useAuth } from '../../Hooks/Auth';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <MainText>
        <span>Welcome to your Phonebook</span>
      </MainText>
    </>
  );
};

export default Home;