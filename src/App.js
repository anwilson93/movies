import { Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (

    //need to search for movies (search bar)
    //display movies after search (all movies display)
    //single movie view (one movie display)
    
    <Switch>
      <Route exact path='/'>
        <div>
          <header>
            <h1>Movie Directory</h1>
          </header>
          <SearchBar />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
