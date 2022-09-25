import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initOldSong, initNewSong, index) {
        super();
        this.app = initApp;
        this.oldSong = initOldSong;
        this.newSong = initNewSong;
        this.index = index;
    }

    doTransaction() {
        this.app.editSong(this.newSong, this.index);
    }
    
    undoTransaction() {
        this.app.editSong(this.oldSong, this.index);
    }
}