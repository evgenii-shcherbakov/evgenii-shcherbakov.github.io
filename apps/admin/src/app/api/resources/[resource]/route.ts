import { NextRequest } from 'next/server';
import { database } from '@features/database/api';

type Props = {
  params: {
    resource: string;
  };
};

export async function GET(request: NextRequest, { params }: Props) {
  return database.getMany(request, params.resource);
}

export async function POST(request: NextRequest, { params }: Props) {
  return database.create(request, params.resource);
}

export async function PUT(request: NextRequest, { params }: Props) {
  return database.updateMany(request, params.resource);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  return database.deleteMany(request, params.resource);
}
