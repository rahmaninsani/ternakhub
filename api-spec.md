# API Spec

## Authentication

Some API must use this authentication

Request :

- Header :
  - Bearer "ACCESS_TOKEN"

> # Home

## Get Flashsale Products

Request :

- Method : GET
- Endpoint : `/products/flashsale`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "discountPercent": "decimal",
      "priceAfterDiscount": "long",
      "weight": "integer",
      "unit": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "priceWithDiscount": "long",
      "weight": "integer",
      "unit": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Get Latest Products

Request :

- Method : GET
- Endpoint : `/products/latest`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Get Best Seller Products

Request :

- Method : GET
- Endpoint : `/products/best-seller`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

> # Search

## Search Products

Request :

- Method : GET
- Endpoint : `/products`
- Header :
  - Accept: application/json
- Query Param :
  - keyword : string

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "image": "string",
      "price": "long",
      "weight": "integer",
      "unit": "string",
      "amountSold": "integer",
      "rating": "decimal",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

> # Detail

## Get Product Detail

Request :

- Method : GET
- Endpoint : `/products/{productId}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "image": "string",
    "description": "string",
    "price": "long",
    "weight": "integer",
    "unit": "string",
    "amountSold": "integer",
    "rating": "decimal",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Product Reviews

Request :

- Method : GET
- Endpoint : `/products/{productId}/reviews`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user": {
        "id": "integer, unique",
        "name": "string"
      },
      "rating": "decimal",
      "content": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user": {
        "id": "integer, unique",
        "name": "string"
      },
      "rating": "decimal",
      "content": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

> # Bag

## Get Cart Items

Request :

- Method : GET
- Endpoint : `/carts`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "products": [
      {
        "id": "integer, unique",
        "name": "string",
        "price": "long",
        "weight": "integer",
        "unit": "string",
        "quantity": "integer",
        "createdAt": "date",
        "updatedAt": "date"
      },
      {
        "id": "integer, unique",
        "name": "string",
        "price": "long",
        "weight": "integer",
        "unit": "string",
        "quantity": "integer",
        "createdAt": "date",
        "updatedAt": "date"
      }
    ]
  }
}
```

## Add Cart Item

Request :

- Method : POST
- Endpoint : `/carts`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "productId": "integer"
}
```

Response :

```json
{
  "code": "integer",
  "status": "string"
}
```

## Update Cart Item

Request :

- Method : PUT
- Endpoint : `/carts/{productId}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "quantity": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "products": [
      {
        "id": "integer, unique",
        "name": "string",
        "price": "long",
        "weight": "integer",
        "unit": "string",
        "quantity": "integer",
        "createdAt": "date",
        "updatedAt": "date"
      }
    ]
  }
}
```

## Delete Cart Item

Request :

- Method : DELETE
- Endpoint : `/carts/{productId}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "integer",
  "status": "string"
}
```

> # Addresses

## Get Addresses

Request :

- Method : GET
- Endpoint : `/addresses`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "label": "string",
      "ownerName": "string",
      "phone": "long",
      "address": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "label": "string",
      "ownerName": "string",
      "phone": "string",
      "address": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Create Address

Request :

- Method : POST
- Endpoint : `/addresses`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "label": "string",
  "owner_name": "string",
  "phone": "string",
  "address": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "label": "string",
    "ownerName": "string",
    "phone": "long",
    "address": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Address

Request :

- Method : PUT
- Endpoint : `/addresses/{addressId}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "label": "string",
  "owner_name": "string",
  "phone": "string",
  "address": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "label": "string",
    "ownerName": "string",
    "phone": "long",
    "address": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Delete Address

Request :

- Method : DELETE
- Endpoint : `/addresses/{addressId}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

> # Shipping Method

## Get Shipping Method

Request :

- Method : GET
- Endpoint : `/shipping-methods`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "cost": "long",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "cost": "long",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

> # Payment Method

## Get Payment Method

Request :

- Method : GET
- Endpoint : `/payment-methods`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "code": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "code": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

> # Orders

## Get Order

Request :

- Method : GET
- Endpoint : `/orders`
- Header :
  - Accept: application/json
- Query Param :
  - status : string

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "orderNumber": "string",
      "orderDate": "date",
      "status": "string",
      "total": "long",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "orderNumber": "string",
      "orderDate": "date",
      "status": "string",
      "total": "long",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Get Order Detail

Request :

- Method : GET
- Endpoint : `/orders/{ordersId}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "orderNumber": "string",
    "orderDate": "date",
    "shippingMethod": {
      "name": "string",
      "cost": "long"
    },
    "shippingAddress": {
      "name": "string",
      "phone": "long",
      "address": "string"
    },
    "paymentMethod": {
      "name": "string",
      "bankCode": "string"
    },
    "total": "long",
    "status": "string",
    "products": [
      {
        "id": "integer, unique",
        "name": "string",
        "image": "string",
        "quantity": "integer",
        "price": "long",
        "weight": "integer",
        "unit": "string",
        "reviews": {
          "id": "integer, unique",
          "name": "string",
          "rating": "decimal",
          "content": "string"
        }
      },
      {
        "id": "integer, unique",
        "name": "string",
        "image": "string",
        "quantity": "integer",
        "price": "long",
        "weight": "integer",
        "unit": "string",
        "reviews": {
          "id": "integer, unique",
          "name": "string",
          "rating": "decimal",
          "content": "string"
        }
      }
    ],
    "virtualAccount": "string",
    "receivedDate": "date",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

> # User

## Get Profile

Request :

- Method : GET
- Endpoint : `/users`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "dateOfBirth": "date",
    "gender": "string",
    "contact": {
      "email": "string",
      "phone": "string"
    },
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Create User (Register)

Request :

- Method : POST
- Endpoint : `/users/register`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "string",
  "dateOfBirth": "date",
  "gender": "string",
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "password": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "dateOfBirth": "date",
    "gender": "string",
    "contact": {
      "email": "string",
      "phone": "string"
    },
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Login User

Request :

- Method : POST
- Endpoint : `/users/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "email": "string",
  "password": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "accessToken": "string"
  }
}
```

## Update Profile

Request :

- Method : PUT
- Endpoint : `/users/{userId}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "string",
  "dateOfBirth": "date",
  "gender": "string",
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "password": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "dateOfBirth": "date",
    "gender": "string",
    "contact": {
      "email": "string",
      "phone": "string"
    },
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```
