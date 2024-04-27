/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./common";

export const protobufPackage = "identity";

export interface RpcContact {
  link?: string | undefined;
  name: string;
  value: string;
  type: string;
  isPrimary: boolean;
  isVisible: boolean;
}

export interface RpcContactList {
  items: RpcContact[];
}

export const IDENTITY_PACKAGE_NAME = "identity";

export interface ContactServiceClient {
  getAll(request: Empty): Observable<RpcContactList>;
}

export interface ContactServiceController {
  getAll(request: Empty): Promise<RpcContactList> | Observable<RpcContactList> | RpcContactList;
}

export function ContactServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAll"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ContactService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ContactService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CONTACT_SERVICE_NAME = "ContactService";
