import * as React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import Registr from './registrPage'
import Authorize from './authorizePage'


class Registration extends React.Component{
    state = {
        value: 'one',
    };

  render (){
    const enum Setting {
        value
    }
    const { value } = this.state;
      return(
        <div>
          <AppBar position="static">
            <Tabs value = {Setting.value} onChange={this.handleChange}>
              <Tab enum = {value}  label="Войти"/>
              <Tab enum = {value} label="Зарегистрироваться" />
            </Tabs>
          </AppBar>
					<div>
            <Registr/>
            <Authorize/>
          </div>
        </div>


      );
  }

    handleChange = (event : any, value: any) => {
        this.setState({ value });
    };
}



export default Registration
