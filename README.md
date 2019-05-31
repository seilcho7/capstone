## Livesite: https://picme.seilcho7.dev/

## PicMe – Draw with your Friends, Anywhere!

<img src="./img/picme-logo.png" width="500">


## Description 
This project involved taking apart digital photographs and using the subsets as patterns for SVG shapes.  At first, I worked out the logic to take an image and create SVG patterns that would map to circles that were created using the D3 library.  D3 is a powerful SVG creator and the technique that I used calculates ‘force’ to make the user’s mouse movements cause the circles to move around the screen and appear to bounce off of each other.  The circles containing small portions of the picture that will now randomly dance in response to the cursor movements.


This technique was then used to make a guessing game, where the user tries to guess the contents of an image as the circle portions get smaller, more abundant, and move out of original location.  The user’s high score is logged as they progress through a random selection of photos.


A user can upload their own pictures and turn them into moveable bubbles with up to 400 circles.  Try it – it is oddly soothing!  The pictures can also be converted into a jigsaw puzzle that is solvable.  Each piece is randomly placed in the display space and the user can rotate and drag the pieces into place.  Subtle clues inform the user of correct placement.


## Technologies used
Axios, PostgreSQL, node.js, express.js, sharp, bcrypt, and dotenv were implemented for the backend to handle a database of user accounts, manage their scores and their uploaded files.  The sharp module was particularity helpful to square and reorient uploaded images.  The front end was developed with React.js.  HTML, especially SVG and Canvas elements, the D3 JavaScript library and CSS construct the frontend. 

## Challenges

One of the biggest challenges for this project was ensuring cross-browser compatibility.  Safari was particularly difficult, and I learned that the safari platform has much stricter rules for SVG images and patterns than Chrome or Firefox.  The math used to calculate the puzzle piece location was particularly difficult, especially since SVG elements do not support “drag” events.





## REACT STUFF HERE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
