import * as React from 'react';
import {bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles } from '@material-ui/core/styles';
import * as registration from '../../store/actions/registration';
import {IRegistrationState } from '../../store/reducers/registration';
import {minSymbol, isNotEmpty } from '../../validation/validation';
import {IClasses, styles} from './styles';



interface IProps extends IClasses{
  registration : (login:string,password:string,confirmPassword:string) => void;
  login:string;
  password:string;
  confirmPassword: string;
}

type IState = Readonly < {
  loginValue : string;
  passwordValue : string;
  confirmPassword : string;
  errorLogin: string;
  errorPassword: string;
  errorConfirmPassword:string
}>;

@(withStyles as any)(styles)
class Registration extends React.Component<IProps,IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
    confirmPassword: '',
    errorLogin: null,
    errorPassword: null,
    errorConfirmPassword: null
  };

  public render (){
    const classes = this.props.classes;
    const{loginValue,passwordValue,confirmPassword,errorLogin,errorPassword,errorConfirmPassword} = this.state;
    return(
      <div className={classes.items_container}>
        <TextField
          className={classes.item_textfield}
          type="text"
          value={loginValue}
          label={errorLogin !== null ? errorLogin : "Логин" }
          variant="outlined"
          placeholder="Введите ваш логин"
          onChange={this.handler("loginValue")}
        />
        <TextField
          className={classes.item_textfield}
          type="password"
          value = {passwordValue}
          label={errorPassword !== null ? errorPassword : "Пароль" }
          variant="outlined"
          placeholder="Введите ваш пароль"
          onChange={this.handler("passwordValue")}
        />
        <TextField
          className={classes.item_textfield}
          type="password"
          value = {confirmPassword}
          label={errorConfirmPassword !== null ? errorConfirmPassword : "Подтвердить пароль" }
          variant="outlined"
          placeholder="Подтверждения пароля"
          onChange={this.handler("confirmPassword")}
        />
        <Button className={classes.regBtn} variant="contained" color="primary" onClick={this.handleRegistration}>Зарегистрироваться</Button>
      </div>
    );
  }

  private handleRegistration = () => {
    //interface-передать
    let login = this.state.loginValue;
    let password = this.state.passwordValue;
    let confirmPassword = this.state.confirmPassword;
    let errorLogin = isNotEmpty(login) ? null : 'Пустой логин';
    let errorPassword = isNotEmpty(password) ? null : 'Пустой пароль';
    let errorConfirmPassword = isNotEmpty(confirmPassword) ? null : 'Поле пустое';
    if(errorPassword === null){
      errorPassword = minSymbol(password) ? null : 'Пароль должен быть минимум 6 символов'
    }
    if(errorLogin === null && errorPassword === null){
      this.props.registration(login,password,confirmPassword);
    }
    // Проверку на совпадение пароль с подверждение пароля
    if(password !== confirmPassword){
      errorConfirmPassword = errorConfirmPassword ? null : 'Не верный пароль'
    }
    this.setState({
      errorLogin,
      errorPassword,
      errorConfirmPassword
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


function mapStateToProps(state:any):IRegistrationState {
  return {
    loading: state.registration.loading,
    success: state.registration.success,
    error: state.registration.error
  };
}

function mapDispatchToProps(dispatch:any) {
  return bindActionCreators({
    ...registration,
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

