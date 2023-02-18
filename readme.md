## Project Details

### Pages

1. Home Page

   - Navbar
   - Welcome Note Gifs or using Css
   - Footer

2. About Page

   - Details of pages, features and packages used
   - My Details
   - Project Screenshot carausel

3. Sign up Page

   - There should be a registration form with following fields.
   - name ==> Input Field
   - username ==> Input Field
   - email ==> Input Field
   - DOB ==> Input Field
   - Role ==> Dropdown Menu (Admin, Explorer)
   - location ==> Input Field
   - password ==> Input Field (Type: Password)
   - confirm password ==> Input Field (Type: Password)

   - The user should be registered only if password and confirm password field contains the same string.
   - These user detail should be registered in MongoDB Atlas.

4. Login Page

   - There should be a login form with following fields.
   - username
   - password
   - The authentication while login should be done using a middleware.
   - Once the authentication is done and user is able to login, it should take the user to the home page.
   - The username of the user should be visible over the navigation bar, no matter the user is navigating to any page.
   - A Logout button should also appear on navbar, if the user clicks on it, he/she should log out and the username form the navbar should disappear.

### Routes

- POST for posting the user detail while registration.
- GET for getting all the users details
- GET for getting the detail of a particular user.
- PATCH/PUT for updating the user details. ==> Only Admin can do this.
- DELETE for deleting a particular user detail ==>Only Admin can do this.

### Routes Create

\* -token verification

1. /users/register | (Signup)
2. /users/login | (Login and send token)
3. (Add extra details and create another collection but link with user collection) \*
4. (Admin Login) \*
5. /users/ | (Get all users Details) \*
6. /users/:id | (Get Single User) \*
7. /users/:id | (Patch the user details) [Admin] \*
8. /users/:id | (Delete the user Details)[Admin] \*

### Middlewares

- Authenticator ==> Which will authenticate the user while login and allow the user to login.
- validator ==> Which will validate the role of user while updating or deleting.
- userLogger ==> This will log the username of the user along with the user's role once they login into a log.txt file.
