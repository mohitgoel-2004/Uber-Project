# Backend API Documentation

## User Registration Endpoint

### `POST /users/register`

Creates a new user account and returns an authentication token along with the created user object.

---

### **URL**
```
POST /users/register
```

### **Headers**
```
Content-Type: application/json
```

---

### **Request Body**

The endpoint expects a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```
### **Example Response**
The endpoint expects a JSON object with the following structure:

```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "token": "string"
  }
}

```


#### **Field Requirements:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `fullname.firstname` | String | Yes | Minimum 3 characters |
| `fullname.lastname` | String | Optional | Minimum 3 characters (if provided) |
| `email` | String | Yes | Must be a valid email address |
| `password` | String | Yes | Minimum 6 characters |

---

### **Example Request**

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "mypassword123"
  }'
```

---

### **Response**

#### **Success Response (Status: 200 OK)**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ3YjJhNGU4ZjNhMTIzNDU2Nzg5MGEiLCJpYXQiOjE3MzI3MzQ2NzZ9.K5xN8pQmR3vW7yZ9aBcDeFgHiJkLmNoPqRsTuVwXyZ0",
  "user": {
    "_id": "6747b2a4e8f3a123456789aa",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Response Fields:**
- `token` - JWT authentication token (use in `Authorization: Bearer <token>` header for authenticated requests)
- `user._id` - Unique MongoDB ObjectId for the created user
- `user.fullname` - User's full name object containing firstname and lastname
- `user.email` - Registered email address
- `user.socketId` - WebSocket connection ID (null until user connects via socket)

**Note:** The password is not returned in the response for security reasons.

---

#### **Error Responses**

##### **Validation Error (Status: 400 Bad Request)**

Returned when the request data doesn't meet validation requirements.

```json
{
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Common validation errors:**
- `Invalid email address` - Email format is incorrect
- `Password must be at least 6 characters long` - Password too short
- `First name must be at least 3 characters long` - Firstname too short
- `Last name must be at least 3 characters long` - Lastname too short (if provided)

##### **Server Error (Status: 500 Internal Server Error)**

Returned when an unexpected error occurs on the server.

```json
{
  "error": "Internal server error"
}
```

---

### **Status Codes**

| Status Code | Description |
|-------------|-------------|
| `200 OK` | User successfully registered, returns token and user object |
| `400 Bad Request` | Validation failed - invalid or missing required fields |
| `500 Internal Server Error` | Server error occurred during registration |

---

### **Implementation Details**

- **Validation:** Input validation is performed using `express-validator` middleware
- **Password Security:** Passwords are hashed using bcrypt with 10 salt rounds before storage
- **Authentication:** JWT tokens are generated and signed using `process.env.JWT_SECRET`
- **Database:** User data is stored in MongoDB using Mongoose ODM

---

### **Security Notes**

1. Passwords are never stored in plain text
2. The user's password field has `select: false` in the schema, preventing accidental exposure
3. JWT tokens are used for subsequent authenticated requests
4. Email addresses must be unique in the database
