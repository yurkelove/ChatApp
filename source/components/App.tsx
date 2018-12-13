import * as React from 'react';
import { Route, Redirect, BrowserRouter} from 'react-router-dom';
import ChatsList from './ChatsList';
import ChatSingle from './ChatSingle';
import AuthPage from './RegistrationPage/AuthPage';
import PrivateRoute from './PrivateRoute';

class App extends React.Component{

  public render (){
    
    return(
      <BrowserRouter>
        <div>
          <Route path="/registration" component={AuthPage} />
          <PrivateRoute exact path="/dialogs/:id" component={ChatSingle}/>
          <PrivateRoute exact path="/dialogs" component={ChatsList}/>
          <Route exact path="/" render={() => (<Redirect to="/registration" />)} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

