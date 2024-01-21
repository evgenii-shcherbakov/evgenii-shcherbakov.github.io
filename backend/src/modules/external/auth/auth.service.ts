import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from '@backend/modules/external/auth/dto/jwt-payload.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(name: string): string {
    const dateNow = Date.now();

    const payload: JwtPayloadDto = {
      name,
      hex: dateNow.toString(16),
      oct: dateNow.toString(8),
    };

    return this.jwtService.sign(payload);
  }
}
