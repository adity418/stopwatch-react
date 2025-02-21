import React from "react";

const ChildComponent = React.memo(
    (props) => {
        return(
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
);

export default ChildComponent;

// React.memo -> wrap -> coomponent -> component

// if u r sending a function, then react.memo 
// wont be able to save you from re-rendering