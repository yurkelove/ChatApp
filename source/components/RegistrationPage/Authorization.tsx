import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import  * as authorization from '../../store/actions/authorization';
import {IAuthorizationState} from '../../store/reducers/authorization';
import {minSymbol, isNotEmpty} from '../../validation/validation';
import {styles} from './styles';
import IClasses from '../IClasses'

// обьеденили интерфейсы , все должно приходить из коннекта
type IAuthrizationProps = IAuthorizationDispatchToProps & IAuthorizationState & Partial<IClasses>;

type IState = Readonly < {
  loginValue : string;
  passwordValue : string;
  errorLogin: string;
  errorPassword: string;
}>;

@(withStyles as any)(styles)
class Authorization extends React.Component<IAuthrizationProps, IState> {
  public state:IState = {
    loginValue: '',
    passwordValue: '',
    errorLogin: null,
    errorPassword: null
  };


  public render (){
    const classes = this.props.classes;
    const{ loginValue,passwordValue,errorLogin,errorPassword } = this.state;
    return(
      <div className={classes.items_container}>
        <TextField
          error={errorLogin !== null ? true : false}
          className={classes.item_textField}
          type="text"
          value={loginValue}
          label={errorLogin !== null ? errorLogin : "Логин"}
          variant="outlined"
          onChange={this.handler("loginValue")}
        />
        <TextField
          error={errorPassword !== null ? true : false}
          className={classes.item_textField}
          type="password"
          value={passwordValue}
          label={errorPassword !== null  ? errorPassword : "Пароль"}
          variant="outlined"
          onChange={this.handler("passwordValue")}
        />
        <Button className={classes.authBtn} variant="contained" color="primary" onClick={this.handleAuthorization}>Войти</Button>
      </div>

    );
  }

  private handleAuthorization = () => {
    const login = this.state.loginValue;
    const password = this.state.passwordValue;
    const errorLogin = isNotEmpty(login) ? null : 'Пустой логин';
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


export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
