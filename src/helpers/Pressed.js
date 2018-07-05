import React from "react";

function Pressed({time, onSuccess, onFail, children, mouseUp = false}){
    let upped = false;
    
    const child = React.cloneElement(React.Children.only(children), {
        onMouseDown: ()=>{
            upped = false;
            setTimeout(function() {
                if(!mouseUp){
                    if (!upped)
                        onSuccess.call(null);
                    else if(onFail)
                        onFail.call(null)
                }else{
                    upped = true;
                }
                
            }, time);
        },
        onMouseUp: ()=>{
            if(!mouseUp)
                upped = true;
            else{
                if(upped)
                    onSuccess.call(null);
                else if(onFail)
                    onFail.call(null)
            }
        }
    });

    children = null;
    return child;
};

export default Pressed;