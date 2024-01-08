import { NextRequest, NextResponse } from 'next/server';
import { telegramService } from '@/features/telegram/services';

export const POST = async (request: NextRequest) => {
  try {
    const { navigator, href } = await request.json();
    await telegramService.spyOnRequest(navigator, href);
    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({});
  }
};
