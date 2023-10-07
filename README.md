# Renton Technical College CSI-248
<br />    

<div align="center">  
    <img src="logo.jpg" alt="Logo">
    <h3 align="center">Guided Activity 4</h3>
</div>

This repository is a part of CSI-248 at Renton Technical College.

## Guided Activity 4

1. Clone the repository to your local machine. (Do not use OneDrive for assignments in this course!)
2. Make note of the folder where you cloned the repository.
3. After you have cloned this repository navigate to your local repository using the cd command.
4. Open the repository in Visual Studio Code by typing `code .`

5. Open the terminal in Visual Studio Code by hitting ctrl + \` or cmd + \` on mac.
6. Create a new React project in the current directory using vite
7. Name the project citylist
8. Select React as the framework
9. Select JavaScript as the variant
10. cd into the new project folder and run:
11. `npm install`
12. `npm install react-router-dom`

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/65edb0e8-a79b-4efc-9460-1c352a86061e)

13. Run `mkdir Screenshots` to create a Screenshots folder.

## Project Setup

1. Delete the contents of the App.jsx, App.css and index.css files.
2. Create a basic h2 inside of a fragment for App.jsx.
3. Take a screenshot and save it to your screenshot folder.

![GA4 - Part 2 - Step 3](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/90283966/c0492ec8-e5d7-4cea-80bf-7b5eb9ddcee9)

4. Included in the repository is a cities.js file, paste the contents of that file at the top of App.jsx
5. When complete your App.jsx should look like this. Notice that I have collapsed the cities array here, it is taking up 27 lines of code.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/76d406d5-d1a2-4ac7-b4b9-e3f8fffab910)


6. In Terminal, type `npm run dev`.  Make sure you are in the citylist folder.
7. You should have just App as an H2 showing on the page.

![GA4 - Part 2 - Step 6](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/90283966/0c92e0ff-d3f5-4f1c-a0c3-dfff00ace689)

8. Take a screenshot of the browser and save it to the Screenshots folder.
9. `git add .`
10. `git commit -m "project setup complete"`
11. `git push`

## Lets create some pages

1. Create a new folder inside of src called Pages.
2. Within this folder create the following Components. Create.jsx, Details.jsx, Home.jsx, and List.jsx
3. Within each component simply create an h2 with the name of the component.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/367beb61-cb87-4c75-93ac-16f75d7c406e)


4. Let's first test these new components out and make sure they are working.
5. Inside App.jsx import each of these components and display them on the page.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/c69f9fc6-9b38-46ae-ab36-e0e78d75964a)

5. Take a screenshot of your browser and save it to your Screenshots folder.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/d0f34534-ac0a-40e3-84cf-b7859ca06815)

6. Once you have verified they are working you can remove the components from inside of the return(). We are going to render these based on a route.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/375d8ab1-0e14-46bd-b012-1c017b957649)

7. Lets create some Routes. We need to import some Components from react-router-dom. Add this to the top of App.jsx

```import { BrowserRouter, Route, Routes } from "react-router-dom";```

8. The BrowserRouter component must wrap all components that will use Routing
9. Within the BrowserRouter we will define Routes using the Routes and Route components
10. Reaplace the code inside of App.jsx with the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/df53b001-c0a4-4f8b-8573-75d70922b219)

11. We have defined 4 routes. If no route is provided we will show the Home Page.
12. If we navigate to /cities we will show the List page. 

![GA4 - Part 3 - Step 12](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/90283966/53fb6172-a6e3-4274-b7a8-36ef6a3dfc02)

13. If we navigate to /cities/create we will show the Create page.

![GA4 - Part 3 - Step 13](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/90283966/b1a3f8d0-aa65-4e8a-9985-67a43cddc8b2)

14. If we navigate to /cities/1 we will show the Details page

![GA4 - Part 3 - Step 14](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/90283966/e8599f1b-ca6c-4fe2-b066-630cc8cd8daf)

15. Verify that these routes are working by running the app and navigating to them.
16. Take a screenshot of each page and save them to your screenshots folder.
17. `git add .`
18. `git commit -m "Routes working"`
19. `git push`

## Create navigation and Context
1. Create a Components folder inside of the src folder.
2. Add a Navigation.jsx component to that folder.
3. At its core a navbar is simply a styled list of links.
4. We will be using the Link component from react-router-dom.
5. Replace the code inside of Navigation.jsx with the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/622c6c07-e3b0-4744-99c6-61cc17c54cf0)

6. Notice that the to attribute of these links is the same as some of the routes you define earlier.
7. Import Nagivation to App.jsx and render it within the browser router but before the routes.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/3c12a6be-7b8d-494e-88fe-60b69538a768)

8. Run the app and verify that Nagivation is working:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/00bc1820-97b1-421d-bf95-c1b0b2ae773d)

9. Take a screenshot of the browser and add it to your Screenshots folder.
10.  It is now time to useContext.
11. Context is a global state container that can be used by any component without passing via props.
12. We are going to add two things to context. The list of cities and a function for creating a new city.
13. citiesList will be tracked by state in App.jsx but shared with the other pages via context.
14. Similarly the createCity function will also be in App.jsx but accessible to the other pages via context.
15. Lets first create the citiesList state and createCity functions.
16. At the top of App.jsx add an import statement for useState and createContext.

`import { useState, createContext } from "react";`

16. Inside of the App() function but before the return statement add the cities to a state variable called citiesList.
17. Also inside of App() and before the return statement create a function that takes a city as a parameter, assigns it an id and then uses setCitiesList to update the list.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/9a7cba71-4ed8-43f9-9eff-8a395c3462a8)

18. We are now ready to create a ContextContainer. This is done using the createContext method that we imported earlier.
19. Create a CitiesContext before the function App()

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/498478cf-da09-4c88-9d36-69a989f75eee)

20. Our new CitiesContext is ready to be used. We need to wrap all elements that will have access to this Context in a CitiesContext.Provider component. The value attribute will be used to specify which object we would like to provide through this context.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/6d94b702-ea8b-4634-9fbc-f29a8b8318b1)

21. We have wrapped all of our routes with our new Context and added both citiesList and createCity to that context. We now must also export the CitiesContext so that it can be imported by our other pages. Add the following to the bottom of App.jsx

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/192a8746-e4cf-4373-a04c-4d03af0a7a01)

22. `git add .`
23. `git commit -m "Context added"`
24. `git push`

## Accessing the Context
1. Lets work on the Details page first.
2. In the route created for the details page we can see that details takes an id.
3. We will need to get that id from the route and then go through the citiesList to find the city with a matching id.
4. We will need access to the citiesList from context as well as the useParams method from react-router-dom to get the id from the route.
5. import the following at the top of Details.jsx

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/0fe973bc-5ea2-4fe6-b3fa-bbee621d7bb7)

6. useContext allows us to access our CitiesContext, useParams() will give us the id from the url
7. Replace the Details function with the following code:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/b0a74658-7a06-41fb-a668-0f8301247796)

8. Run the app and test it out. If you navigate to /cities/1 you should see the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/f571488e-9e64-447f-ada6-2d5d1eef3bbb)

9. Providing a different id will give you a different city.
10. Take a screenshot of the browser and save it to your Screenshots folder.

11. Now we are ready to work on the list. This list page will show all of the cities in the list and provide a link for each city to the Details page.
12. The List page will import useContext, CitiesContext, and Link
13. At the top of the List page add the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/403ff7bb-660b-4c84-a86e-7d31ed031375)

13. Replace the List Function with the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/3018da43-3a6c-400d-aa5a-469729756adb)

14. You should now have a functioning list page that links to the details page.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/a4365894-31ed-49d6-b584-8495c96dcc56)

15. Take a screenshot of the browser and save it to your Screenshots folder.
16. `git add .`
17. `git commit -m "List and Details Complete"`
18. `git push`

## The Create Page
1. Our create page will allow the user to add a new city to the list.
2. It will contain a form and need access to the creatCity function that we added to Context.
3. We will need useContext and the CitiesContext for create.
4. Add these import statements to the top of Create.jsx
5. Lets start with the HTML for this page first since it is fairly long.
6. Create an HTML form for adding a city and set the onSubmit event to call a function called handleSubmit

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/5e29b9e5-a042-4e61-95c1-be5d21023992)

6. Now lets work on our handleSubmit function. This function will take in an event. The event will have the information from the form. By default events cause a page refresh which we do not want since we are handling the client side. Prevent the default refresh and then get the data from the form. We then pass the data to the createCity function and reset the form.

7. Replace the code inside of Create() with the following:

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/72825268-d3c3-44a3-9c58-dabb4eab1cf2)

8. Use the form to create a new City.
9. Navigate to the Cities List and you should see your new City added to the list.
10. Click on the new city and observe the Details page.
11. Add styling to the navbar so that it looks like navigation and not simply a list of links.
12. Style the form so that it is centered and inside of a container.
13. You may use any css library that you wish or write your own.
14. Here is an example. You do not need to match it exactly.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/2a1dc3a8-56b0-4368-b6c7-edadbfddb819)

15. `git add .`
16. `git commit -m "Assignment Complete"`
17. `git push`

If you have any questions about this assignment please reach out to myself or our TA for this course. 



Feel free to message your instructor or the TA on Canvas if you have any questions.
