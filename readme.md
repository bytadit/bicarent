# Binar Synrgy 6 - FSW3 Challenge 5 
REST API using Express + Typescript + KnexJS

# Config
PORT = 1234
# Endpoint List
<b>GET</b> | Read All Cars Data <br>
<pre>http://localhost:12345/api/v1/cars </pre>
<b>Sample Result: </b><br>
<pre>
{
    "status": "success",
    "message": "Data seluruh mobil",
    "data": [
        {
            "id": 1,
            "name": "cadillac prius",
            "size": "Medium",
            "rent_per_day": 908579,
            "img_id": "1d07e485-508a-4b35-84dd-d8a782bedff5",
            "img_url": "./public/uploads/image3.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 2,
            "name": "jeep 2",
            "size": "Small",
            "rent_per_day": 227283,
            "img_id": "bc376bb3-85f9-40d9-875c-9270f9383e92",
            "img_url": "./public/uploads/image4.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        },
        {
            "id": 3,
            "name": "dodge explorer",
            "size": "Medium",
            "rent_per_day": 936900,
            "img_id": "94528117-c70f-4e6a-8630-703c50d4e703",
            "img_url": "./public/uploads/image5.jpg",
            "created_at": "2023-11-08T00:35:20.851Z",
            "updated_at": "2023-11-08T00:35:20.851Z"
        }
    ]
}  
</pre>
<hr>
<b>GET</b> | Read Data By Car Id
<pre>http://localhost:12345/api/v1/cars/:id</pre>
<b>Sample Result: </b><br>
<pre>
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
</pre>
<hr>
<b>POST</b> | Insert New Car Data
<pre>http://localhost:12345/api/v1/cars</pre>
<b>Sample Result: </b><br>
<pre>
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
</pre>
<hr>
<b>PUT</b> | Update Specific Data
<pre>http://localhost:12345/api/v1/cars/:id/edit</pre>
<b>Sample Result: </b><br>
<pre>
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
</pre>
<hr>
<b>DELETE</b> | Delete Data by Car Id
<pre>http://localhost:12345/api/v1/cars/:id</pre>
<b>Sample Result: </b><br>
<pre>
    {
    "status": "success",
    "data": true,
    "message": "Data mobil dengan id: 17 berhasil dihapus!"
}
</pre>

# Database Design
