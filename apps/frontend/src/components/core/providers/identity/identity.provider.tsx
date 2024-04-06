'use client';

import { IdentityContextType } from './identity.types';
import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';
import { IdentityContext } from './identity.context';

type Props = HOCProps & {
  identity: IdentityContextType;
};

export const IdentityProvider: FC<Props> = ({ children, identity }) => {
  return <IdentityContext.Provider value={identity}>{children}</IdentityContext.Provider>;
};
