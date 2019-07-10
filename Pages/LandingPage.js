'use strict';

function LandingPage (parentElement){
    this.parentElement = parentElement; 
    this.elements = null; 
}


LandingPage.prototype.generate = function () {
    this.elements = `
        <header>
        <h1> The best Lyrics Website </h1>
        <h2> Welcome! </h2>
        </header>
    `;
    this.render(); 
}


LandingPage.prototype.render = function () {
    this.parentElement.innerHTML = this.elements; 
}