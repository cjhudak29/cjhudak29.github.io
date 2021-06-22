MET CS 601 Term Project


This project is my final submission for the term project assignment in MET CS 601 Web Application Development at Boston University. This project was developed as a portfolio website to professionally present myself. The site consists of 6 pages: Home, Interests, Resume, Coursework, Photo Gallery, and Contact Me.


Generally, each page consists of a header image styled with CSS to produce a parallax effect. Below is a Navigation bar that a sticky effect is applied to. There is also a vue component attached to this in my navbar.js file. This function is used to insert the name of each page into the navigation bar. This way if I need to change the name to a page, I can change it in this one script file and thus change it across all 6 html files. This is for easy convenience when navigating through the site. The content of each page is contained in a .wrapper div and formatting from there is dependent on the content of each page. Finally, the footer is located at the bottom of the page for easy access to external links of my work (Linkedin and github).


The site is designed to give a coffee-shop website experience. The formatting, font-family choice, and color palette are influenced with this goal in mind.
Home Page
This is a general page to give a quick introduction to who I am and where my motivation as a front-end developer comes from. I also provide context that this site was developed within a six week span of my web development course. The greeting on this page has a script attached. Depending on the time of day, the heading will greet you with “Good Morning, World!”, “Good Afternoon, World!” or “Good Evening, World!”
Interests
This page provides some personal information that adds my touch to the site. Providing my interests, hobbies and passions provides context to who I am as a person. This information is important for potential employers to evaluate that a resume can’t grasp.


I wrapped each topic with a .container div and split it further into a .halvesBox div. The .container div holds two .halvesBox divs: one that contains text content and one that contains an image related to the text content.
Resume
All of my professional and educational experience is listed here including professional positions held, educational institutions attended, and honors/awards received.


I kept the formatting traditional here with each section being contained in the section element. Each section consists of a header tag (<h1><h2> and <h3>) and a paragraph tag. My professional roles and educational institutions are contained in a table for compact and effective display of the respective aspects of myself.
Course Work
Here I list my coursework through the certificate program because it revolves around important content related to front end development. I also list some top course work from my undergrad as a DeSales student.


My course work with Boston university is contained in a table that contains assignment rubrics, topics covered, and links to my work via github. I also give the status of each course and whether the course is complete, in progress, or in planning.
Photo Gallery
This page goes further in depth of my photography interest from the interests page. The photos are contained in a .thirdsBox div. The .container div is used again to store three .thirdsBox divs. The goal is to display my photos in three columns. Each photo is clickable and will open a new tab so users can see full-resolution photos.


This page showcases my photos shot and edited by myself. The photos are contained in a .grid-item div which is contained in a .grid-container div. This gallery is using grid CSS.
Contact Me
This page contains a JS validated form  that asks for a visitor’s first name, last name, email address, and message they would like to leave. 


What was done after my presentation?
The only recommendation I received was to add more styling tags like underlining word in my text-heavy pages (like coursework). I decided to highlight key skills and languages by underlining them in the descriptions. This way the eye is drawn to the focus of those paragraphs.


I also said I aimed to make my website a mobile friendly website. I achieved this by using the [@media screen and (max-width: 460px)] method found on w3schools. The 460px value used here is used to target screens that have a maximum 460ppi density. In this case, anything smaller than this value will adjust various classes to fit their screen. This density was pulled from my phone’s density and tested primarily on iPhone devices from the 12 pro max back to the 6 plus.