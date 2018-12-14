import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import * as registration from '../../store/actions/registration';
import {IRegistrationState} from '../../store/reducers/registration';
import {minSymbol, isNotEmpty} from '../../validation/validation';
import {IClasses, styles} from './styles';


type IRegistrationProps = IRegistrationDispatchToProps & IRegistrationState & Partial<IClasses>;


type IState = Readonly < {
  loginValue : string;
  passwordValue : string;
  confirmPassword : string;
  errorLogin: string;
  errorPassword: string;
  errorConfirmPassword:string
}>;

@(withStyles as any)(styles)
class Registration extends React.Component<IRegistrationProps,IState> {
  public state:IState = {
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
          error={errorLogin !== null ? true : false}
          className={classes.item_textField}
          type="text"
          value={loginValue}
          label={errorLogin !== null ? errorLogin : "Логин"}
          variant="outlined"
          placeholder="Введите ваш логин"
          onChange={this.handler("loginValue")}
        />
        <TextField
          error={errorPassword !== null ? true : false}
          className={classes.item_textField}
          type="password"
          value={passwordValue}
          label={errorPassword !== null ? errorPassword : "Пароль"}
          variant="outlined"
          placeholder="Введите ваш пароль"
          onChange={this.handler("passwordValue")}
        />
        <TextField
          error={errorConfirmPassword !== null ? true : false}
          className={classes.item_textField}
          type="password"
          value={confirmPassword}
          label={errorConfirmPassword !== null ? errorConfirmPassword : "Подтвердить пароль"}
          variant="outlined"
          placeholder="Подтверждения пароля"
          onChange={this.handler("confirmPassword")}
        />
        <Button className={classes.regBtn} variant="contained" color="primary" onClick={this.handleRegistration}>Зарегистрироваться</Button>
      </div>
    );
  }

  private handleRegistration = () => {
    const login = this.state.loginValue;
    const password = this.state.passwordValue;
    const confirmPassword = this.state.confirmPassword;
    const errorLogin = isNotEmpty(login) ? null : 'Пустой логин';
    let errorPassword = isNotEmpty(password) ? null : 'Пустой пароль';
    let errorConfirmPassword = isNotEmpty(confirmPassword) ? null : 'Поле пустое';
    if(errorPassword === null){
      errorPassword = minSymbol(password) ? null : 'Пароль должен быть минимум 6 символов'
    }
    if(errorLogin === null && errorPassword === null){
      this.props.registration(login,password,confirmPassword);
    }
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


interface IRegistrationDispatchToProps {
  registration: (login:string,password:string,confirmPassword:string) => void;
}

function mapStateToProps(state:any):IRegistrationState {
  return {
    loading: state.registration.loading,
    success: state.registration.success,
    error: state.registration.error
  };
}

function mapDispatchToProps(dispatch:any):IRegistrationDispatchToProps {
  return bindActionCreators({
    ...registration,
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

