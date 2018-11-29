import * as React from 'react';
import {Button} from '@material-ui/core/Button';
import {TextField} from '@material-ui/core/TextField';

class Authorization extends React.Component{
  state = {
      inpValue: ''
  };
  render (){
    return(
      <div>
        <TextField type="text"
                   value={this.state.inpValue}
                   label="Логин"
                   variant="outlined"
                   placeholder="Введите ваш логин"
                   onChange={this.onChangeHandleAuth}
        />
        <TextField type="password"
                   value={this.state.inpValue}
                   label="Пароль"
                   variant="outlined"
                   placeholder="Подтверждения пароля"
                   onChange={this.onChangeHandleAuth}
        />
        <Button variant="contained" color="primary" onClick={this.handleRegistration}>Войти</Button>
      </div>
    );
  }

  handleRegistration = () => {
    console.log('Вы вошли');
  };

  onChangeHandleAuth = (event:any) => {
    this.setState({
      inpValue: event.target.value,
    });
  };
}

export default  Authorization;
