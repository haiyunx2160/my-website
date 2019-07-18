
## ![]([https://github.com/haiyunx2160/my-website](https://github.com/haiyunx2160/my-website))My Website

![](<https://img.shields.io/badge/FrontEnd-React-brightgreen.svg>)![](<https://img.shields.io/badge/DataBase-Firebase-blue.svg>)![](<https://img.shields.io/badge/Datastore-Redux-orange.svg>)![](<https://img.shields.io/badge/CSS-Bootstrap-yellow.svg>)




> This project version as private project was originally contrtolled by GitLab. Now it becomes open-source repository in GitHub. It has already been deployed at [Amazon S3]([http://ng-aaronxiao.s3-website-us-east-1.amazonaws.com/](http://ng-aaronxiao.s3-website-us-east-1.amazonaws.com/))



**My website project** is dedicated to be a process to put my React, Redux and Firebase knowledge into practice. 

*It provides main **Features** below:*

- Firebase Auth to sign in/out/up users
- Making posts
- Delete Posts
- Fetching data and display from Firebase
- Sending message to website owner

Here is <u>*the client side*</u>, which is built by MERN stack, and ***built with***

- [React](https://reactjs.org/docs/getting-started.html)  ^16.7.0

- *[react-redux](https://react-redux.js.org/introduction/quick-start)* ^6.0.0

- [axios](https://github.com/axios/axios)  ^0.18.0

- [bootstrap](https://react-bootstrap.github.io/getting-started/introduction) ^4.3.1

- *[Firebase](https://socket.io/docs/)* ^6.3.0

  More *dependencies* is seen at the Package.JSON file



### Getting Started

------

##### Prerequisites

The project runs in [Nodejs](<https://nodejs.org/en/>) environment. it requires:

-  [Nodejs](https://nodejs.org/en/)  v 10.0 or later
-  [npm](https://www.npmjs.com/)  v 6.0 or later
##### Installing

> Note: The `client` project needs to work with [travel website server](https://github.com/Xiong1028/travel_website_server) project, make sure the [travel website server](https://github.com/Xiong1028/travel_website_server) and `MongoDB` service are running.

```linux
$ git clone git@github.com:haiyunx2160/my-website.git
$ cd my-website
$ npm install
$ npm start
```

the development mode will be running at `localhost:3000`

##### Building

```linux
$ npm run build
```

explorations Using the above command, it will create a build directory.

![](https://github.com/Xiong1028/pictures/blob/master/build.png?raw=true)

Move the whole `build` directory to the  [S3](https://github.com/Xiong1028/travel_website_server) bucket. 



### Demo

![MainPage](https://github.com/haiyunx2160/myfiles/blob/master/Demo%20gif/my-website.gif?raw=true)



### Licensing

------

This project is under `GNU/GPL` license.