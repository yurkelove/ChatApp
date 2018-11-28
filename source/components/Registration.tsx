import * as React from 'react';


class Registration extends React.Component{
    render (){
        return(
            <div>
                <h1 className='registr__title'>Registration Page</h1>
                <input type='text' placeholder='Введите ваш логин' />
                <input type='text' placeholder='Введите ваш пароль' />
            </div>
        );
    }
}


export default Registration;
