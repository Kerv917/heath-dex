Pokedex challenge

Hi there!, the following is an explanation of the Pokedex created by myself, using a Pokemon API which shows the stats of every Pokemon. 

Demo: https://heath-dex.herokuapp.com/#/

I will tackle the related topics in the following order: 

Installation/Running the App

Design Decisions

Main Components

Conclusion

Installation/Running the App

It required me to install Nodejs, which I already had, it was necessary to install this dependencys before the application can be launched. Afterward I had to install Create-React-App, this is a supported way to create single-page React applications. Create-React-App offers a modern build setup with no configuration whatsoever. Setting up was very simple:

I first tested if npm was installed, then "npm -g install create-react-app" on my terminal. After succesfully installing create-reat-app, I installed "npm install reat-app heathdex", this also created my directory.

Folders included on react: node_modules (which has all the modules that i'll be using), public folder along with index,html, src folder which include the app.js. Most importantly; package.json. on the Package.json file, it included scripts, dependencies, name of the app, version and many more. 

Before I started to add contents, I installed bootstrap for styling. npm install bootstrap, which installs the latest package. 
My reason for using bootstrap was because this is a simple single page-app. Boostrap has really great components, such as cards for the pokemons. 

Also installed Styled-components "npm install styled-components" on terminal. It allowed me to write the styling of my components in the  Javascript file, using JSX (syntax extension to JavaScript).

Design Decisions 

Having created my first major react project through this challenge. The app is fairly straightforward in terms of implementaion. React follows a component based philsophy, so the HealthDex is similarly split into various different components, each responsible for it's own logic and rendering. 

The main components: 

Pokemon - wrapper component for the entire app.
PokemonCard - cards for each Pokemon
PokemonList - A list containing a bulk of the app's info and processing
PokemonNavBar - the navigation bar at the top of the app

A basic view of all 964 Pokemon is generated when the application is launched, and rendering using a simple pokemonUrl request to the PokeAPI. This contained the name of the Pokemon, their ID and image. I also had to fetch the Pokemon info such as types, height, weight special attacks/defense. 

Conclusion 

This challenge was extremly fun and a fulfilling experience. I've recieved great exposure to React, and can now confidently develop future applications using Reatc. 











