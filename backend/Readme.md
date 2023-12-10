<h1 align="center">Car Management API</h1>

<!-- <h2 align="center">Entity Relationship Diagram</h2>
<p align="center">
  <img width="460" height="300" src="">
</p> -->


## How To Use:
npm install                 : Install all packages<br/>
npm run db:create           : Create database<br/>
npm run db:migrate          : Run database migration/create tables<br/>
npm run db:seed             : Run seeders/predefined data<br/>
npm run db:migrate:refresh  : Revert migration
npm run start               : Run app<br/>

## Endpoint Swagger Docs:
```[ENDPOINT] /api/v1/api-docs```
```url
[GET] http://localhost:5000/api/v1/api-docs
```

# Cars Enpoints

## Get All Cars
```[ENDPOINT] /api/v1/cars```
```url
[GET] http://localhost:5000/api/v1/cars
```

#### Sample Response body
```json
{
  "status": "OK",
  "data": {
    "cars": [
      {
        "id": 1,
        "name": "Lambo",
        "image": "lambo.jpg",
        "price": 12230000,
        "size": "Large",
        "type": "Sedan",
        "createdAt": "2023-11-20T23:19:42.399Z",
        "updatedAt": "2023-11-20T23:19:42.399Z"
      },
      ...
    ]
  },
    "meta": {
      "total": 5
  }
}
```

## Get One Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[GET] http://localhost:5000/api/v1/cars/1
```

#### Sample Response body
```json
{
  "status": "OK",
  "data": {
    "id": 1,
    "name": "Lambo",
    "image": "lambo.jpg",
    "price": 12230000,
    "size": "Large",
    "type": "Sedan",
    "createdAt": "2023-11-20T23:19:42.399Z",
    "updatedAt": "2023-11-20T23:19:42.399Z"
  }
}
```

## Create Car
```[ENDPOINT] /api/v1/cars```
```url
[POST] http://localhost:5000/api/v1/cars
```

#### Sample Request body
```json
{
  "name": String,
  "image": String,
  "price": Integer,
  "size": String,
  "type": string
}
```

#### Sample Response body
```json
{
  "status": "OK",
  "data": {
    "id": 2,
    "name": "Ferrari",
    "image": "ferrari.jpg",
    "price": 3322324232,
    "size": "Medium",
    "type": "Sedan",
    "createdAt": "2023-11-20T23:24:42.399Z",
    "updatedAt": "2023-11-20T23:24:42.399Z"
  }
}
```

## Update Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[PUT] http://localhost:5000/api/v1/cars/1
```

#### Sample Request body
```json
{
  "name": String,
  "image": String,
  "price": Integer,
  "size": String,
  "type": String
}
```

#### Sample Response body
```json
{
  "status": "OK",
  "message": "Car Successfully Updated"
}
```

## Delete Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[DELETE] http://localhost:5000/api/v1/cars/1
```

#### Sample Response body
```json
{
  "status": "OK",
  "message": "Car Successfully Deleted"
}
```

# Users Enpoints

### Super Admin Credentials:
Email: superadmin@gmail.com <br>
Password: superadmin

## Users Registration
```[ENDPOINT] /api/v1/register```
```url
[POST] http://localhost:5000/api/v1/register
```

#### Sample Request body
```json
{
  "username": String,
  "email": string,
  "password": string,
  "confPassword": string
}
```

#### Sample Response body
```json
{
  "status": "OK",
  "message": "Register User Successfully",
  "data": {
    "id": 1,
    "username": "bgsp_aditya",
    "email": "adityabagusp345@gmail.com",
    "password": "$2a$12$cgyYkkuMCNYuTzAQpW6HyOop/XIeXJmbX.woFLh48kDcAT6nJAONe",
    "role": "Member",
    "updatedAt": "2023-11-21T00:36:36.859Z",
    "createdAt": "2023-11-21T00:36:36.859Z",
    "refresh_token": null
  }
}
```

## Login Users
```[ENDPOINT] /api/v1/login```
```url
[POST] http://localhost:5000/api/v1/login
```

#### Sample Request body
```json
{
  "email": string,
  "password": string
}
```

#### Sample Response body
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MTA4MDYsImV4cCI6MTcwMDgxMTEwNn0.m0Dk3YJvP3byRjaZOWj8GeguE_vuJ79uCN6X6esZJf0"
}
```

## Get All Users
```[ENDPOINT] /api/v1/users```
```url
[GET] http://localhost:5000/api/v1/users
```

#### Sample Response body
```json
{
  "status": "OK",
  "data": {
    "users": [
      {
        "id": 1,
        "username": "bgsp_aditya",
        "email": "adityabagusp345@gmail.com",
        "password": "$2a$12$cgyYkkuMCNYuTzAQpW6HyOop/XIeXJmbX.woFLh48kDcAT6nJAONe",
        "role": "Member",
        "refresh_token": null,
        "createdAt": "2023-11-20T23:49:09.169Z",
        "updatedAt": "2023-11-20T23:49:09.169Z"
      },
      ...
    ]
  },
  "meta": {
    "total": 8
  }
}
```

## Who am I
```[ENDPOINT] /api/v1/cars/user```
```url
[GET] http://localhost:5000/api/v1/user
```

#### Sample Request headers authorization
```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MTA4MDYsImV4cCI6MTcwMDgxMTEwNn0.m0Dk3YJvP3byRjaZOWj8GeguE_vuJ79uCN6X6esZJf0
```

#### Sample Response body
```json
{
  "id": 1,
  "username": "Admin",
  "email": "admin@gmail.com",
  "password": "$2a$12$cgyYkkuMCNYuTzAQpW6HyOop/XIeXJmbX.woFLh48kDcAT6nJAONe",
  "role": "Admin",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MTA4MDYsImV4cCI6MTcwMDgxMTEwNn0.m0Dk3YJvP3byRjaZOWj8GeguE_vuJ79uCN6X6esZJf0",
  "createdAt": "2023-11-19T22:07:43.439Z",
  "updatedAt": "2023-11-21T01:01:52.564Z"
}
```

## Add Users by Super Admin
```[ENDPOINT] /api/v1/admin```
```url
[POST] http://localhost:5000/api/v1/admin
```

#### Sample Request body
```json
{
  "username": string,
  "email": string,
  "password": string,
  "confPassword": string,
}
```

#### Sample Request headers authorization
```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MTA4MDYsImV4cCI6MTcwMDgxMTEwNn0.m0Dk3YJvP3byRjaZOWj8GeguE_vuJ79uCN6X6esZJf0
```

#### Sample Response body
```json
{
  "status": "OK",
  "message": "Register User Successfully",
  "data": {
    "id": 2,
    "username": "Admin",
    "email": "admin@gmail.com",
    "password": "$2a$12$cgyYkkuMCNYuTzAQpW6HyOop/XIeXJmbX.woFLh48kDcAT6nJAONe",
    "role": "Admin",
    "updatedAt": "2023-11-21T01:12:26.129Z",
    "createdAt": "2023-11-21T01:12:26.129Z",
    "refresh_token": null
  }
}
```
