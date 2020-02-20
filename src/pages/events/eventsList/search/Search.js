import React from 'react'
import './search.css'

const Search = ({filterSearch, changeFilter=()=>{}}) =>{
    return(
        <div>
            <input type='text' placeholder='rechercher' value={filterSearch} onChange={e=>changeFilter(e.target.value)}/>
        </div>
    );
}

export default Search