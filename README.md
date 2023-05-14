# Rock, Paper, Scissors

## Table of contents

- [Rock, Paper, Scissors](#rock-paper-scissors)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_
- Play online with friends in real-time, reconnect after disconnecting
- Multiple rooms with each room containing 2 players

### Screenshot

![](./client/src/assets/design/bonus/desktop-step-4-bonus.jpg)
![](./client/src/assets/design/original/desktop-step-4-win.jpg)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/online-multiplayer-rockpaper-scissor-game-using-react-4C0lvzCt5W)
- Live Site URL: [Live site URL here](https://game-rock-paper-scissorss.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Typescript](https://react-typescript-cheatsheet.netlify.app/) - For type definitions
- [Redux Toolkit](https://redux-toolkit.js.org/) - For global state management
- [Socket.IO](https://socket.io/docs/v4/) - For establishing a low-latency, full-duplex communication channel between a client and a server

### What I learned

I've learned many new libraries, tools, and technologies while building this app. I shifted from one methodology to another following the best practices. In the beginning, I used context API for state management & to avoid prop drilling but it wasn't a convenient way at a large scale as more context provider has to be created. So gradually moved on to the redux toolkit library, and learned to configure the store, create reducers, and slice & action creators for each particular reducer. This made debugging easy & more standardized way for state management globally. The styled component is something that I wanted to try hands-on & I implemented all the knowledge I grasped through documentation. The more challenging part was implementing socket.io to add the online multiplayer features to this app, learning how socket emits on one side(client/server) & how listens on the other side(client/server). I always followed the best pattern to make the code base more readable, scalable & reliable. I considered performance optimization to achieve a great user experience.

### Continued development

I want to know more about typescript; the advanced concepts as it is among emerging languages and moreover, typescript helps to reduce bugs at the compile time only by performing type checking.

## Author

- Frontend Mentor - [@iprinceroyy](https://www.frontendmentor.io/profile/iprinceroyy)
- Twitter - [@prince_popups](https://www.twitter.com/prince_popups)
