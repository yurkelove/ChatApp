import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as registration from '../../store/actions/registration';
import { IRegistrationState } from '../../store/reducers/registration';

interface IProps {
  registration? : () => void;//param
  login?:string;
  password?:string;
  confirmPassword?: string;
}

interface IState {
  loginValue : string;
  passwordValue : string;
  confirmPassword : string;
}

class Registration extends React.Component<IProps,IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
    confirmPassword: '',
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
    this.props.registration(); // Передали из пропсов , а именно из registration-action
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


