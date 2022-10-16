# live-football-scoreboard
Live Football scoreboard

## How to run the application
Run the below command to run the application
<pre>
npm install
npm run start
</pre>

## Run test cases
Run below command to run the test cases separately
<pre>
npm test
</pre>

## Persistent scoreboard
These is provide to store the score board details in local storage as well. By default the project is maintaining the scoreboard details in react state, so as soon as you refresh the browser all the progress is lost.

If you want to have the persisten scoreboard you can uncomment `line no. 11 in App.tsx` and comment `line no. 12 in App.tsx`. So the application will start usning the browser local storage. 