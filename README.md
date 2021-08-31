## CRUD OPERATIONS IN MERN

It is an internship initial task to have an understanding with the MERN.

By MERN I mean

-**M -> MySQL**

-**E -> ExpressJS**

-**R -> ReacJS**

-**N -> NodeJS**

Following modules were used in this project.

### **axios**

##### HTML library use to make requests to backend

> npm i axios

### **nodemon**

##### Monitor changes and trigger reload automatically

> npm i nodemon

### **concurrently**

##### Run server and frontend simultaneously

> npm i -D concurrently

### colors

##### Used to add colors to console

> npm i colors

## SETTING UP BABEL FOR NODE

- Install node with following command and name your server file with server.js or index.js name or whatever you like.

  > npm init

- Next, install babel as developer dependency.

> npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node

- Next step is to create a .babelrc file. And add following code to it

  ````{
      "presets": [

         "@babel/preset-env"

      ]
  }```

  ````

- Now, go to package.json file and in the scripts, add following command to start your server using babel configuration.

`"start": "babel-node ./src/index.js"`

Now to use ES6, change your import/export statements from CommonJS to ES6 import/export statements.

**Congrats**. You made it and now you can run your code with babel configuration using

> npm start

#### Nodemon and babel

- Install nodemon as developer dependency

  > npm i -D nodemon

- Replace the start script in **scripts** in **package.json** with

  `"start": "nodemon --exec babel-node backend/server.js"`

- Now you can run your code using
  > npm start
