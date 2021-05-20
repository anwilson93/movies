import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import DisplayAllMovies from './components/DisplayAllMovies';
import DisplaySingleMovie from './components/DisplaySingleMovie';
import Carousel from './components/Carousel';
import Navigation from "./components/Navigation";
import wordsAssociatedWithPopularMovies from './Words';

function App() {
  const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=3ccdfc68';

  const [state, setState] = useState({
    searchInput: '',
    results: [],
    carouselResults: [],
    errors: [],
    selected: {}
  });

  //INIT RANDOM SEARCH FOR HOME PAGE AND CAROUSEL
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

      setState(prevState => {
        return {...prevState, results: movieResults, carouselResults: movieResultsCarousel}
      });
    });  
  };

  useEffect (() => {
    let randomIndex = Math.floor(Math.random() * (44 + 1));
    let randomWordForSearch = wordsAssociatedWithPopularMovies[randomIndex];
    homePageSearch(randomWordForSearch);
  }, []);

  const clearSearch = () => {
    setState(prevState => {
      return {...prevState, results: [], carouselResults: [], setSearchInput: ''}
    });
    let randomIndex = Math.floor(Math.random() * (44 + 1));
    let randomWordForSearch = wordsAssociatedWithPopularMovies[randomIndex];
    homePageSearch(randomWordForSearch);
  };

  //SUBMITTING INPUT & UPDATING SEARCH FROM FORM
  const search = (searchTerm) => {
  
    axios(api + '&s=' + searchTerm).then((data) => {
      let movieResults = data.data.Search;
  
      if (data.data.Error){
        setState(prevState => {
          return {...prevState, errors: [data.data.Error]}
        });
      } else {
        setState(prevState => {
          return {...prevState, errors: []}
        });
      }

      setState(prevState => {
        return {...prevState, results: movieResults, carouselResults: []}
      });
    });  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(state.searchInput);
  };

  const setSearchInput = (e) => {
    let searchInput = e.target.value;

    setState(prevState => {
      return {...prevState, searchInput: searchInput}
    })
  };


  //MODAL (SINGLE MOVIE PAGE) OPEN/CLOSE
  const openModal= title => {
    axios(api + '&t=' + title).then((data) => {
      let singleMovie = data.data

      setState(prevState => {
        return {...prevState, selected: singleMovie}
      })
    });
  };

  const closeModal = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  };

  return (
    <div>
      <Navigation setSearchInput={setSearchInput} handleSubmit={handleSubmit} errors={state.errors} clearSearch={clearSearch}/>
      <main>
        {(state.carouselResults.length > 0) ? <Carousel carouselResults={state.carouselResults} openModal={openModal}/> : false}
        <Switch>
          <Route exact path='/'>
            <DisplayAllMovies results={state.results} openModal={openModal} state={state} closeModal={closeModal}/>
          </Route>
        </Switch>
        {(typeof state.selected.Title !== 'undefined') ? <DisplaySingleMovie selected={state.selected} closeModal={closeModal} /> : false}
      </main>
    </div>
  );
}

export default App;
