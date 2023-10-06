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


## Project Setup

1. Delete the contents of the App.jsx, App.css and index.css files.
2. Create a basic h2 inside of a fragment for App.jsx.
3. Included in the repository is a cities.js file, paste the contents of that file at the top of App.jsx
4. When complete your App.jsx should look like this. Notice that I have collapsed the cities array here, it is taking up 27 lines of code.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/76d406d5-d1a2-4ac7-b4b9-e3f8fffab910)


5. `npm run dev`
6. You should have just App as an H2 showing on the page.
7. `git add .`
8. `git commit -m "project setup complete"`
9. `git push`

## Lets create some pages

1. Create a new folder inside of src called Pages.
2. Within this folder create the following Components. Create.jsx, Details.jsx, Home.jsx, and List.jsx
3. Within each component simply create an h2 with the name of the component.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/367beb61-cb87-4c75-93ac-16f75d7c406e)


4. Let's first test these new components out and make sure they are working.
5. Inside App.jsx import each of these components and display them on the page.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/c69f9fc6-9b38-46ae-ab36-e0e78d75964a)

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
13. If we navigate to /cities/create we will show the Create page.
14. If we navigate to /cities/1 we will show the Details page
15. Verify that these routes are working by running the app and navigating to them.
16. `git add .`
17. `git commit -m "Routes working"`
18. `git push`

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

9. It is now time to useContext.
10. Context is a global state container that can be used by any component without passing via props.
11. We are going to add two things to context. The list of cities and a function for creating a new city.
12. citiesList will be tracked by state in App.jsx but shared with the other pages via context.
13. Similarly the createCity function will also be in App.jsx but accessible to the other pages via context.
14. Lets first create the citiesList state and createCity functions.
15. At the top of App.jsx add an import statement for useState and createContext.
`import { useState, createContext } from "react";`

16. Inside of the App() function but before the return statement add the cities to a state variable called citiesList.
17. Also inside of App() and before the return statement create a function that takes a city as a parameter, assigns it an id and then uses setCitiesList to update the list.

![image](https://github.com/EmeryCSI/CSI248F23_GuidedActivity4/assets/102991550/9a7cba71-4ed8-43f9-9eff-8a395c3462a8)








20. When it is completed:
21. Type `git add .` to stage all updated files.
22. Type `git commit -m "Assignment Complete"`.
23. Type `git push`.

If you have any questions about this assignment please reach out to myself or our TA for this course. 



Feel free to message your instructor or the TA on Canvas if you have any questions.
