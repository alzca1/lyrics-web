'use strict';


function Layout (root, style) {
    this.root = root; // es el único tag de html del que colgará toda la aplicación
    this.style = style;
    this.elements = null;
    this.header = null; 
    this.main = null; 
    this.footer = null; 

}

Layout.prototype.generate = function () {
     // generaremos elementos del DOM
     // para poder generar elementos necesitamos guardarlos en un sitio
     this.elements = `
     <header id="site-header"> </header>
     <main id="site-main"> </main>
     <footer id="site-footer"> </footer>   
     `;
     this.render() // para añadir esos elementos en el DOM
     this.getContainers(); 
}

Layout.prototype.render = function () {
    // añadiremos los elementos al DOM
    //coger el root (el código HTML) que vamos a pasar desde app.js
    this.root.innerHTML = this.elements; 
}

Layout.prototype.getContainers = function () {
    // haremos get del main, header y footer del DOM
    this.header= document.querySelector('#site-header')
    this.main= document.querySelector('#site-main')
    this.footer= document.querySelector('#site-foooter')
}


