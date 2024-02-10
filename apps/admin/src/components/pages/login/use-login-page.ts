import { ChangeEvent, useEffect, useState } from 'react';
import { useLogin, useNotify } from 'react-admin';

export const useLoginPage = () => {
  const login = useLogin();
  const notify = useNotify();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(() => !!(email && password));
  }, [email, password]);

  const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => event.target.value);
  };

  const changePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => event.target.value);
  };

  const clear = () => {
    setEmail(() => '');
    setPassword(() => '');
    setIsValid(() => false);
  };

  const submitHandlerFactory = (isRegister: boolean) => {
    return async () => {
      try {
        await login({ email, password, isRegister });
        clear();
      } catch (exception) {
        const defaultMessage = isRegister ? 'Cannot register' : 'Invalid email or password';
        const notificationMessage = exception instanceof Error ? exception.message : defaultMessage;
        notify(notificationMessage, { type: 'error' });
      }
    };
  };

  const loginHandler = submitHandlerFactory(false);
  const registerHandler = submitHandlerFactory(true);

  return {
    email,
    password,
    isValid,
    changeEmailHandler,
    changePasswordHandler,
    loginHandler,
    registerHandler,
  };
};
