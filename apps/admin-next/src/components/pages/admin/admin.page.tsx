'use client';
import { FC } from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import {
  UserResourceEdit,
  UserResourceList,
  UserResourceCreate,
  UserResourceShow,
} from '@components/resources/users';
import LoginPage from '@components/pages/login/login.page';
import { authProvider, dataProvider } from '@features/http';
import { darkTheme, lightTheme } from '@features/theme';

const AdminPage: FC = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="dark"
    >
      <Resource
        name="users"
        list={UserResourceList}
        edit={UserResourceEdit}
        create={UserResourceCreate}
        show={UserResourceShow}
        recordRepresentation="email"
      />
    </Admin>
  );
};

export default AdminPage;
