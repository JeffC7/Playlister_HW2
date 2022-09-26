import React from "react";

export default class EditToolbar extends React.Component {
    handleAddClick = (onclick) => {
        onclick.preventDefault();
        const { addSongCallBack } = this.props;
        addSongCallBack();
    }


    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (canAddSong) addSongClass += " disabled";
        if (canUndo) undoClass += " disabled";
        if (canRedo) redoClass += " disabled";
        if (canClose) closeClass += " disabled";

        // let booleanVariable1 = ""; //add 
        // let booleanVariable2 = ""; //undo
        // let booleanVariable3 = ""; //redo
        // let booleanVariable4 = ""; //close

        // foolProofDesign = () => {
        //     if (this.state.editIndex !== null && this.state.deleteIndex !== null) {
        //         booleanVariable1 = "disabled";
        //         booleanVariable2 = "disabled";
        //         booleanVariable3 = "disabled";
        //         booleanVariable4 = "disabled";
        //     } else {
        //         if (canAddSong) {
        //             booleanVariable1 = ""; //enable add
        //             booleanVariable4 = ""; //enable close
        //         } 
                
        //         if (canUndo) {
        //             booleanVariable2 = "";
        //         } else {
        //             booleanVariable2 = "disabled";
        //         }
                
        //         if (canUndo) {
        //             booleanVariable3 = "";
        //         } else {
        //             booleanVariable3 = "disabled";
        //         }
        //     }
        // }

        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick = {this.handleAddClick}
                // disabled = {booleanVariable1}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
                // disabled = {booleanVariable2}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
                // disabled = {booleanVariable3}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
                // disabled = {booleanVariable4}
            />
        </div>
        )
    }
}