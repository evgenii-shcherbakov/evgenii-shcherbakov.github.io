import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { DataService } from './services/data.service';
import { UserCreate, UserEdit, UserList } from '@/resources/users';
import React from 'react';
import { AuthService } from '@/services/auth.service';

export const App = () => (
  <Admin dataProvider={DataService.instance} authProvider={AuthService.instance}>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
);
