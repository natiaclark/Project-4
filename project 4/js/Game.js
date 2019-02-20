/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //Declaring the game class
 class Game {
    constructor() {
        this.missed = 0
        this.phrase = [];
        this.activePhrase = null;
    }

     /**  * Creates phrases for use in game  * 
      * @return {array} An array of phrases that could be used in the game  */ 
     
     createPhrase() {
         let phrases = [];
            phrases.push(new Phrase('life is like a box of chocolates'));
            phrases.push(new Phrase('there is no trying'));
            phrases.push(new Phrase('may the force be with you'));
            phrase.push(new  Phrase('you have to see the matrix for yourself'));
            phrases.push(new Phrase('you talking to me'));
            return phrases;
         
                  
 }}

 /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() { 
    
        return this.phrase[Math.floor(Math.random() * this.phrase.length)];
      
}


