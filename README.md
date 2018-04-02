# Can Data Application
* Technologies: 
    * Node Express Server
    * React
    * Bootstrap
    * Lodash
    
## Main View
 * Defaults to showing all records, I used Lodash to shuffle them up for an added affect to the searching portion.
 * Allows users to sort the data in several manners:
    * All - each time a user clicks all the array is shuffled (again for added effect so that the sort is more obvious)
    * Name - performs a sort based off the name given to each can and alphabetizes (In this case names are numbers therefore it puts them in numerical order).
    * Serial - This orders from least to greatest based on the serial number provided to each can.
    * Size - sorts numerically from least to greatest based on size.
    * Created On - this sorts by date from oldest to newest based on the Creation date for each location.
    * Modified on - this sorts by date from oldest to newest based on the Last time the record was modified, not the location itself.
    
    
