import * as React from 'react';
import {AppBar} from '../../node_modules/@material-ui/core/index';
import {Tabs} from '../../node_modules/@material-ui/core/index';
import {Tab} from '../../node_modules/@material-ui/core/index';
import {Typography} from '../../node_modules/@material-ui/core/index';



class Registration extends React.Component{
    state = {
        value: 'one',
    };

    render (){
        const { value } = this.state;
        return(
            <div>
            <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab value="one" label="Войти"/>
                    <Tab value="two" label="Зарегистрироваться" />
                </Tabs>
            </AppBar>
                {/*{value === 'one' && <TabContainer>*/}
                  {/*<input type='text' placeholder='введите ваше имя'/>*/}
                  {/*<input type='text' placeholder='електронная почта'/>*/}
                {/*</TabContainer>}*/}
                {/*{value === 'two' && <TabContainer>*/}
                  {/*<input type='text' placeholder='введите ваше имя'/>*/}
                  {/*<input type='text' placeholder='електронная почта'/>*/}
                  {/*<input type='text' placeholder='електронная почта'/>*/}
                {/*</TabContainer>}*/}
            </div>

        );
    }

    handleChange = (event : any, value: any) => {
        this.setState({ value });
    };
}



export default Registration
