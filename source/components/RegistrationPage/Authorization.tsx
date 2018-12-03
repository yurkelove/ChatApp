import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authorization } from '../../store/actions/authorization';


interface IProps {
  registration : () => void;
  login:string;
  password:string;

}

interface IState {
  loginValue : string;
  passwordValue : string;
}

class Authorization extends React.Component<IProps,IState> {
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
    this.props.registration();
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

function mapStateToProps(state:any) {
  return {...state};
}

function mapDispatchToProps(dispatch:any) {
  return bindActionCreators({
    ...authorization,
  }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
