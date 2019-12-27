# Trippie Planner

## Project completed by James Lee

## Live App: https://trippie-planner.now.sh

## Demo Account => Username: demo, Password: Password1!

## Project Description:

Trippie Planner is an easy-to-use travel planner to keep track of all upcoming trips and plans.  Trippie users will be able to create trips with a personalized title and associate plans to each specific trips.  Plan information includes location/title, dates, and notes for your plans.  Trippie allows users to edit each plan as they change.  Users can also delete trips and plans from their account.

<img width="800" alt="Trippie-home" src="https://user-images.githubusercontent.com/52637953/71324202-9cf72a80-24a1-11ea-9494-054bc34b7ee1.png">

<img width="800" alt="Trippie-Plans" src="https://user-images.githubusercontent.com/52637953/71324221-d0d25000-24a1-11ea-8924-9ad3a636a6d1.png">

<img width="800" alt="Trippie-Create-Plans" src="https://user-images.githubusercontent.com/52637953/71324230-f4959600-24a1-11ea-9468-29b4b1a3272a.png">

### Full Stack Core Technologies: 
**Front-end**: React, HTML5, CSS3 </br>
**Back-end**: Node.js, PostGreSQL, RESTful API, Express.js, Knex

# User Stories:

### As a user, I am able to...

### 1.) Create an account and log in to utilize Trippie resources.

### 2.) Access the Trippie app on mobile or desktop with a clean and minimalistic design.

### 3.) Add upcoming trips with personalized titles.

### 4.) Add any plans to specific trips.

### 5.) Include a location or title, dates, and notes to each plan.

### 6.) Edit each plan as they change.

### 7.) Delete specific trips and/or plans.

### 8.) Log out of my account when I am finished using the app.

##Endpoints
| Method | Path | Function |
| -- | -- | -- |
| POST | /api/users | User registration. Requires 'username', 'password', and 'fullname' |
| POST | /api/auth/login | User login. Requires 'username', and 'password' |
| GET | /api/trips | Retrieves trips associated to user |
| POST | /api/trips | Create a new trip. Requires 'trip_title' |
| DELETE | /api/trips/:tripId | Deletes the specific trip and its associated plans |
| GET | /api/plans | Retrieves all plans associated to user.  Each plan is associated with a trip_id |
| POST | /api/plans | Create a new plan associated to user and specific trip. Requires 'location', 'from_date', 'to_date', and 'notes' |
| PATCH | /api/plans/:planId | Edit fields on a specific plan |
| DELETE | /api/plans/:planId | Deletes the specific plan with corresponding plan id|


#
|  Repository  |  Link  |
| -- |  -- |
|  Front-end  |  [https://github.com/thinkful-ei-gecko/JamesL-Trippie-Client](https://github.com/thinkful-ei-gecko/JamesL-Trippie-Client)  |  
|  Back-end  |   [https://github.com/thinkful-ei-gecko/JamesL-Trippie-Server](https://github.com/thinkful-ei-gecko/JamesL-Trippie-Server)  | 