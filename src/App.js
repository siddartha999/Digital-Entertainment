import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Trending from "./components/Trending/Trending";
import Shows from "./components/Shows/Shows";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="App-content-container">
        <Switch>
          <Route path="/" render={() => <Trending />} exact/>
          <Route path="/movies" component={(routerProps) => <Shows {...routerProps} />} exact/>
          <Route path="/series" component={(routerProps) => <Shows {...routerProps} />} exact/>
          <Route path="/search" render={() => <Search />} exact/>
        </Switch>
      </Container>
      <MainNavBar />
    </div>
  );
}

export default App;
