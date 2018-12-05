import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as registration from '../../store/actions/registration';
import { IRegistrationState } from '../../store/reducers/registration';


type IProps = Readonly<{
  registration : (login:string,password:string,confirmPassword:string) => void;
  login:string;
  password:string;
  confirmPassword: string;
}>;

type IState = Readonly < {
  loginValue : string;
  passwordValue : string;
  confirmPassword : string;
  errorConfirmValue: string,
  errorPasswordValue: string,
  errorLoginValue: string
}>;

class Registration extends React.Component<IProps,IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
    confirmPassword: '',
    errorLoginValue: 'Вы не ввели логин',
    errorPasswordValue: 'Вы не ввели пароль',
    errorConfirmValue: 'Вы забыли ввести подверждение пароля'
  };

  public render (){
    const{loginValue,passwordValue,confirmPassword} = this.state;
    return(
      <div>
        <TextField
          type="text"
          value = {loginValue}
          label="Логин"
          variant="outlined"
          placeholder="Введите ваш логин"
          onChange={this.handler("loginValue")}
        />
        <TextField
          type="password"
          value = {passwordValue}
          label="Пароль"
          variant="outlined"
          placeholder="Введите ваш пароль"
          onChange={this.handler("passwordValue")}
        />
        <TextField
          type="password"
          value = {confirmPassword}
          label="Пароль" variant="outlined"
          placeholder="Подтверждения пароля"
          onChange={this.handler("confirmPassword")}
        />
        <Button variant="contained" color="primary" onClick={this.onBtnHandler}>Зарегистрироваться</Button>
      </div>
    );
  }

  private onBtnHandler = () => {
    //interface-передать
    let login = this.state.loginValue;
    let password = this.state.passwordValue;
    let confirmPassword = this.state.confirmPassword;
    this.props.registration(login,password,confirmPassword); // Передали из пропсов , а именно из registration-action
    if(login === ''){
      console.log( this.state.errorLoginValue );
     }else if(password === ''){
       console.log(this.state.errorPasswordValue)
     }else if(confirmPassword === ''){
       console.log(this.state.errorConfirmValue);
     }
    
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


