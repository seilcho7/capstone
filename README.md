# PicMe – Draw with Friends, Anywhere!

## Play Here: https://picme.seilcho7.dev/


<img src="./src/img/picme-logo.png" width="500">


## What is it? 
PicMe is an interactive, multiplayer game which involves challenging players to draw weird, funny and sometimes ridiculous prompts on their personal devices. The drawings are shown on a host screen, live, as the player is drawing. Other users are able to view the drawing from the host screen and submit a guess as to what the user is drawing. After 25 seconds, the user that was drawing is shown all the submitted answers. He/she is required to select one that they like best (similar to Cards Against Humanity), which then gives that user a point. This is considered the end of one round of gameplay; the next round then starts with another person drawing a new image. 

## How did we make it?
* Frontend:
    * React.js
    * Websockets
    * CSS3
    * HTML5 
    * React-Sketch
    * React-Confetti
    * React-Countdown-Clock
    * React-Router-Dom
    * Styled-Component
* Backend:
    * PostgreSQL
    * Express.js
    * Node.js

## What were our headaches?
A major challenge was having the ability to draw be accurate on personal devices (especially on iOS devices). Two ways this would occur are having the lines off by a millimeter based on the user's touch or having the sketchfield move around while the user drew. This issue was detrimental in having a flawless user experience, thus we converted our drawing field from react-canvas-draw to react-sketch. However, this started another issue that we solved previously. The issue was that the drawings that appeared on the host page were delayed while the user drew. With a few tweaks, we were able to have the user drawing appear live on the host page so everyone can see and guess as quickly as possible. 