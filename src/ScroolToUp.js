import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
 
export default class SUP extends React.Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <ScrollUpButton />
              
=======
                <ScrollUpButton 
                    StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    // style={{color:"#1b262c";}}
                    ToggledStyle={{}}/>
                
>>>>>>> b7a1720e5ef4680563fa2aadfd5fc1b006ee18c5
            </div>
        );
    }
}