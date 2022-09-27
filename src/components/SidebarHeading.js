import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        let className = "toolbar-button";
        const {canAddList} = this.props;
        if (!canAddList) className += " disabled";
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={className} 
                    onClick={this.handleClick}
                    value="+" 
                    disabled={!canAddList}
                />
                Your Playlists
            </div>
        );
    }
}