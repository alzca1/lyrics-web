'use strict';


function Router () {
    this.page = null; 
    this.buttons = [
    {artist: 'Michael Jackson', song:'Beat It'}, 
    {artist: 'Phil Collins', song:'In the Air Tonight'},
    {artist: 'Madonna', song:'Material Girl'},
    {artist: 'R.E.M.', song:'Losing My Religion'},
    // {artist: 'U2', song:'Sunday Bloody Sunday'},
    // {artist: 'Blondie', song:'Call Me'},
    // {artist: 'Prince', song:'Kiss'},
    // {artist: 'Irene Cara', song:'What A Feeling'},
    // {artist: 'The Stranglers', song:'Golden Brown'},
    // {artist: 'Bon Jovi', song:'You Give Love A Bad Name'},
]

}


Router.prototype.buildDom = function (url, parentElement) {
    switch (url) {
        case '/': 
        this.generateLandingPage(parentElement); 
        break;

        case '/lyrics':
        this.generateLyricsPage(parentElement); 
        break; 
    
        default: 
        this.generateLandingPage(parentElement); 
    
    }
}

Router.prototype.generateLandingPage = function (parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate(); 
}

Router.prototype.generateLyricsPage = function (parentElement) {
    this.page = new LyricsPage(parentElement, this.buttons);
    this.page.generate(); 
}


var routerInstance = new Router(); // Creamos una variable de Router para evitar que se creen una y otra vez instancias de Router. Habrá un único router y estará a lo largo de toda la aplicación qué pagina se debe mostrar. 