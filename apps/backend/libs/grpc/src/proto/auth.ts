/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface RegisterUserDto {
  email: string;
  password: string;
}

export interface RefreshTokenDto {
  token: string;
}

export interface User {
  email: string;
  isActive: boolean;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  register(request: RegisterUserDto): Observable<User>;

  login(request: RegisterUserDto): Observable<User>;

  refreshToken(request: RefreshTokenDto): Observable<RefreshTokenDto>;
}

export interface AuthServiceController {
  register(request: RegisterUserDto): Promise<User> | Observable<User> | User;

  login(request: RegisterUserDto): Promise<User> | Observable<User> | User;

  refreshToken(request: RefreshTokenDto): Promise<RefreshTokenDto> | Observable<RefreshTokenDto> | RefreshTokenDto;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "login", "refreshToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
