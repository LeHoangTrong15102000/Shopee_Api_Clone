# Thiết kế schema Shopee theo MongoDB

## Phân tích chức năng

## users

```ts
enum UserVerifyStatus {
  Unverified,
  Verified,
  Banned,
}

interface User {
  _id: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  email_verify_token: string
  forgot_password_token: string
  verify: UserVerifyStatus

  bio: string
  location: string
  website: string
  username: string
  avatar: string
  cover_photo: string
}
```

## refresh_tokens

```ts
interface RefreshToken {
  _id: ObjectId
  user_id: ObjectId
  token: string
  created_at: Date
  updated_at: Date
}
```

## access_token

```ts
interface AccessToken {
  _id: ObjectId
  user_id: ObjectId
  token: string
  created_at: Date
  updated_at: Date
}
```

## categories

```ts
interface Category {
  _id?: ObjectId
  name: string
}
```

## products

```ts
interface Product {
  _id?: ObjectId
  name: string
  image: string
  images: string[]
  category: ObjectId[] // tham chiếu tới cái categoryId
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number

  created_at: Date
  updated_at: Date
}
```

## purchases

// Đơn mua hàng, nếu mà nhúng tất cả vào User thì sẽ dễ gây đầy

```ts
interface Purchase {
  _id?: ObjectId
  user_id: ObjectId
  product_id: ObjectId
  buy_count: number
  price: number
  price_before_discount: number
  status: number

  created_at: Date
  updated_at: Date
}
```
