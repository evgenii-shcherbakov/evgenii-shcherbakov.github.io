import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { DataService } from '@/services/data.service';
import React from 'react';
import { AuthService } from '@/services/auth.service';
import { darkTheme, lightTheme } from '@/shared/theme';
import { LoginPage } from '@/pages/login/login.page';
import { UserList } from '@/resources/users/user-list';
import { UserCreate } from '@/resources/users/user-create';
import { UserEdit } from '@/resources/users/user-edit';

export const App = () => (
  <Admin
    dataProvider={DataService.instance}
    authProvider={AuthService.instance}
    loginPage={LoginPage}
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    defaultTheme="dark"
  >
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
);
