# #!Hello Programmer~

This is a gamefied version of FizzBuzz! Built utilizing Google Cloud
Functions, a GoLang API, and Node/ReactJS frontend, this program was
designed to take a classic programming challenge and make it interactive.

### Installation and Usage:
 This application uses Docker an Docker Compose, so make sure you have both
 installed on your system. For easy installation run:

 ```
 docker-compose build
 ```

 followed by:

 ```
docker-compose up
 ```

from the root directory (the latter command will start both the API and
client applications). If you'd prefer to build and run the API and client
applications independently, first run:

```
cd server
docker build -t server .
docker run -p 8000:8000 server
```

followed by (in a separate console/terminal window):
```
cd client
docker build -t client .
docker run -p 5000:5000 client
```

Note you may override the API's default environment arguments. For example,
you can change the range of numbers generated by the Google Cloud FizzBuzz
function by running:

```
docker run -p 8000:8000 -e MAX_RANGE=100 server
```

(or whatever number you want). Changing the `FUNCTION_URL` environmental
variable can also be done if needed.

### Playing

To access the client app, go to:

```
http://localhost:5000
```

in your browser of choice (Chrome or Chromium is preferred). If you want
to access the API directly, the default address is:

```
http://localhost:8000
```
