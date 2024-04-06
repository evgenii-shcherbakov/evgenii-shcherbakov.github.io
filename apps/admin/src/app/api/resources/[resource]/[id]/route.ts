import { NextRequest } from 'next/server';
import { database } from '@features/database/api';

type Props = {
  params: {
    resource: string;
    id: string;
  };
};

export async function GET(_: NextRequest, { params }: Props) {
  return database.getById(params.resource, params.id);
}

export async function PUT(request: NextRequest, { params }: Props) {
  return database.updateById(request, params.resource, params.id);
}

export async function DELETE(_: NextRequest, { params }: Props) {
  return database.deleteById(params.resource, params.id);
}
