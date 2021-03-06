import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Trending from "./components/Trending/Trending";
import Shows from "./components/Shows/Shows";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Container className="App-content-container">
        <Switch>
          <Route path="/" render={() => <Trending />} exact/>
          <Route path="/movies" component={(routerProps) => <Shows {...routerProps} />} exact/>
          <Route path="/series" component={(routerProps) => <Shows {...routerProps} />} exact/>
          <Route path="/search" render={() => <Search />} exact/>
          <Route render={() => <NotFound />}/>
        </Switch>
      </Container>
      <MainNavBar />
    </div>
  );
}

export default App;
