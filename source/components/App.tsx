import * as React from 'react';
import {Route, Redirect, BrowserRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Dialogs from './Dialogs';
import ChatSingle from './ChatSingle';
import AuthPage from './RegistrationPage/AuthPage';
import {connect} from 'react-redux';
import {IAuthorizationState} from '../store/reducers/authorization';
import * as authorization from '../store/actions/authorization';
import IClasses from '../components/IClasses';


// обьеденили интерфейсы , все должно приходить из коннекта
type IAuthrizationProps = IAuthorizationDispatchToProps & IAuthorizationState & Partial<IClasses>;

// type IState = Readonly < {
//   loginValue : string;
//   passwordValue : string;
// }>;

class App extends React.Component<IAuthrizationProps>{

  // public state:IState = {
  //   loginValue: '',
  //   passwordValue: '',
  // };

  public componentDidMount(){
    // const login = this.state.loginValue;
    // const password = this.state.passwordValue;
    if(localStorage.getItem('token')){
      this.props.authorization();
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
}

function mapDispatchToProps(dispatch:any):IAuthorizationDispatchToProps {
  return bindActionCreators({
    ...authorization,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);