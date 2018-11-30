import * as React from 'react';
import {AppBar} from '@material-ui/core/AppBar/AppBar';
import {Tabs} from '@material-ui/core/Tabs/Tabs';
import {Tab} from '@material-ui/core/Tab/Tab';
import Registration from './Registration';
import Authorization from './Authorization';
import {Typography} from '@material-ui/core/Typography/Typography';


const enum Setting {
  Auth,
  Registration
}

function TabContainer(props : any) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class AuthPage extends React.Component{
  state = {
    currentTab: Setting.Auth
  };
  public render (){
  const { currentTab } = this.state;
    return(
      <div>
        <AppBar position="static">
          <Tabs value={currentTab} onChange={this.handleChange}>
            <Tab value={Setting.Auth}  label="Войти"/>
            <Tab value={Setting.Registration} label="Зарегистрироваться" />
          </Tabs>
        </AppBar>
        <div>
          {currentTab === Setting.Auth && <TabContainer>
            <Authorization/>
          </TabContainer>}
          {currentTab === Setting.Registration && <TabContainer>
            <Registration/>
          </TabContainer>}
        </div>
      </div>
    );
  }
  // Возможное значение только из этого enum
  private handleChange = (event : any, value: Setting) => {
    this.setState({ value });
  };



}

export default AuthPage;
