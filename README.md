<a id="top"></a>
# Welcome to my Pinterest Clone!
My thought process when selecting this project started with finding an app that not only inspired me, but also challenged me. I set three main requirements:
1. The app should have a clean and modern interface.
2. The app should provide an easy user experience. The functionailty should makes sense to the every day user and I should replicate this experience as closely as possible.
3. I would enjoy building this kind of application and it would help significantly further my development skills.

My [Pinterest Clone](https://pinterest-clone-aa.herokuapp.com/) provides users the ability to organize their ideas by adding pins to custom boards. Users can share their own ideas by creating pins. Users can search for pins and add them to boards. A few features that are unique from the original Pinterest:
1. Users are not limited to saving one pin to one unique board, a functionality that differs from the original app. I made this decision based not only on my own experience on the app, but also with the purpose to further create a more flexible user experience. Ideas can be fluid and they can fit into different categories. A user may want to add the same pin to a 'sneakers' board and also an 'outfit inspo' board. 
2. Dynamic Suggestions on Search. As users input a query, the search bar dynamically shows results based on existing pins. Users may select a pin from the drop down and also search to view results. 
3. Dynamically Updating Followers and Following count on user profile. Users are not required to refresh their page to see counts or lists updated. 
4. Switching between Follows and Followers view. 

![suggestions](/react-app/public/gifs/p_search-high.gif)
![suggestions](/react-app/public/gifs/follows-high.gif)

[Click for a full list of features and upcoming releases.](#features)



## Wiki Links

 - [Feature List](https://github.com/yanelys-mena/pinterest-clone/wiki/Features-List)
 - [Wireframes and Frontend Routes](https://github.com/yanelys-mena/pinterest-clone/wiki/Wireframes-and-Front-End-Routes)
- [Redux State Shade](https://github.com/yanelys-mena/pinterest-clone/wiki/Redux-State-Shape)
 - [Database Schema](https://github.com/yanelys-mena/pinterest-clone/wiki/Database-Schema)
 - [API Routes](https://github.com/Yanelys-Mena/pinterest-clone/wiki/API-Routes)
 - [User Stories](https://github.com/yanelys-mena/pinterest-clone/wiki/User-Stories)
 - [Fetch Testing Routes](https://github.com/yanelys-mena/pinterest-clone/wiki/Fetch-Test-Routes)


## Technologies

 - **Backend:** Python, Flask
 - **Frontend:** JavaScript, React/Redux
 - **Database:** PostgresSQL
 - **Image hosting:** AWS/S3
 - **Design and Styling:** HTML/CSS


<a id="features"></a>
## Features
* [Pins](#pins)
    * [View all pins](#pins)
    * [View user created pins](#viewcreatedpins)
    * [View Pin Details](#pindetails)
    * [Create a pin](#createpin)
    * [Edit or Delete a pin](#editpin)
* [Boards](#boards)
    * [View user boards](#boards)
    * [View pins on a specific board](#viewpinboard)
    * [Create a board](#createboard)
    * [Edit or Delete a board](#editboard)
* [Add and remove a pin from a board](#pinboard)
    * [Add a pin to a board](#addpinboard)
    * [Remove a pin from a board](#removepinboard)
* [Search](#search)
    * [Dynamic Suggestions based on user input and Filtered Results Page](#suggestions) 
* [Followers](#followers)
    * [Modal with switching functionality, dynamic instant follow and unfollow feature](#followers) 
* [Comments](#comments)
    * [Adding, Editing, Deleting Comments](#comments) 

* Future Releases
    * [Notifications](#notifications)


## Local Setup Instructions
* [Setup Instructions](#instructions)





# Features


<a id="pins"></a>
## Pins - Homepage view
-----------------------------
![Homepage](https://user-images.githubusercontent.com/88916829/159598605-a8b74f85-e692-466b-ba56-17afe265733b.png)


<a id="viewcreatedpins"></a>
## Pins - Created by user 
-----------------------------
![User Created Pins](https://user-images.githubusercontent.com/88916829/159755778-555edc56-76a7-4fc0-95a8-f369f7e2dba9.png)
-----------------------------
<a id="pindetails"></a>
 ## Pin Detail Page 
![Pin Page](https://user-images.githubusercontent.com/88916829/159743462-861f7ea3-537d-4547-840d-9584e9cb271e.png)

<a id="createpin"></a>
## Pin Builder: Create a pin
![Create a pin](https://user-images.githubusercontent.com/88916829/159792329-ea2e5240-e971-4907-8e4d-760e4f98fd7f.png)


<a id="editpin"></a>
## Edit or Delete a pin
![Edit Pin](https://user-images.githubusercontent.com/88916829/159792483-ddbc1b2d-74d9-4faf-9211-c32cdc63ac67.png)



<a id="boards"></a>
## User boards
![User boards](https://user-images.githubusercontent.com/88916829/159793830-6b1525c0-1737-4a8d-af98-6576f3c387d3.png)



<a id="createboard"></a>
## Create a Board
![createboard](/react-app/public/gifs/board-high.gif)


<a id="editboard"></a>
## Edit or Delete a board
![editboard](https://user-images.githubusercontent.com/88916829/159794348-af682460-c3ad-4474-b7b9-d47310228e02.png)


<a id="pinboard"></a>
## View pins on board
![pinboards](https://user-images.githubusercontent.com/88916829/159794818-1185348d-bb38-49f7-b1b3-228354a27603.png)


<a id="addpinboard"></a>
## Add pin to board
![addpinboard](https://user-images.githubusercontent.com/88916829/159794436-db996b79-8e2d-4ad4-b538-e1a07ef15d09.png)


<a id="removepinboard"></a>
## Remove pin from board
![removepinboard](https://user-images.githubusercontent.com/88916829/159794597-55df1505-7cfe-40dc-b971-8d361385d796.png)


<a id="search"></a>
## Dynamic Search
![suggestions](/gif/search-suggestions.gif)

<a id="followers"></a>
## Switch between Followers and Following, Instand updated follows and following list
![suggestions](/gif/Follows-high.gif)


<a id="comments"></a>
## Comments Feature, Hide and Unhide, dynamic updates
![suggestions](/gif/Comments.gif)


-----------------------------
 [Back to top](#top)

<a id="instructions"></a>
## Install Instructions

 1. Clone this repo
	 - `https://github.com/yanelys-mena/pinterest-clone.git`
 2. Install dependencies for backend 
	 - `pipenv install`
 3. Install dependencies for frontend
	 - `cd react-app`
	 - `npm install`
 4. Create PostgreSQL user
	 - `CREATE USER <username> WITH CREATEDB PASSWORD '<password>'`
 5. Create PostgreSQL database
	 - `CREATE DATABASE <database_name> WITH OWNER <username>`
6. Create a `.env` file in the root directory based on the `.env.example` file
7. In `.env` file:
	- Replace 'password' in DATABASE_URL with your chosen password
	- Enter a secure combination of characters for you SECRET_KEY
	- Create your own [S3](https://s3.console.aws.amazon.com/s3/home?region=us-east-1) image bucket and [AWS user](https://console.aws.amazon.com/iam/home?#/users) and connect them, and enter in the information for S3_BUCKET, S3_KEY, and S3_SECRET. 
8. Flask Migrate and Seed your database in root directory
	- `pipenv shell`
	- `flask db upgrade` 
	- `flask seed all`
9. Start backend server in root directory
	- `flask run`  
10. Start frontend server in `react-app` directory
	- `npm start`
11. In your browser go to `localhost:3000`
12. You may use the Demo user or create a new user by clicking on the  `Log In` button.


---------------------
 [Back to top](#top)
