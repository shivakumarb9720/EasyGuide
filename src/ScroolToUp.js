import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
 
export default class SUP extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton />
                //This is all you need to get the default view working
            </div>
        );
    }
}