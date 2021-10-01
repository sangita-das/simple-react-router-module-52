import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/friends">
            <Friends></Friends>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>

          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}


{/* <Friends></Friends> */ }

export default App;




/* this section is just sample how tp connect one to another page by using router

  {<BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/friends">
            <Friends></Friends>
          </Route>
          // /* When the page is not found or type anything wrong that is not relatable then show notFound page */
          // <Route>
          //   <NotFound></NotFound>
          // </Route>

          // {/* when no page but stay only  '/' after the page link show home */}
      //     <Route exact path="/">
      //       <Home></Home>
      //     </Route>
      //   </Switch>
      // </BrowserRouter>}


