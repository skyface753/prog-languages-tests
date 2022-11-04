#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# TS code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DEST} \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    -I ../proto \
    ../proto/*.proto

# JS
protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DEST} \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
    -I ../proto \
    ../proto/*.proto

# yarn run grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:${PROTO_DEST} \
#     --js_out=import_style=commonjs,binary:${PROTO_DEST} \
#     --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DEST} \
#     --grpc_out=grpc_js:${PROTO_DEST} \
#     -I ../proto \
#     ../proto/*.proto

# WORKING
# protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DEST} \
#     --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DEST} \
#     --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
#     -I ../proto \
#     ../proto/*.proto