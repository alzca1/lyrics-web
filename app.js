'use strict';

function main() {
    var ENTRY_POINT = '/';
    var layoutInstance = null; 
    var rootElement = document.querySelector('#root');
    var navbarInstance = null;
    var links = [
        {name: 'Home' , 
        url: '/'} ,
        {name: 'Lyrics' , 
        url: '/lyrics'}
    ];  

    generateLayout();
    generateNavbar();
    addListenersToNavbar(); 
    activateRouter();  

    function generateLayout() {
        layoutInstance = new Layout(rootElement); // crea una nueva instancia de Layout
        layoutInstance.generate(); // usa el método para generar esa nueva instamcia de Layout
    }

    function generateNavbar() {
        navbarInstance = new Navbar (layoutInstance.header,links);
        navbarInstance.generate(); 

    }

    function activateRouter () {
        //llamará distintos métodos de router
        routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)  

    }

    function addListenersToNavbar() {
        var anchors = document.querySelectorAll('nav a');
        anchors.forEach(function (anchor){
            anchor.addEventListener('click', changePage);
            
        })
    }


    function changePage(event) {
        var url = event.target.attributes.url.value;
        routerInstance.buildDom(url, layoutInstance.main);
        
    }
}; 

window.addEventListener('load', main);