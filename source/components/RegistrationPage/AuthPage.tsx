import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Registration from './Registration';
import Authorization from './Authorization';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


interface IClasses {
  classes: any;
};

const styles ={
  items_container:{
    width: '720px',
    margin: '0 auto'
  },
  AppBar: {
    width: '720px',
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


class AuthPage extends React.Component<IClasses>{
  state = {
    currentTab: Setting.Auth
  };
  public render (){
  const classes = this.props.classes;
  const { currentTab } = this.state;
    return(
      <div>
        <AppBar className={classes.AppBar} position="static">
          <Tabs value={currentTab} onChange={this.handleChange}>
            <Tab value={Setting.Auth}  label="Войти"/>
            <Tab value={Setting.Registration} label="Зарегистрироваться" />
          </Tabs>
        </AppBar>
        <div className={classes.items_container}>
          {currentTab === Setting.Auth && <TabContainer>
            <Authorization
            password={"password"}
            login={"string"}
            />
          </TabContainer>}
          {currentTab === Setting.Registration && <TabContainer>
            <Registration
            password={"password"}
            login={"string"}
            confirmPassword={"confirmPassword"}
            />
          </TabContainer>}
        </div>
      </div>
    );
  }
  // Возможное значение только из этого enum
  private handleChange = (event : any, currentTab: Setting.Auth) => {
    this.setState({ currentTab });
  };



}

export default withStyles(styles)(AuthPage);
