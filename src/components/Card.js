import React from "react";
import "tachyons";

const Card = (props) => {
    const { id, name, email } = props
    return(
        <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-1">
            <img alt="" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h1>{name}</h1>
                <h2>{email}</h2>
            </div>
        </div>
    )
}

export default Card;