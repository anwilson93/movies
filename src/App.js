import axios from "axios";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import DisplayAllMovies from "./components/DisplayAllMovies";
import DisplaySingleMovie from "./components/DisplaySingleMovie";
import SearchBar from "./components/SearchBar";
import {useEffect} from 'react';
import wordsAssociatedWithPopularMovies from './Words';

// error handling, duplicate movies, menu or navigation

function App() {
  const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=3ccdfc68';

  const [state, setState] = useState({
    searchInput: '',
    results: [],
    carouselResults: [],
    selected: {}
  });

  const homePageSearch = (searchTerm) => {
    axios(api + '&s=' + searchTerm).then((data) => {
      let res = data.data.Search;
      let movieResultsCarousel = [];
      let movieResults = [];
      for (let i = 0; i < 10; i++){
        if (i % 2 === 0){
          movieResultsCarousel.push(res[i]);
        } else {
          movieResults.push(res[i]);
        }
      };
     
      console.log(movieResultsCarousel)

      setState(prevState => {
        return {...prevState, results: movieResults}
      });
    });  
  };

  const search = (searchTerm) => {
  
    axios(api + '&s=' + searchTerm).then((data) => {
      let movieResults = data.data.Search;

      setState(prevState => {
        return {...prevState, results: movieResults}
      });
    });  
  };

  useEffect (() => {
      let randomIndex = Math.floor(Math.random() * (20 + 1));
      let randomWordForSearch = wordsAssociatedWithPopularMovies[randomIndex];
      console.log(randomWordForSearch, 'here')
      homePageSearch(randomWordForSearch);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(state.searchInput)
  }

  const setSearchInput = (e) => {
    let searchInput = e.target.value;

    setState(prevState => {
      return {...prevState, searchInput: searchInput}
    })
  };

  const openModal= title => {
    axios(api + "&t=" + title).then((data) => {
      let singleMovie = data.data

      setState(prevState => {
        return {...prevState, selected: singleMovie}
      })
    })
  };

  const closeModal = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  };

  console.log(state.selected.Title === undefined, 'selected state here')

  return (
    <div>
      <header>
        <h1>Movie Directory</h1>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <SearchBar setSearchInput={setSearchInput} handleSubmit={handleSubmit} />
            <DisplayAllMovies results={state.results} openModal={openModal} state={state} closeModal={closeModal}/>
          </Route>
        </Switch>
        {(typeof state.selected.Title !== 'undefined') ? <DisplaySingleMovie selected={state.selected} closeModal={closeModal} /> : false}
      </main>
    </div>
  );
}

export default App;
