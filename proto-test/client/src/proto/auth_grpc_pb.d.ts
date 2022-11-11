// package: template
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
    refreshToken: IAuthServiceService_IRefreshToken;
    logout: IAuthServiceService_ILogout;
    status: IAuthServiceService_IStatus;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<auth_pb.LoginRequest, auth_pb.LoginResponse> {
    path: "/template.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginResponse>;
}
interface IAuthServiceService_IRefreshToken extends grpc.MethodDefinition<auth_pb.RefreshTokenRequest, auth_pb.RefreshTokenResponse> {
    path: "/template.AuthService/RefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<auth_pb.RefreshTokenResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.RefreshTokenResponse>;
}
interface IAuthServiceService_ILogout extends grpc.MethodDefinition<auth_pb.LogoutRequest, auth_pb.LogoutResponse> {
    path: "/template.AuthService/Logout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LogoutRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LogoutRequest>;
    responseSerialize: grpc.serialize<auth_pb.LogoutResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LogoutResponse>;
}
interface IAuthServiceService_IStatus extends grpc.MethodDefinition<auth_pb.StatusRequest, auth_pb.User> {
    path: "/template.AuthService/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.StatusRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.StatusRequest>;
    responseSerialize: grpc.serialize<auth_pb.User>;
    responseDeserialize: grpc.deserialize<auth_pb.User>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginResponse>;
    refreshToken: grpc.handleUnaryCall<auth_pb.RefreshTokenRequest, auth_pb.RefreshTokenResponse>;
    logout: grpc.handleUnaryCall<auth_pb.LogoutRequest, auth_pb.LogoutResponse>;
    status: grpc.handleUnaryCall<auth_pb.StatusRequest, auth_pb.User>;
}

export interface IAuthServiceClient {
    login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    logout(request: auth_pb.LogoutRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    logout(request: auth_pb.LogoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    logout(request: auth_pb.LogoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    status(request: auth_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
    status(request: auth_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
    status(request: auth_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: auth_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public logout(request: auth_pb.LogoutRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    public logout(request: auth_pb.LogoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    public logout(request: auth_pb.LogoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LogoutResponse) => void): grpc.ClientUnaryCall;
    public status(request: auth_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
    public status(request: auth_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
    public status(request: auth_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.User) => void): grpc.ClientUnaryCall;
}
