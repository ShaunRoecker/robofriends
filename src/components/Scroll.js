import React from "react";
import "tachyons"

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll",
                     border: "px solid black",
                     height: "700px"
                     }}>
            {props.children}
        </div>
    );
}
export default Scroll;