import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
        const songName  = "";
        const songArtist = "";
        const songYouTubeId = "";
        this.state = {songName, songArtist, songYouTubeId, intialize: false};
    }

    handleConfirmClick = () => {
        let newSong = {title: this.state.songName, artist: this.state.songArtist, youTubeId: this.state.songYouTubeId}
        this.props.addEditSongTransaction(newSong);
        this.setState(prevState => ({...prevState, intialize: false}));
    }

    handleCancelClick = () => {
        this.props.hide();
        this.setState(prevState => ({...prevState, intialize: false}));
    }
    
    componentDidUpdate() {
        if (this.props.song !== null && this.state.intialize === false) {
            this.setState(prevState => ({...prevState, songName: this.props.song.title, songArtist: this.props.song.artist, songYouTubeId: this.props.song.youTubeId, intialize: true}));
        }
    }

    render() {
        const { songName, songArtist, songYouTubeId } = this.state;
        let className = "modal";
        // console.log(this.props.index);
        if (this.props.index !== null) {
            className += " is-visible";
        }
        console.log(className);
        return (
            <div class={className} id="edit-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='edit-song-root'>
                <div class="modal-north">
                    Edit Song
                </div>                
                <div class="modal-center">
                    <div class="edit-modal-center-content">
                        <div class="edit-modal-center-content-item"> 
                            Title: 
                        </div>

                        <div class="edit-modal-center-content-item">
                            <input type="text" id="edit-song-modal-title-textfield" value={songName}
                            onChange={ (event) => 
                                {
                                    this.setState(prevState => ({...prevState, songName:event.target.value}))
                                }}>
                            </input>
                        </div>
                        
                        <div class="edit-modal-center-content-item"> 
                            Artist:
                        </div>
                        
                        <div class="edit-modal-center-content-item">
                            <input type="text" id="edit-song-modal-artist-textfield" value={songArtist} 
                            onChange={ (event) => 
                                {
                                    this.setState(prevState => ({...prevState, songArtist:event.target.value}))
                                }}>
                            </input> 
                        </div>


                        <div class="edit-modal-center-content-item"> 
                            You Tube Id:
                        </div>

                        <div class="edit-modal-center-content-item"> 
                            <input type="text" id="edit-song-modal-youTubeId-textfield" value={songYouTubeId} 
                            onChange={ (event) => 
                                {
                                    this.setState(prevState => ({...prevState, songYouTubeId:event.target.value}))
                                }}>
                            </input> 
                        </div>
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" id="edit-song-confirm-button" class="modal-button" value='Confirm' onClick={this.handleConfirmClick}/>
                    <input type="button" id="edit-song-cancel-button" class="modal-button" value='Cancel' onClick={this.handleCancelClick}/>
                </div>
            </div>
        </div>);
    }
}