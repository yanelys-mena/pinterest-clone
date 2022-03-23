# Welcome to my Pinterest Clone!
![Homepage](https://user-images.githubusercontent.com/88916829/159598605-a8b74f85-e692-466b-ba56-17afe265733b.png)

## Wiki Links


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

[Go to Real Cool Heading section](#real-cool-heading)


# Features
* [Pins](#pins)
    * [View all pins](#pins)
    * [View user created pins](#viewcreatedpins)
    * [Create a pin](#createpin)
    * [Edit a pin](#createpin)
    * [Delete a pin](#createpin)
* [Boards](#boards)
    * [View user boards](viewboards)
    * [View pins on a specific board](viewpinboard)
    * [Create a board](#editboard)
    * [Edit a bin](#editboard)
    * [Delete a board](#editboard)
* [Add and remove a pin from a board](#addpintoboard)
    * [Add a pin to a board](#pinboards)
    * [Remove a pin from a board](removepinfromboard)
* Coming Soon
    * [Comments](#comments)
    * [Followers](#followers)
    * [Search](#search)
    * [Notifications](#notifications)




<a id="pins"></a>
## Pins - Homepage view
-----------------------------
![Homepage](https://user-images.githubusercontent.com/88916829/159598605-a8b74f85-e692-466b-ba56-17afe265733b.png)


<a id="viewcreatedpins"></a>
## Pins - Created by user 
-----------------------------
![User Created Pins](https://user-images.githubusercontent.com/88916829/159755778-555edc56-76a7-4fc0-95a8-f369f7e2dba9.png)
-----------------------------
<a id="pins"></a>
 ## Pin Detail Page 
![Pin Page](https://user-images.githubusercontent.com/88916829/159743462-861f7ea3-537d-4547-840d-9584e9cb271e.png)

-----------------------------
<a id="pinboards"></a>
# some heade
## Add Pins to a board directly from the pins detail page OR
![Pin Page Save](https://user-images.githubusercontent.com/88916829/159743730-b18c30e4-4961-4a9a-a2ed-897e7be35507.png)

## Add Pins to a board directly from the pin card
![Pin Card Save](https://user-images.githubusercontent.com/88916829/159743855-da87656a-e14d-44b0-ad56-5b6328655c01.png)


-----------------------------
 

## Install Instructions

 1. Clone this repo
	 - `git clone git@github.com:yanelys-mena/pinterest-clone.git`
 2. Install dependencies for backend 
	 - `pipenv install`
 3. Install dependencies for frontend
	 - `cd react-app`
	 - `npm install`
 4. Create PostgreSQL user
	 - `CREATE USER petsy_user WITH CREATEDB PASSWORD '<password>'`
 5. Create PostgreSQL database
	 - `CREATE DATABASE petsy_db WITH OWNER <user name>`
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
12. You may use the Demo user or create a new user by clicking on the  `Log In` button. Then you can search, look at products, leave reviews, add items to cart, purchase items, etc..

## Bonus Features
- Purchases
    - A user can view their past purchases' information and create/edit reviews on each purchase.
- 404 page

![not found page gif](https://user-images.githubusercontent.com/89945390/158082119-54c72160-20d4-41a1-ba86-757409070659.gif)

---------------------
