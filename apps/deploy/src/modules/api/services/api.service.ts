import { HttpClient } from '@shared/core';

export const API_SERVICE = Symbol('ApiService');

export interface ApiService extends HttpClient {}
