# Weather-App
Develop a single page application that lists all the courses available for the growingCoders
programme offered by Osigla Consulting Limited.

Description
On page load, make an API call to https://osigla.com.ng/api/growingCoders/courses.json. The API
implements the GET http method, and returns a list of courses (array), their duration, number of
topics and corresponding programme tracks.
Using javascript map functionality, iterate over the array returned and display them on the page
according to the UI provided.
Provide a select dropdown functionality that enables users to filter the list by programme track. The
dropdown should contain options [all, beginner, intermediate]. If the user selects anything other
than all, then only the courses in that track should be displayed – in essence the list should be
filtered. See UI design below:


Acceptance Criteria
• The segment below should be a separate component
• On page load, all courses should be displayed without filtering
• The filter dropdown should work
• Colours must be accurate
