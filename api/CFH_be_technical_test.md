---
title: My Project
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"

---

# My Project

Base URLs:

# Authentication

# CFH

## POST Add Product

POST /products/

> Body Parameters

```json
{
  "name": "test name",
  "description": "test description",
  "quantity": 2,
  "price": 200
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": {
    "newProductId": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|object|true|none||none|
|»» newProductId|string|true|none||none|

## POST Add Order

POST /orders/

> Body Parameters

```json
{
  "items": [
    {
      "productId": "666dc6166906d68d66659b42",
      "quantity": 1
    },
    {
      "productId": "666dc0128a821e0fcb05d684",
      "quantity": 4
    }
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": {
    "newProductId": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|object|true|none||none|
|»» newProductId|string|true|none||none|

## GET Get Order

GET /orders/

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": {
    "newProductId": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|object|true|none||none|
|»» newProductId|string|true|none||none|

## GET Get Products

GET /products

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|names|query|string| no |none|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": {
    "newProductId": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|object|true|none||none|
|»» newProductId|string|true|none||none|

## PUT Update Product

PUT /products

> Body Parameters

```json
{
  "id": "666dc6166906d68d66659b42",
  "quantity": 50,
  "price": 100,
  "description": "Edited Desc",
  "name": "Edited name"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 500 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server Error|Inline|

### Responses Data Schema

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|null|true|none||none|

## DELETE Delete Product

DELETE /products

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|query|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| yes |none|

> Response Examples

> 500 Response

```json
{
  "status": "string",
  "msg": "string",
  "body": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server Error|Inline|

### Responses Data Schema

HTTP Status Code **500**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» msg|string|true|none||none|
|» body|null|true|none||none|

## POST Login

POST /users/login

> Body Parameters

```json
{
  "email": "ali_moneib@yahoo.com",
  "password": "A9876543210"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Registeration

POST /users

> Body Parameters

```json
{
  "name": "Ali Moneib",
  "email": "1ali_moneib@yahoo.com",
  "password": "A9876543210"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|