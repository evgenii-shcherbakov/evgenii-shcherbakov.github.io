import { NextRequest, NextResponse } from 'next/server';
import { BcryptServiceImpl, CryptographyService } from '@packages/cryptography';
import { AdminHash } from '@packages/common';

const service: CryptographyService = new BcryptServiceImpl(+process.env.BCRYPT_SALT);

export async function POST(request: NextRequest) {
  try {
    const body: AdminHash = await request.json();
    const hash = await service.hash(body.value);
    return NextResponse.json({ value: hash });
  } catch (exception) {
    return new Response(`Hash exception`, { status: 500 });
  }
}
