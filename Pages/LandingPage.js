'use strict';

function LandingPage (parentElement){
    this.parentElement = parentElement; 
    this.elements = null; 
}


LandingPage.prototype.generate = function () {
    this.elements = `
        <header class="main-header">
        
        <h1> Lyrics Website </h1>
        
        </header>
    `;
    this.render(); 
}


LandingPage.prototype.render = function () {
    this.parentElement.innerHTML = this.elements; 
}