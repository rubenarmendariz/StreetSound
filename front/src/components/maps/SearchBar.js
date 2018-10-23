
import React from "react";
const SearchBar = prop => {
 return (
   <div>
     
       <input type="text" placeholder="Search..." onChange={e => prop.search(e.target.value)} />
     
   </div>
 );
};
export default SearchBar;
