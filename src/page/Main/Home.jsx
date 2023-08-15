
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { MainText } from './Main.styled';





const Home = () => {


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