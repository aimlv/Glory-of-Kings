import Player from './player.js'
export default class Game{
    constructor(){
        this.player = null;
    }
    login(userName){
        this.player = new Player(userName)
    }
}