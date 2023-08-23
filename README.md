# Online Food App
# Live URL
https://real-teal-dolphin-tie.cyclic.cloud

# Technologies Used
#### 1.Frontend: React
#### 2.Backend: Express.js
#### 3.Database: MongoDB



## API Reference

#### Singup

```http
  post /api/singup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| username | `string` | **Required**. Enter username |
| email | `string` | **Required**. Enter Email |
| password | `string` | **Required**. Enter Password |

#### Login


```http
  Post /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email      | `string` | **Required**. Enter Emai |
| password | `string` | **Required**. Enter Password |



#### Delete User
```http
  delete /api/deleteUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. User _id |

#### All User
```http
  GET /api/getAllUsers
```
   | Description                |
| :------------------------- |
| Display All User |


#### Create Category
```http
  POST /api/createCategory
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| CategoryName | `string` | **Required**. Name |
|CategoryImage| `string` | **Required**. Enter Image |

#### All Category
```http
  GET /api/categoryByName
```
| Description                |
| :------------------------- |
| Display All Category |

#### Delete Category
```http
  delete /api/deleteCategory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. category _id |

#### Search Category BY id
```http
  GET /api/categoryById?_id=64d986c01c2a7fc9508b0ab4
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. category _id |

#### Create Restaurant
```http
  POST /api/createRestuarent
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| RestuarentName | `string` | **Required**. Name |
| RestuarentImage| `string` | **Required**. Enter Image |

#### All Restaurant
```http
  GET /api/getAllRestuarent
```
| Description                |
| :------------------------- |
| Display All Reataurant |

#### Search Restaurant BY id
```http
  GET /api/restuarentById?_id=64c8f21bd94efae6a74edfba
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. restuarent _id |

#### Delete Category
```http
  delete /api/deleteRestuarent
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. restuarent _id |

#### Create Items
```http
  POST /api/createItem
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ItemName | `string` | **Required**. Name |
| thumbnail| `string` | **Required**. Enter Image |
| Price| `string` | **Required**. Enter Price |
| description| `string` | **Required**. Enter description |
| category| `string` | **Required**. Enter category |
| restuarent| `string` | **Required**. Enter restuarent |

#### All Items
```http
  GET /api/getAllItems
```
| Description                |
| :------------------------- |
| Display All Items |

#### Items by Category
```http
  GET /api/itemBycategory?category=Biryani
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| category   | `string` | provide category name |

#### Items by Restaurant
```http
  GET /api/itemByRestuarent?restuarent=LalQila Restaurant
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| restuarent  | `string` | provide restuarent name |

#### Search Item BY id
```http
  GET /api/itemById?_id=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. item _id |


#### Delete Items
```http
  delete /api/deleteItem
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id     | `string` | **Required**. item _id |








