# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# Project Overview

This project is a mobile application built with React Native using Expo for rapid development. The application provides an interactive platform for users to track their trades, view detailed trade history, and monitor their profits. The design emphasizes user engagement, seamless navigation, and responsive functionality to create an optimal experience for users.

## Technologies Used

React Native: For building the app's user interface.
Expo: To simplify the development process with pre-configured environments, allowing for faster and efficient development.
NativeWind: A utility-first CSS framework for styling, allowing for faster and more consistent design implementation using utility classes.

## Features

### Start Page:

A Start Page was introduced to create a welcoming and engaging user experience. Upon app launch, the XILLION intro is displayed, setting the tone for the app and giving users a brief preview of its purpose before entering the main content.

### Home Screen

The Home Screen layout closely follows the provided mockup, with several key features:

Swipeable "Execute" Button: Implemented for smooth interaction, allowing users to perform actions and navigate to other screens.
Scrollable "Today's Recommendations" List: Ensures that the list of trades can accommodate more data without affecting the layout or design.

### Design Enhancements

- User Details Screen
  A User Details Screen was added, allowing users to view their name, email, and contact information. This feature adds a personal touch, enhancing the app’s interactivity and user engagement. The details can be accessed by tapping on the User Icon in the top-left corner of the Home Screen.

### Trade History Page

The Trade History Screen was designed to provide users with valuable insights into their trading activity:

Interactive Trade Cards: Each card displays essential trade details like stock name, buy price, quantity, and status. Tapping on a trade card opens a graph showing the trade's performance over time.

### Design Improvements

- Profit Calculation: A Total Profit Calculation was implemented, which dynamically calculates and displays the user’s total profit from all trades. This feature helps users track their overall performance.
- Trade Performance Graph: A graph is displayed when users click on a trade card, giving them a visual representation of how their trade performed over time. This graph adds interactivity and helps users analyze their trades effectively.
  Navigation
  The app includes intuitive navigation:

Swipe Right on the "Execute" button transitions to the Trade History Screen.
Swipe Left on the Trade History Screen returns the user to the Home Screen.

## App Preview

- Start Page
  ![!](../XILLION/assets/App%20Images/StartPage.jpg)

- Home Screen
  <img src="../XILLION/assets/App%20Images/HomeScreen.jpg" alt="Home Screen" width="300"/>

- User Details
  <img src="../XILLION/assets/App%20Images/UserDetails.jpg" alt="User Details" width="300"/>

- Trade History
  <img src="../XILLION/assets/App%20Images/TradeHistory.jpg" alt="Trade History" width="300"/>

- Trade Graph
  <img src="../XILLION/assets/App%20Images/TradeGraph.jpg" alt="Trade Graph" width="300"/>

## Video

[Click here to view the App Video](https://drive.google.com/file/d/197ziC_cH0ErgNjz8Qa4EFv9URaBBmXNb/view?usp=sharing)
