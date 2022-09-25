import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, song, index) {
        super();
        this.app = initApp;
        this.song = song;
        this.index = index;
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }
    
    undoTransaction() {
        this.app.addDeleteSong(this.index, this.song);
    }
}