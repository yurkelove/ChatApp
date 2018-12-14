import * as React from 'react';
import {Route, Redirect, BrowserRouter} from 'react-router-dom';
import ChatList from './ChatsList';
import ChatSingle from './ChatSingle';
import AuthPage from './RegistrationPage/AuthPage';

class App extends React.Component{
  public render (){
    return(
      <BrowserRouter>
        <div>
          <Route path="/registration" component={AuthPage} />
          <Route exact path="/dialogs/:id" component={ChatSingle}/>
          <Route exact path="/dialogs" component={ChatList}/>
          <Route exact path="/" render={() => (<Redirect to="/registration" />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
