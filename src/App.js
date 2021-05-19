import { Route, Switch } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <header>
    //     <h1>Movie Directory</h1>
    //   </header>
    // </div>
    
    <Switch>
      <Route exact path='/'>
        <div>
          <header>
            <h1>Movie Directory</h1>
          </header>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
