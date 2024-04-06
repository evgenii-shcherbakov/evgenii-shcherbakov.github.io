'use client';

import { DEFAULT_BACKEND_IDENTITY } from '@packages/common';
import { IdentityContextType } from 'components/core/providers/identity/identity.types';
import { createContext } from 'react';

export const IdentityContext = createContext<IdentityContextType>(DEFAULT_BACKEND_IDENTITY);
