'use strict';
'use strict';

function LyricsPage (parentElement, buttons){
    this.parentElement = parentElement; 
    this.elements = null;
    this.lyrics = null; 
    this.buttons = buttons;
    this.artist = 'Michael Jackson';
    this.song = 'Beat It';
}




LyricsPage.prototype.generate = async function () {
    await this.connectToAPI(); 
    this.elements = `
        <header>
        
       
        </header>
        <section class="cards-container">

        
    `;
    
        this.elements += `
        <article>
        <h2> ${this.artist} </h2>
        <h3> ${this.song} </h3>
        <h5>${this.lyrics.lyrics.replace(/\n/g, '<br />')}</h5>
        </article>
        
        `;
    this.elements +=   `<aside>` 
    this.buttons.forEach((button) => {
        this.elements += `<button artist="${button.artist}">${button.song}</button>`
    })
    
    this.elements += `
        </aside>
    </section>`
    this.render(); 
    this.addListeners();
}


LyricsPage.prototype.render = function () {
    this.parentElement.innerHTML = this.elements; 
} 

LyricsPage.prototype.connectToAPI = async function () {
    this.lyrics = await lyricsServiceInstance.getSong(this.artist, this.song)
     
}

LyricsPage.prototype.addListeners = function() {
    var self = this;
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', (event) => {
            self.artist = event.target.attributes.artist.value;
            self.song = event.target.innerHTML;
            console.log(self.artist, self.song)
            self.generate();
        })
    })
}