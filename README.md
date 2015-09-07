## Yes, this is another contacts book app

This application is required as a test for SSS to manage contact's information.

## Tech 
This application is built using MEAN stack from meanjs.org


## Prerequisites
Make sure you have installed all these prerequisites:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

### Cloning 
```
$ git clone https://github.com/manhlamt/contactsBook.git contactsBook
```

## Install
The first thing you should do is install the Node.js dependencies.

To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

```
$ npm install
```

## Running This Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3004 port so in your browser just go to [http://localhost:3004](http://localhost:3004)
                            
That's it! your application should be running by now, to proceed with your development check the other sections in this documentation.

## Building  This Application
To build this application for production environment, run:

```
$ grunt build
```
Because grunt will read environment config to look for source files, ,make sure you run this command in development environment. After running this command, a minified and concat-ed version for your script will be create under public/dist make sure it link to the correct file in config/env/production.js.

### Contacts

If you need help or a more detail document about the app, don't hesitate drop me a mail at [manhlamt@gmail.com](mailto:mamhlamt@gmail.com) or [call](tel:0979559842).
