import * as React from 'react';

class Regist extends React.Component{
  render (){
    return(
      <div>
        <input className='form__style' type='text' placeholder='Введите ваш логин'/>
        <input className='form__style' type='text' placeholder='Введите ваш пароль'/>
        <button onClick={this.handleRegistration}>Вход</button>
      </div>
    );
  }

  handleRegistration = () => {
    console.log('Вы вошли');
  };
}

export default  Regist
