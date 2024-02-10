import React, { FC } from 'react';
import { Button, Login, Notification } from 'react-admin';
import { useLoginPage } from '@/pages/login/use-login-page';
import './login.page.scss';

export const LoginPage: FC = () => {
  const {
    email,
    password,
    isValid,
    loginHandler,
    registerHandler,
    changePasswordHandler,
    changeEmailHandler,
  } = useLoginPage();

  return (
    <Login>
      <form>
        <div className="content">
          <label htmlFor="email" className="content__label">
            E-mail
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={changeEmailHandler}
              className="content__input"
            />
          </label>
          <label htmlFor="password" className="content__label">
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={changePasswordHandler}
              className="content__input"
            />
          </label>
        </div>
        <div className="actions">
          <Button
            label="Login"
            variant="contained"
            disabled={!isValid}
            onClick={loginHandler}
            className="actions__btn"
          ></Button>
          <Button
            label="Register"
            variant="contained"
            disabled={!isValid}
            onClick={registerHandler}
            className="actions__btn"
          ></Button>
        </div>
      </form>
      <Notification />
    </Login>
  );
};
