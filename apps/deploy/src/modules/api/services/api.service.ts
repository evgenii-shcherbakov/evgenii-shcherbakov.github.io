import { HttpClient } from '../../../../../../packages/common';

export const API_SERVICE = Symbol('ApiService');

export interface ApiService extends HttpClient {}
