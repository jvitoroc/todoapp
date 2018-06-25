import React from "react";

function Pressed({time, handler, children}){
    let upped = false;
    
    const child = React.cloneElement(React.Children.only(children), {
        onMouseDown: ()=>{
            upped = false;
            setTimeout(function() {
                if (!upped)
                   handler.call(null);
            }, time);
        },
        onMouseUp: ()=>{
            upped = true;
        }
    });

    children = null;
    return child;
};

export default Pressed;