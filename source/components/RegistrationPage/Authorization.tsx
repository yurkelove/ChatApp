import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  * as authorization from '../../store/actions/authorization';
import {IAuthorizationState} from '../../store/reducers/authorization';
import { withStyles } from '@material-ui/core/styles';
import { minSymbol, isNotEmpty } from '../../validation/validation';



// const styles ={
//   authBtn: {
//     backgroundColor: 'red',
//   }
// };


type IProps  = Readonly<{
  authorization: (login:string,password:string) => void;
  login: string;
  password:string;
  classes: any;
}>;

type IState = Readonly < {
  loginValue : string;
  passwordValue : string;
  errorLogin: string;
  errorPassword: string;
}>;

// type PROPS = IProps & IState;


@withStyles<IProps,IState>({
  root: {
    color: 'blue',
  },
  loginValue__input: {
    margin: '0 auto'
  }
})


// @withStyles(styles) 
class Authorization extends React.Component<IProps,IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
    errorLogin: null,
    errorPassword: null
  };

  public render (){
    const{loginValue,passwordValue,errorLogin,errorPassword} = this.state;
    return(
      <div>
        <TextField
          error={loginValue.length === 0 ? true : false}
          className={this.props.classes.loginValue__input}
          type="text"
          value={loginValue}
          label={errorLogin !== null ? errorLogin : "Логин" }
          variant="outlined"
          onChange={this.handler("loginValue")}
        />
        <TextField
          error={passwordValue.length === 0 ? true : false}
          type="password"
          value={passwordValue}
          label={errorPassword !== null  ? errorPassword : "Пароль" }
          variant="outlined"
          onChange={this.handler("passwordValue")}
        />
        <Button className={this.props.classes.root} variant="contained" color="primary" onClick={this.handleAuthorization}>Войти</Button>
      </div>

    );
  }

  private handleAuthorization = () => {
    const login = this.state.loginValue;
    const password = this.state.passwordValue;
    let errorLogin = isNotEmpty(login) ? null : 'Пустой логин';
    let errorPassword = isNotEmpty(password) ? null : 'Пустой пароль';
    if(errorPassword === null){
      errorPassword = minSymbol(password) ? null : 'Пароль должен быть минимум 6 символов'
    }
    if(errorLogin === null && errorPassword === null){
      this.props.authorization(login, password);
    } 
    // Обнуляем если ошибки нет, или записываем текст если она есть
    this.setState({
      errorLogin,
      errorPassword
    })
};

  private handler = (field:keyof IState) => {
    return (event:React.SyntheticEvent<{value: string}>) => {
      this.setState({
        ...this.state,
        [field]: (event.target as HTMLInputElement).value
      });
    };
  };

}


function mapStateToProps(state:any):IAuthorizationState {
  return {
    loading: state.registration.loading,
    success: state.registration.success,
    error: state.registration.error
  }
}

function mapDispatchToProps(dispatch:any) {
  return bindActionCreators({
    ...authorization,
  }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
