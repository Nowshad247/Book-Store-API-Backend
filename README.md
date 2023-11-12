# Book Store API Backend

Book Catalog application Backend api .

## Technology

- Node
- Express
- Typescript
- Jwt
- ENV ,Mongoose ,

## Module

The backend book store keeping and managemant api make it super simpel we have two store

## User Module

User module have some API end poent

## User Model API Reference

#### Get all user items

```http
  GET /api/v1/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
