import React from "react";
import Card from "./Card";
import "tachyons";

const CardList = ({ robots }) => {
    const cardlist = robots.map((user, index) => {
                return (<Card
                    key={index}
                    id={robots[index].id}
                    name={robots[index].name}
                    email={robots[index].email}    
                /> );
            });
    

    return (
            <div>
                {cardlist}
            </div>
    );

}
export default CardList;
