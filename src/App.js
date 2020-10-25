import React from 'react';
import './App.css';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              { /* Navigation Paths */ }
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Navbar>
          {/*Path will navigate to the component's content*/} 
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Read}></Route>
            <Route path='/create' component={Create}></Route>
          </Switch>
          {/* Initially displayed all components on the one page
          /* <Header></Header>
          <Content></Content>
          <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
