import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Layout from './Login/Login';
import { RestrictedRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import Home from '../page/Main/Home';
import Contacts from '../page/Contacts';
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';

import { userRefresh } from '../Redux/Auth/operation';
import { useAuth } from '../Hooks/Auth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo={'/login'} />}
        />
      </Route>
    </Routes>
  );
};