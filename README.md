# **Design Database**
<div align = 'justify'>membuat design database dengan tools DB Designer 4, format file `.xml` :

![foodise-ERD](./ERD%20files/foodise-ERD.png)

&nbsp;

# **API Specification**
### **Register**
**Request** :
- Method : POST
- Endpoint : `/api/signup`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
    ```json
    {
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string"
    }
    ```
**Response** :
```json
{
    "message" : "your profile created successfully, let's login !",
    "your profile": {
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string",
        "_id": "string, unique"
    }
}

```
### **Login**
**Request** :
- Method : POST
- Endpoint : `/api/signin`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
    ```json
    {
        "email": "string",
        "password": "string",
    }
    ```
- Authentication - Bearer Token : `<token key>`
**Response** :
```json
{
    "message": "login success, welcome!",
    "role": "string",
    "your token": "string"
}
```
### **Get User Profiles**
**Request** :
- Method : GET
- Endpoint : `/api/users`
- Header : 
    - Accept : application/json
**Response** :
```json
{
  "data user": [
    {
      "_id": "string unique",
      "name": "string",
      "email": "string",
      "password": "string",
      "role": "string"
    },
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "password": "string",
      "role": "string"
    }, 
    ]
}
```
### **Get User Profile By Id**
**Request** :
- Method : GET
- Endpoint : `/api/users/{:id}`
- Header : 
    - Accept : application/json
**Response** :
```json
{
  "user data": {
    "_id": "string unique",
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string"
  }
}
```
### **Update User Profile By Id**
**Request** :
- Method : PUT
- Endpoint : `/api/users/{:id}`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
    ```json
    {
        "name": "string",
        "email": "string",
        "password": "string",
        "role":"string"
    }
    ```
**Response** :
```json
{
  "message": "user data has been update successfully"
}
```
### **Delete User Profile By Id**
**Request** :
- Method : DELETE
- Endpoint : `/api/users/{:id}`
- Header : 
    - Accept : application/json
**Response** :
```json
{
  "message": "user data has been deleted successfully !"
}
```
### **Get Food Data**
**Request** :
- Method : GET
- Endpoint : `/api/foods`
- Header : 
    - Accept : application/json
**Response** :
```json
{
    "food data": [
        {
            "id": "string, unique",
            "name": "string",
            "calori": "number",
            "carbon": "number",
            "label": "string",
        },
        {
            "id": "string, unique",
            "name": "string",
            "calori": "number",
            "carbon": "number",
            "label": "string",
        }
    ]
}
```
### **Get Food Data by Id**
**Request** :
- Method : GET
- Endpoint : `/api/foods/{:id}`
- Header : 
    - Accept : application/json
- Query :
    - name : string
**Response** :
```json
{
    "food data": [
        {
            "id": "string, unique",
            "name": "string",
            "calori": "number",
            "carbon": "number",
            "label": "string",
        }
    ]
}
```

## **Member**
### **Add Favorite Food Data**
**Request** :
- Method : POST
- Endpoint : `/api/favorite`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
```json
{
    "user" : "string, unique", 
    "food" : "string, unique"
}
```
**Response** :
```json
{
    "message" : "favorite food data added successfully",
    "favorite food": [
        {
            "user": "string",
            "food": "string",
            "id": "string, unique"
        }
    ]
}
```
### **Get Favorite Food Data**
**Request** :
- Method : GET
- Endpoint : `/api/favorite`
- Header : 
    - Accept : application/json
**Response** :
```json
{
  "favorite": [
    {
      "_id": "string unique",
      "user": "string <id>",
      "food": {
        "_id": "string",
        "name": "string",
        "calori": "number",
        "carbon": "number",
        "label": "string",
        "__v": 0
      }
    },
    {
      "_id": "string unique",
      "user": "string <id>",
      "food": {
        "_id": "string",
        "name": "string",
        "calori": "number",
        "carbon": "number",
        "label": "string",
        "__v": 0
      }
    }
  ]
}
```

### **Get Favorite Food Data By User Id**
**Request** :
- Method : GET
- Endpoint : `/api/favorite/{:user_id}`
- Header : 
    - Accept : application/json
**Response** :
```json
{
  "favorite": [
    {
      "_id": "string unique",
      "user": "string <id>",
      "food": {
        "_id": "string",
        "name": "string",
        "calori": "number",
        "carbon": "number",
        "label": "string",
        "__v": 0
      }
    }
  ]
}
```

### **Delete Favorite Food Data**
**Request** :
- Method : DELETE
- Endpoint : `/api/favorite/{:id}`
- Header : 
    - Accept : application/json
**Response** :
```json
{
    "message" : "favorite food data deleted successfully"
}
```


## **Admin**

### **Create Food Data**
**Request** :
- Method : POST
- Endpoint : `/api/foods`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
    ```json
    {
        "name": "string",
        "calori": "number",
        "carbon": "number",
        "label": "string"
    }
    ```
**Response** :
```json
{
    "message" : "food data created successfully",
    "food data": [
        {
            "name": "string",
            "calori": "number",
            "carbon": "number",
            "label": "string",
            "id": "string, unique",
        }
    ]
}
```

### **Update Food Data**
**Request** :
- Method : PUT
- Endpoint : `/api/foods/{:id}`
- Header : 
    - Content-Type : application/json
    - Accept : application/json
- Body :
    ```json
    {
        "name": "string",
        "calori": "number",
        "carbon": "number",
        "label": "string"
    }
    ```
**Response** :
```json
{
  "message": "food data has been update successfully"
}
```

### **Delete Food Data**
**Request** :
- Method : DELETE
- Endpoint : `/api/foods/{:id}`
- Header : 
    - Accept : application/json
**Response** :
```json
{
    "message" : "food data has been deleted successfully ! "
}
```

&nbsp;

# **Documentation API**

### **Register**
![register](./API%20Docs%20-%20IMG/register.png)
### **Login**
![login](./API%20Docs%20-%20IMG/login.png)
### **Get User Profiles**
![users](./API%20Docs%20-%20IMG/users.png)
### **Get User Profile By Id**
![userbyid](./API%20Docs%20-%20IMG/userbyid.png)
### **Update User Profile By Id**
![updateuser](./API%20Docs%20-%20IMG/updateuser.png)
### **Delete User Profile By Id**
![deleteuser](./API%20Docs%20-%20IMG/deleteuser.png)
### **Get Food Data**
![foods](./API%20Docs%20-%20IMG/foods.png)
### **Get Food Data by Id**
![foodbyid](./API%20Docs%20-%20IMG/foodbyid.png)
## **Member**

### **Add Favorite Food Data**
![addfav](./API%20Docs%20-%20IMG/addfav.png)
### **Get Favorite Food Data**
![favs](./API%20Docs%20-%20IMG/favs.png)
### **Get Favorite Food Data By User Id**
![favbyuser](./API%20Docs%20-%20IMG/favbyuser.png)
### **Delete Favorite Food Data By Id**
![deletefav](./API%20Docs%20-%20IMG/deletefav.png)
## **Admin**

### **Create Food Data**
![createfood](./API%20Docs%20-%20IMG/createfood.png)
### **Update Food Data**
![updatefood](./API%20Docs%20-%20IMG/updatefood.png)
### **Delete Food Data**
![deletefood](./API%20Docs%20-%20IMG/deletefood.png)

