Installation:
1. Open your editor of choice and navigate to the project directory in your terminal.
2. Run npm install in your terminal to install the project's node dependencies.
3. Run npm start to start the react client app in a web browser.


Description:
This application gives hotel staff members an easy way to generate either a personalized or generalized messages to it's customers.

Usage:
1. Choose a message type from the message drop down. (i.e. if your guest is just arriving you would choose reservation-start)
2. Choose the name of the guest you would like to send a message from the guest drop down.
3. Choose the company you are sending the message from in the company drop down.
4. You can also change your message type to see the different options that are available.
Or choose 'Custom' from the dropdown and the 'Show Custom' button to create your own personalized message.
5. After chosing the 'Custom' from the dropdown and clicking on 'Show Custom' an input field will appear that will allow you the ability to create your own message

Programming language:
I chose React.js and JavaScript because I wanted the user experience to responsive.

I provided dropdown menus for the user to select from pre-populated data in order to eliminate potential errors in the user choosing or inputting a guest's name, a company name or a guest's room number. The app uses JSON files that are imported into the HotelApp.jsx file and because it has no database simply refreshing the page will reset anything you have done. 


All of the logic happens in the HotelApp file, this is where the rendering of the message chosen as well as the guest information and company information is handled. In the newMessage variable, rendering of the messages is handled with a replace function, it will go through the message string looking for something like {{firstName}}, and replace it with the value you assign when you call the function. So {{firstName}} will end up being the first name of the selected guest.

Languages Used:
I used a combination of HTML, MUI, and React, this project. I used MUI to bring the project past the vanilla HTML layout and because I personally enjoy the style of MUI  as well being able to get more comfortable with it. I also used all of these languages, including React, because they are the ones I am currently the most familiar with.

Process for Verifying Correctness of Program:
To verify the program was functioning how I intended, I tested my functions along the way by console logging variables and data. I did this to ensure I was getting the result I expected. I also tested the program in the web browser, as a user, to make sure the data I selected was correctly populating in the message on the DOM and matching the data that was provided in the JSON files.

What I Didn't Get to and Would Do With More Time:
1. I would have styled a bit more. I was having some issues with MUI that took some time to resolve in order for the app to work properly.
2. Currently when a user makes their own custom message it pops up on the side of the submit button. I would add different styling so that it appears below the button as it's own seperate sentence. 