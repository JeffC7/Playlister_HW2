import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    handleMouseOver = (onmouseover) => {
        onmouseover.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            isHovering: true
        }));
    }

    handleMouseLeave = (onmouseleave) => {
        onmouseleave.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            isHovering: false
        }));
    }

    handleDoubleClick = (ondblclick) => {
        ondblclick.preventDefault();
        this.props.changeEditIndex(this.getItemNum() - 1);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        // console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }

        itemClass += " unselected-list-card"; 
        
        var youTubeLink = "https://www.youtube.com/watch?v=" + song.youTubeId;

        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onMouseOver={this.handleMouseOver}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleDoubleClick}
                draggable="true"
            >
                <span style = {{paddingRight : "5px"}}>{num + "."}</span>
                <a href = {youTubeLink}>{song.title} by {song.artist}</a>
                <input className="list-card-button" type="button" value="X"></input>
            </div>
        )
    }
}