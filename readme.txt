(GET) Read All Data => http://localhost:12345/api/v1/cars
(GET) Read Data By Id => http://localhost:12345/api/v1/cars/:id
(POST) Insert New Data => http://localhost:12345/api/v1/cars
(PUT) Update Specific Data => http://localhost:12345/api/v1/cars/:id/edit
(DELETE) Delete Data by Id => http://localhost:12345/api/v1/cars/:id


Response findAll:
Url: (GET) http://localhost:12345/api/v1/cars
{
    "status": "success",
    "message": "Data seluruh mobil",
    "data": [
        {
            "id": 4,
            "name": "cadillac prius",
            "size": "Medium",
            "rent_per_day": 908579,
            "img_id": "1d07e485-508a-4b35-84dd-d8a782bedff5",
            "img_url": "./public/uploads/image3.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 5,
            "name": "jeep 2",
            "size": "Small",
            "rent_per_day": 227283,
            "img_id": "bc376bb3-85f9-40d9-875c-9270f9383e92",
            "img_url": "./public/uploads/image4.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 6,
            "name": "dodge explorer",
            "size": "Medium",
            "rent_per_day": 936900,
            "img_id": "94528117-c70f-4e6a-8630-703c50d4e703",
            "img_url": "./public/uploads/image5.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 7,
            "name": "bugatti focus",
            "size": "Medium",
            "rent_per_day": 245945,
            "img_id": "a6131dce-bdef-4b23-8188-a318b1f478e0",
            "img_url": "./public/uploads/image6.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 8,
            "name": "bentley xts",
            "size": "Medium",
            "rent_per_day": 742487,
            "img_id": "d73bbbae-8fb9-48b4-8c9a-c37fc9d556b6",
            "img_url": "./public/uploads/image7.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 9,
            "name": "chrysler corvette",
            "size": "Medium",
            "rent_per_day": 218875,
            "img_id": "5cd1e29b-1bd8-48c3-ba91-b184c9329d1c",
            "img_url": "./public/uploads/image8.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 10,
            "name": "ford model y",
            "size": "Large",
            "rent_per_day": 403097,
            "img_id": "7db2b671-db2c-4b20-adaf-3f85857b1b58",
            "img_url": "./public/uploads/image9.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 11,
            "name": "Grand Livina2",
            "size": "large",
            "rent_per_day": 54444,
            "img_id": "eqweqw32112",
            "img_url": "./public/uploads/dsadasdas2d.jpg",
            "created_at": "2023-11-08T08:39:25.899Z",
            "updated_at": "2023-11-08T08:39:25.899Z"
        },
        {
            "id": 12,
            "name": "Grand Livina",
            "size": "large",
            "rent_per_day": 54444,
            "img_id": "eqweqw32112",
            "img_url": "./public/uploads/dsadasdas2d.jpg",
            "created_at": "2023-11-08T08:39:33.614Z",
            "updated_at": "2023-11-08T08:39:33.614Z"
        },
        {
            "id": 14,
            "name": "Ferrari Blue",
            "size": "large",
            "rent_per_day": 54444,
            "img_id": "eqweqw32112",
            "img_url": "./public/uploads/dsadasdas2d.jpg",
            "created_at": "2023-11-08T11:42:45.977Z",
            "updated_at": "2023-11-08T11:42:45.977Z"
        },
        {
            "id": 15,
            "name": "Ferrari Blue",
            "size": "large",
            "rent_per_day": 40000,
            "img_id": "dasdasddas",
            "img_url": "./public/ada.jpg",
            "created_at": "2023-11-08T11:44:54.253Z",
            "updated_at": "2023-11-08T11:44:54.253Z"
        },
        {
            "id": 16,
            "name": "Ferrari Blue",
            "size": "large",
            "rent_per_day": 40000,
            "img_id": "dasdasddas",
            "img_url": "./public/ada.jpg",
            "created_at": "2023-11-08T11:45:04.562Z",
            "updated_at": "2023-11-08T11:45:04.562Z"
        }
    ]
}


Response findbyId:
Url: (GET) http://localhost:12345/api/v1/cars/4
{
    "status": "success",
    "message": "Data mobil dengan id: 4",
    "data": {
        "id": 4,
        "name": "cadillac prius",
        "size": "Medium",
        "rent_per_day": 908579,
        "img_id": "1d07e485-508a-4b35-84dd-d8a782bedff5",
        "img_url": "./public/uploads/image3.jpg",
        "created_at": "2023-11-08T00:35:20.851Z",
        "updated_at": "2023-11-08T00:35:20.851Z"
    }
}

Response addNewData
url : (POST) http://localhost:12345/api/v1/cars
{
    "status": "success",
    "message": "Data mobil berhasil disimpan!",
    "data": {
        "id": 17,
        "name": "Bugatti Veyron",
        "size": "large",
        "rent_per_day": 40006,
        "img_id": "abc",
        "img_url": "./public/bugati-v.jpg",
        "created_at": "2023-11-08T13:56:15.451Z",
        "updated_at": "2023-11-08T13:56:15.451Z"
    }
}


Response Update Data
url : (PUT) http://localhost:12345/api/v1/cars/17
{
    "status": "success",
    "message": "Data mobil berhasil disimpan!",
    "data": {
        "id": 17,
        "name": "Bugatti Veyron 2",
        "size": "very large",
        "rent_per_day": 40006,
        "img_id": "abc",
        "img_url": "./public/bugati-v.jpg",
        "created_at": "2023-11-08T13:56:15.451Z",
        "updated_at": "2023-11-08T13:56:15.451Z"
    }
}

Response Delete Data
url : (DELETE) http://localhost:12345/api/v1/cars/17
{
    "status": "success",
    "data": true,
    "message": "Data mobil dengan id: 17 berhasil dihapus!"
}