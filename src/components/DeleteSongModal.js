import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    constructor(props) {
        super(props);
        const songName  = "";
        this.state = {songName, intialize: false};
    }

    handleConfirmClick = () => {
        this.props.addDeleteSongTransaction();
        this.setState(prevState => ({...prevState, intialize: false}));
    }

    handleCancelClick = () => {
        this.props.hide2();
        this.setState(prevState => ({...prevState, intialize: false}));
    }
    
    componentDidUpdate() {
        if (this.props.song !== null && this.state.intialize === false) {
            this.setState(prevState => ({...prevState, songName: this.props.song.title, intialize: true}));
        }
    }

    render() {
        const { songName } = this.state;
        let className = "modal";
        // console.log(this.props.index);
        if (this.props.song !== null) {
            className += " is-visible";
        }
        
        return (
            <div class={className} id="delete-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-delete-song-root'>
                <div class="modal-north">
                    Remove Song?
                </div>                
                <div class="modal-center">
                    <div class="modal-center-content">
                        Are you sure you wish to permanently delete the {songName} from the playlist?
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" id="delete-song-confirm-button" class="modal-button" value='Confirm' onClick={this.handleConfirmClick}/>
                    <input type="button" id="delete-song-cancel-button" class="modal-button" value='Cancel' onClick={this.handleCancelClick}/>
                </div>
            </div>
        </div>
        );
    }
}