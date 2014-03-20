# Sturgis Web Services :: iPad Kiosk

## Project Structure:

### index.html
Your main page, that's the first page that the app will show when loaded.

### manifest.webapp
Open Web App manifest, useful if you wish to create a web app for Firefox or Firefox OS.

### manifest.appcache
App cache manifest, useful to declare what resources can be cached and what resources must always reload. It can be used to create an offline web app, or a web Firefox OS app.

### config.xml
The configurations file. See [Using config.xml](https://build.phonegap.com/docs/config-xml) to learn how to personalize yours. It's already formatted with the most common settings.

### icon.png, splash.png
The essential icon and splash screen. These are used only if the the app runs on a device that don't support any of the provided icons or splash screens.

### img/icons folder
Contains all formats of icons required for the various operative systems.

### img/splash folder
Contains all formats of splash screens required for the various operative systems.

### js/lib folder
Contains all the libraries, frameworks, CSS and images needed to the app. Provided frameworks:
* **jQuery 2.0.3** - latest version of the classic utility library
* **add2home 2.0.7** - it makes appear a message to allow the user to create a web app container on iOS from the browser version
