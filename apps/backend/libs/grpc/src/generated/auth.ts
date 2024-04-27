/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface RpcRegisterUser {
  email: string;
  password: string;
}

export interface RpcRefreshToken {
  token: string;
}

export interface RpcUser {
  email: string;
  isActive: boolean;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  register(request: RpcRegisterUser): Observable<RpcUser>;

  login(request: RpcRegisterUser): Observable<RpcUser>;

  refreshToken(request: RpcRefreshToken): Observable<RpcRefreshToken>;
}

export interface AuthServiceController {
  register(request: RpcRegisterUser): Promise<RpcUser> | Observable<RpcUser> | RpcUser;

  login(request: RpcRegisterUser): Promise<RpcUser> | Observable<RpcUser> | RpcUser;

  refreshToken(request: RpcRefreshToken): Promise<RpcRefreshToken> | Observable<RpcRefreshToken> | RpcRefreshToken;
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
