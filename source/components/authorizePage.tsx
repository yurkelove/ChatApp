import * as React from 'react';

class Autorize extends React.Component {
  render (){
    return(
      <div>
        <input className='form__style' type='text' placeholder='Введите ваш логин'/>
        <input className='form__style' type='text' placeholder='Введите ваш пароль'/>
        <input className='form__style' type='text' placeholder='Подтверждения пароля'/>
        <button onClick={this.handleAuthorize}>Зарегистрироваться</button>
      </div>
    );
  }

  handleAuthorize = () => {
     console.log('Вы зарегистрированы');
  };
}

export default  Autorize
