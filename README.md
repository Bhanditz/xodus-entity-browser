# xodus-entity-browser
Web UI entity browser for Xodus database. Provides ability to search, delete, create and edit entities.

## Application

Highly desirable to use entity browser shipped with the same xodus version as used in application which produce database.

That's mean that if your application uses 'x' version of xodus and you modify data with 'y' version of xodus shipped with entity browser then application (with 'x' version of xodus) may not working as expected on this database.

## Run

* get [latest version based on maven repo](https://bintray.com/lehvolk/maven/download_file?file_path=com%2Flehvolk%2Fxodus%2Fentity-browser-launcher%2F1.0.0-20170804%2Fentity-browser-launcher-1.0.0-20170804.zip)
* execute run.bat or run.sh
* open browser http://localhost:8080 (Jetty server binds to all interfaces on port 8080 therefore all interfaces can be
        used to access application)

## Configuring
* JVM arguments, server port can be modified in startup script.

## Build from sources

    >./gradlew clean build

## Run backend

Command starts rest interfaces on 18080 port

    >./gradlew appRun

for debug

    >./gradlew appRunDebug

debug port by default 5005. To change it check [greety instructions](http://akhikhl.github.io/gretty-doc/Debugger-support.html)   

## Run frontend

Command starts frontend on 19090 port

    >npm install

    >npm start
