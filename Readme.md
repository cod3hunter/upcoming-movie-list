# UpcomingMovieList

### Prerequisites

[Node 8.3 or newer](https://nodejs.org/en/)

[Yarn](https://yarnpkg.com/pt-BR/)

[react-native-cli](https://facebook.github.io/react-native/docs/getting-started)

[JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Installation

**Step 1:** clone my repo & cd into upcoming-movie-list

**Step 2:** install node modules

```
yarn install
```

**Step 3:** create .env file
*Need a api key from [The Movie Database API](https://www.themoviedb.org/documentation/api)
```
API_KEY=<<your_api_key>>
```

**Step 4:** start server

```
yarn start
```

*Before run android build, setup [Android Studio](https://facebook.github.io/react-native/docs/android-setup.html)*

**Step 5:** If Android

```
yarn android
```

*Before running iOS build, Install [Xcode](https://developer.apple.com/xcode/download/)*

**Step 6:** If iOS

```
yarn ios
```

That's all

If you want to install app in the device, connect your device to the system with debugger mode on and run the above command (app will be installed automatically)

## Running the tests

```
yarn test
```

## Built With

* [React-Native](https://facebook.github.io/react-native/docs/getting-started)

## Authors

* **Daniel Mattos** - [Cod3Hunter](https://www.linkedin.com/in/cod3hunter/)