import React from "react";
import "tachyons";

const SearchBox = (props) => {
    const {searchfield, searchChange} = props;

    return(
        <div className="pa2">
            <input 
              className="pa3 ba b--green bg-lightest-blue br3"
              type="search"
              placeholder="Search" 
              onChange={searchChange}
              />
        </div>
    );
}

export default SearchBox;