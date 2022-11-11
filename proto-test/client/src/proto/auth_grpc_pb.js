// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_template_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type template.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type template.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_LogoutRequest(arg) {
  if (!(arg instanceof auth_pb.LogoutRequest)) {
    throw new Error('Expected argument of type template.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_LogoutRequest(buffer_arg) {
  return auth_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_LogoutResponse(arg) {
  if (!(arg instanceof auth_pb.LogoutResponse)) {
    throw new Error('Expected argument of type template.LogoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_LogoutResponse(buffer_arg) {
  return auth_pb.LogoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_RefreshTokenRequest(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type template.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_RefreshTokenRequest(buffer_arg) {
  return auth_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_RefreshTokenResponse(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenResponse)) {
    throw new Error('Expected argument of type template.RefreshTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_RefreshTokenResponse(buffer_arg) {
  return auth_pb.RefreshTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_StatusRequest(arg) {
  if (!(arg instanceof auth_pb.StatusRequest)) {
    throw new Error('Expected argument of type template.StatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_StatusRequest(buffer_arg) {
  return auth_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_User(arg) {
  if (!(arg instanceof auth_pb.User)) {
    throw new Error('Expected argument of type template.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_User(buffer_arg) {
  return auth_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/template.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_template_LoginRequest,
    requestDeserialize: deserialize_template_LoginRequest,
    responseSerialize: serialize_template_LoginResponse,
    responseDeserialize: deserialize_template_LoginResponse,
  },
  refreshToken: {
    path: '/template.AuthService/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshTokenRequest,
    responseType: auth_pb.RefreshTokenResponse,
    requestSerialize: serialize_template_RefreshTokenRequest,
    requestDeserialize: deserialize_template_RefreshTokenRequest,
    responseSerialize: serialize_template_RefreshTokenResponse,
    responseDeserialize: deserialize_template_RefreshTokenResponse,
  },
  logout: {
    path: '/template.AuthService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LogoutRequest,
    responseType: auth_pb.LogoutResponse,
    requestSerialize: serialize_template_LogoutRequest,
    requestDeserialize: deserialize_template_LogoutRequest,
    responseSerialize: serialize_template_LogoutResponse,
    responseDeserialize: deserialize_template_LogoutResponse,
  },
  status: {
    path: '/template.AuthService/Status',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.StatusRequest,
    responseType: auth_pb.User,
    requestSerialize: serialize_template_StatusRequest,
    requestDeserialize: deserialize_template_StatusRequest,
    responseSerialize: serialize_template_User,
    responseDeserialize: deserialize_template_User,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
