import SearchBar from '../SearchBar/index';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({setSearchInput, handleSubmit, errors, clearSearch}){

return (
    <>
      <div id='nav'>
        <div id='nav-ele-1'>
          <NavLink exact to='/' onClick={clearSearch}>
            <h1>Movie Directory</h1>
          </NavLink>
        </div>
        <div id='nav-ele-2'>
          <SearchBar setSearchInput={setSearchInput} handleSubmit={handleSubmit}/>
        </div>
      </div>
      <div id='errors'>
        {errors && errors.map((error, idx) => <div key={idx}>{error}</div>)}
      </div>
    </>
  ); 
}

export default Navigation;