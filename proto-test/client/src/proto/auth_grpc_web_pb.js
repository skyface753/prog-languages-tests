/**
 * @fileoverview gRPC-Web generated client stub for template
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.template = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.template.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.template.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.LoginRequest,
 *   !proto.template.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/template.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.template.LoginRequest,
  proto.template.LoginResponse,
  /**
   * @param {!proto.template.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.template.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.template.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.template.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.RefreshTokenRequest,
 *   !proto.template.RefreshTokenResponse>}
 */
const methodDescriptor_AuthService_RefreshToken = new grpc.web.MethodDescriptor(
  '/template.AuthService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.template.RefreshTokenRequest,
  proto.template.RefreshTokenResponse,
  /**
   * @param {!proto.template.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.RefreshTokenResponse.deserializeBinary
);


/**
 * @param {!proto.template.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.RefreshTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.RefreshTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.AuthServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken,
      callback);
};


/**
 * @param {!proto.template.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.RefreshTokenResponse>}
 *     Promise that resolves to the response
 */
proto.template.AuthServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.LogoutRequest,
 *   !proto.template.LogoutResponse>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/template.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.template.LogoutRequest,
  proto.template.LogoutResponse,
  /**
   * @param {!proto.template.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.template.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.template.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.template.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.template.User>}
 */
const methodDescriptor_AuthService_Status = new grpc.web.MethodDescriptor(
  '/template.AuthService/Status',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.template.User,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.User.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.AuthServiceClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.AuthService/Status',
      request,
      metadata || {},
      methodDescriptor_AuthService_Status,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.User>}
 *     Promise that resolves to the response
 */
proto.template.AuthServicePromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.AuthService/Status',
      request,
      metadata || {},
      methodDescriptor_AuthService_Status);
};


module.exports = proto.template;

