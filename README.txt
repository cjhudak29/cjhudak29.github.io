MET CS 601 Term Project


This project is my final submission for the term project assignment in MET CS 601 Web Application Development at Boston University. This project was developed as a portfolio website to professionally present myself. The site consists of 6 pages: Home, Interests, Resume, Coursework, Photo Gallery, and Contact Me.


Generally, each page consists of a header image styled with CSS to produce a parallax effect. Below is a Navigation bar that a sticky effect is applied to. This is for easy convenience when navigating through the site. The content of each page is contained in a .wrapper div and formatting from there is dependent on the content of each page. Finally, the footer is located at the bottom of the page for easy access to external links of my work (Linkedin and github).


The site is designed to give a coffee-shop website experience. The formatting, font-family choice, and color palette are influenced with this goal in mind.
Home Page
This is a general page to give a quick introduction to who I am and where my motivation as a front-end developer comes from. I also provide context that this site was developed within a six week span of my web development course.

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

Contact Me
This page contains a JS validated form  that asks for a visitor’s first name, last name, email address, and message they would like to leave.