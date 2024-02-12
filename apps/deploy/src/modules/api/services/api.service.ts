import { HttpService } from '@shared/core';

export const API_SERVICE = Symbol('ApiService');

export interface ApiService extends HttpService {}
