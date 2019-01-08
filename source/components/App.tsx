import * as React from 'react';
import {Route, Redirect, BrowserRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Dialogs from './Dialogs';
import ChatSingle from './ChatSingle';
import AuthPage from './RegistrationPage/AuthPage';
import {connect} from 'react-redux';
import {IAuthorizationState} from '../store/reducers/authorization';
import {authorization,authSuccess} from '../store/actions/authorization';
import IClasses from '../components/IClasses';


type IAuthrizationProps = IAuthorizationDispatchToProps & IAuthorizationState & Partial<IClasses>;

class App extends React.Component<IAuthrizationProps>{

  public componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.authSuccess();
    }
  }

  public render (){
    return( 
      <BrowserRouter>
        <div>
          <Route path="/registration" component={AuthPage} />
          <Route exact path="/dialogs/:id" component={ChatSingle}/>
          <Route exact path="/dialogs" component={Dialogs}/>
          <Route exact path="/" render={() => (<Redirect to="/registration" />)} />
        </div>
      </BrowserRouter>
    );
  }
}


function mapStateToProps(state:any):IAuthorizationState {
  return {
    loading: state.authorization.loading,
    success: state.authorization.success,
    error: state.authorization.error
  }
}

interface IAuthorizationDispatchToProps {
  authorization: (login:string,password:string) => void;
  authSuccess: () => void;
}

function mapDispatchToProps(dispatch:any):IAuthorizationDispatchToProps {
  return bindActionCreators({
    authorization,
    authSuccess
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);