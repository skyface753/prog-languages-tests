# 1 First Server

curl http://localhost:3333/hello

# 2 Multiple Server and Ports

curl http://localhost:3333/hello
curl http://localhost:4444/hello

# 3 Query

curl 'http://localhost:3333?first=1&second='

# 4 Req Body

curl -X POST -d 'This is the body' 'http://localhost:3333?first=1&second='

# 5 Form Data

curl -X POST -F 'myName=Sammy' 'http://localhost:3333/hello'

# 6 Headers and Status Codes

curl -v -X POST 'http://localhost:3333/hello'
