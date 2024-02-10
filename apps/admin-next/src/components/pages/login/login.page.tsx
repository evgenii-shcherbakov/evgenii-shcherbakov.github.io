import { FC } from 'react';
import { Button, Login, Notification } from 'react-admin';
import { useLoginPage } from '@/components/pages/login/use-login-page';

const LoginPage: FC = () => {
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
      <form className="w-100">
        <div className="flex flex-col items-center">
          <label htmlFor="email" className="p-4 w-full flex flex-col">
            E-mail
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={changeEmailHandler}
              className="w-full h-8"
            />
          </label>
          <label htmlFor="password" className="p-4 w-full flex flex-col">
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={changePasswordHandler}
              className="w-full h-8"
            />
          </label>
        </div>
        <div className="p-4 flex flex-row justify-between items-center">
          <Button
            label="Login"
            variant="contained"
            disabled={!isValid}
            onClick={loginHandler}
            className="w-24"
            size="medium"
          ></Button>
          <Button
            label="Register"
            variant="contained"
            disabled={!isValid}
            onClick={registerHandler}
            className="w-24"
            size="medium"
          ></Button>
        </div>
      </form>
      <Notification />
    </Login>
  );
};

export default LoginPage;
