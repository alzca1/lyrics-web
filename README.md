# LYRICS WEBSITE

Description

The purpose of this project is to create a basic lyrics website where, by means of DOM manipulation via Javascript, famous song lyrics will be shown. The first version of the website will display 5 buttons with personally-picked famous songs in order to try the lyrics API.

 Further developments will implement a search bar in order to perform search based on artist names and song titles.

MVP (DOM - CANVAS)

The MVP version of the website  will contain two basic pages: the landing page and the lyrics page. The landing page will display some random artwork in the center of the display. In addition, the lyrics page will display 5 different buttons which will trigger the lyrics from the API and display them in the card created for such purpose. 


Backlog

The backlog includes the implementation of a search field in the navbar, so that the user can perform searches based on artist name and song title. 

Additionally, I would also like to include another API service to get specific artwork from the album including the song requested. 

Data structure

The file structure will be as follows: 

///////// ROOT FOLDER /////////
           index.html
           style.css

             app.js 
            Layout.js
            Router.js

        //// COMPONENTS \\\\
              Navbar.js
              Footer.js
              Card.js
              Loading.js
            
        //// PAGES \\\\
         LandingPage.js
           Lyrics.js

        ////SERVICES \\\\
         LyricsService.js


Classes and methods definition.

Classes included: 

Function LandingPage(parentElement)
Function Lyrics (parentElement)
Function Layout(root, style)
Function  Router()
Function Navbar(parentElement,links,style)
Function Loading(parentElement)
Function Card()
Function Footer()

Methods included: 
this.render()
this.generate()
this.getContainers()


States y States Transitions

The website will have two different states: the one we find once we load the website (landing page) which will include the elements of the navbar(Home and Lyrics buttons on top), the main (containing some music artwork) and the footer. 

By clicking Lyrics, the loading page will display a message ('Your lyrics are on their way. Please, be patient'). Once everything is ready, the state of the lyrics page will maintain the landingpage look, though the card including the lyrics will be loaded along with 5 buttons contanining predetermined lyrics which can be clicked (and thus, their respective lyrics be shown on the screen).


Links

Lyrics API: https://lyricsovh.docs.apiary.io/

Trello : https://trello.com/b/7PbC1d3f


Link url: https://alzca1.github.io/lyrics-web/

Git: https://github.com/alzca1/lyrics-web

