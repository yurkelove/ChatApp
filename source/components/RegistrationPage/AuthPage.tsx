import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Registration from './Registration';
import Authorization from './Authorization';
import {IClasses} from './styles';


const styles ={
  page_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items_container: {
    width: '720px'
  },
  tab_btn: {
    textAlign: "center",
    margin: '0 auto'
  }
};

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

@(withStyles as any)(styles)
class AuthPage extends React.Component<IClasses>{
  public state = {
    currentTab: Setting.Auth
  };
  public render (){
  const classes = this.props.classes;
  const { currentTab } = this.state;
    return(
      <div className={classes.page_container}>
        <div className={classes.items_container}>
          <AppBar className={classes.AppBar} position="static">
            <Tabs value={currentTab} onChange={this.handleChange}>
              <Tab className={classes.tab_btn} value={Setting.Auth}  label="Войти"/>
              <Tab className={classes.tab_btn} value={Setting.Registration} label="Зарегистрироваться" />
            </Tabs>
          </AppBar>
          <div>
            {currentTab === Setting.Auth && <TabContainer>
              <Authorization
              password="password"
              login="string"
              classes={classes}
              />
            </TabContainer>}
            {currentTab === Setting.Registration && <TabContainer>
              <Registration
              password="password"
              login={"string"}
              confirmPassword="confirmPassword"
							classes={classes}
              />
            </TabContainer>}
          </div>
        </div>
    </div>
    );
  }
  // Возможное значение только из этого enum
  private handleChange = (event : any, currentTab: Setting.Auth) => {
    this.setState({ currentTab });
  };

}

export default AuthPage;
