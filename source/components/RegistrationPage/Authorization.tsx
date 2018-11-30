import * as React from 'react';
import {Button} from '@material-ui/core/Button';
import {TextField} from '@material-ui/core/TextField';


interface IState {
  loginValue : string;
  passwordValue : string;
}

class Authorization extends React.Component<{},IState> {
  state:IState = {
    loginValue: '',
    passwordValue: '',
  };

  public render (){
    const{loginValue,passwordValue} = this.state;
    return(
      <div>
        <TextField
          type="text"
          value={loginValue}
          label="Логин"
          variant="outlined"
          placeholder="Введите ваш логин"
          onChange={this.handler("loginValue")}
        />
        <TextField
          type="password"
          value={passwordValue}
          label="Пароль"
          variant="outlined"
          placeholder="Подтверждения пароля"
          onChange={this.handler("passwordValue")}
        />
        <Button variant="contained" color="primary" onClick={this.handleRegistration}>Войти</Button>
      </div>
    );
  }

  private handleRegistration = () => {
    console.log('Вы вошли');
  };

  private handler = (field:string) => {
    return (event:React.SyntheticEvent<{value: string}>) => {
      this.setState({
        [field]: event.target.value
      });
    };
  };

}

export default  Authorization;
