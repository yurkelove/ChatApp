import * as React from 'react';
import {Button} from '@material-ui/core/Button';
import {TextField} from '@material-ui/core/TextField';

class Registration extends React.Component {
  state = {
    inpValue: ""
  };
  render (){
    return(
      <div>
        <TextField type="text"
          value = {this.state.inpValue}
          label="Логин"
          variant="outlined"
          placeholder="Введите ваш логин"
          onChange={this.onChangeHandleReg}
        />
        <TextField type="password"
                   value = {this.state.inpValue}
                   label="Пароль"
                   variant="outlined"
                   placeholder="Введите ваш пароль"
                   onChange={this.onChangeHandleReg}
        />
        <TextField type="password"
                   value = {this.state.inpValue}
                   label="Пароль" variant="outlined"
                   placeholder="Подтверждения пароля"
                   onChange={this.onChangeHandleReg}
        />
        <Button variant="contained" color="primary" onClick={this.handleAuthorize}>Зарегистрироваться</Button>
      </div>
    );
  }

  handleAuthorize = () => {
     console.log('Вы зарегистрированы');
  };

  onChangeHandleReg = (event:any) => {
    this.setState({
      inpValue: event.target.value,
    });
  };
}

export default  Registration;


// интерфейс почитать для state-component
