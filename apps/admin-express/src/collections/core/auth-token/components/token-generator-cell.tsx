import React, { FC } from 'react';
import { Props } from 'payload/components/views/Cell';

export const TokenGeneratorCell: FC<Props> = ({ cellData }) => {
  return (
    <span className="code-cell" style={{ whiteSpace: 'nowrap', width: '10rem' }}>
      {cellData?.toString()}
    </span>
  );
};
