# Can Data Application
* Technologies: 
    * Node Express Server
    * React
    * Bootstrap
    * Lodash
    * Google-React-Map
    * Dotenv
    * Jest
    * Nightmare
    
## Main View
 * Defaults to showing all records, I used Lodash to shuffle them up for an added affect to the searching portion.
 * Allows users to sort the data in several manners:
    * All - each time a user clicks all the array is shuffled (again for added effect so that the sort is more obvious)
    * Name - performs a sort based off the name given to each can and alphabetizes (In this case names are numbers therefore it puts them in numerical order).
    * Serial - This orders from least to greatest based on the serial number provided to each can.
    * Size - sorts numerically from least to greatest based on size.
    * Created On - this sorts by date from oldest to newest based on the Creation date for each location.
    * Modified on - this sorts by date from oldest to newest based on the Last time the record was modified, not the location itself.
    
  * I used Bootstrap 4 cards to display the data coming in from the .json file. I also included font awesome icons that would be displayed if the can needed repair, contained hazardous material, or was out of service.
  * I used the Google-React-Map npm package to easily insert a Google Map that shows the location of the can. I used the Dotenv npm package to safely store my key in a hidden environment file which was passed to the front end with my can data. I particularly like this package because the syntax transfers over directly to AWS environment variables and makes it pretty easy to continue devving locally and have your files all set up once deployed.
  
  ## Testing
  * I used Jest for logic testing. I attempted to use Jest/Enzyme/Sinon for testing the UI. Unfortunately I am more familiar with writing tests in Angular and I found this to be a struggle. To do my UI testing I ended up falling back to Nightmare.js. This is clearly not the way I would prefer to test a React application and I have ambitions to learn the other testing frameworks for UI testing related to React but that was not in the scope of this project.
    
    
