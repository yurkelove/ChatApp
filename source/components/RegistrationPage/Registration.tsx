import * as React from 'react';
import {Button} from '@material-ui/core/Button';
import {TextField} from '@material-ui/core/TextField';




interface IState {
  loginValue : string;
  passwordValue : string;
  confirmPassword : string;
}

class Registration extends React.Component<{},IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
    confirmPassword: ''
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
        <Button variant="contained" color="primary" onClick={this.handleAuthorize}>Зарегистрироваться</Button>
      </div>
    );
  }

  private handleAuthorize = () => {
     console.log('Вы зарегистрированы');
  };

  private handler = (field:string) => {
    return (event:React.SyntheticEvent<{value: string}>) => {
      this.setState({
        [field]: event.target.value
    });
    };
  };

}

export default  Registration;


