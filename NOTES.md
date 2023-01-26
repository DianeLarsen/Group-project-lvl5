npm init -y
    can change package.json later
npm install express
    for other dependencies change "express" for others
npm install -g nodemon
    for the ability to update without reloading server
    need to start server with >nodemon server.js<

// only for fake data
npm install uuid

    const {v4: uuidv4} = require('uuid')
You should then call uuid with uuidv4() instead of uuid().
//

npm install morgan
    for checking on crud requests
create modules folder
create routes folder

npm install mongoose
    for mongoose

for storage of images:
npm install cors multer multer-gridfs-storage 

/////Setting up frontEnd/////

    create client folder
    cd into client folder
    npx create-react-app .
    in client folder and package.json, go to bottom before last } 
    enter:    
        ,"proxy": "http://localhost:9000"
clear files created by create-react-app:
    start with index.js, App.js, App.css
    create folders:
        components, pages, assets
    update title and fav.ico 
    

npm install
    -if cloning

npm install axios
    -setting up axios
npm i react-timestamp
    -added dependency for timestamp


// to run everything open up different bash terminals
npm start 
    -for frontend
nodemon server.js 
    -for server
sudo mongod --dbpath ~/data/db 
    -for mongodb (might be already running, do a get of localhost:9000/bounties to see)


npm install jquery
    -regarding highlights of map