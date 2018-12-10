import * as React from 'react';
import ChatList from './ChatsList';
import ChatSingle from './ChatSingle';
import AuthPage from './RegistrationPage/AuthPage';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';


// на всю ширину и высоту 
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
