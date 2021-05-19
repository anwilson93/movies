import axios from "axios";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";


function App() {
  const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=3ccdfc68';

  const [state, setState] = useState({
    searchInput: '',
    results: [],
    selected: {}
  });

  const search = (e) => {
    e.preventDefault();
    axios(api + '&s=' + state.s).then((data) => {
      console.log(data)
    })  
  }

  const setSearchInput = (e) => {
    let searchInput = e.target.value;

    setState(prevState => {
      console.log(state)
      return {...prevState, searchInput: searchInput}
    })
  }
  return (

    <div>
      <header>
        <h1>Movie Directory</h1>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <SearchBar setSearchInput={setSearchInput} search={search} />
          </Route>
        </Switch>
      </main>
    </div>

    //need to search for movies (search bar)
    //display movies after search (all movies display)
    //single movie view (one movie display)

  );
}

export default App;
