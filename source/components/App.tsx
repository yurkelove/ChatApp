import * as React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import ChatsList from './ChatsList';
import ChatSingle from './ChatSingle';
import Registration from './Registration';

class App extends React.Component {
  public render () {
    return(
       <BrowserRouter>
         <div>
           <Route path="/registration" component={Registration} />
           <Route exact path="/dialogs/:id" component={ChatSingle}/>
           <Route exact path="/dialogs" component={ChatsList}/>
           <Route exact path="/" render={() => (<Redirect to="/registration" />)} />
         </div>
       </BrowserRouter>
    );
  }
}

export default App;
