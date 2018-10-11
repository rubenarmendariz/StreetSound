
import React from "react";
const SearchBar = prop => {
 return (
   <div>
     <form action="">
       <input type="text" placeholder="Search..." onChange={e => prop.search(e.target.value)} />
     </form>
   </div>
 );
};
export default SearchBar;