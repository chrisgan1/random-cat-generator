# random-cat-generator
A random cat image generator using thecatapi with JS for a ClearBank technical test.
For my project I have chosen the following endpoint - https://api.thecatapi.com/v1/images/search. This is recommended by thecatapi documentation page in order to select a random cat picture. This has been utilised along with some bootstrap css to create a basic and appealing web page to render the image on. 

The web page contains a header, an animated cat photo, a button to refresh the page and thus grab a new cat image and a div for the immage itself. The page also uses viewport allowing the format to be maintained for any screen size.

The JavaScript code strips the array to just the url of the image and adds the image within the div. It also ensures the button is generated properly, this was initially tested using an alert in place for the event listener in the early stages on the pages development.
