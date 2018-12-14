import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';
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
    textAlign: 'center',
    margin: '0 auto'
  }
};

const enum Setting {
  Auth,
  Registration
}

function TabContainer(props : any) {
  return (
    <Typography component="div">
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
    const {is_authorized, classes} = this.props;
    const { currentTab } = this.state;
    if(is_authorized){
      return <Redirect to={"/dialogs"} />
    }
    return(
      <div className={classes.page_container}>
        <div className={classes.items_container}>
          <AppBar className={classes.AppBar} position="static">
            <Tabs value={currentTab} onChange={this.handleChange}>
              <Tab className={classes.tab_btn} value={Setting.Auth}  label="Войти"/>
              <Tab className={classes.tab_btn} value={Setting.Registration} label="Зарегистрироваться" />
            </Tabs>
          </AppBar>
        <TabContainer>
          {this.renderCurrentTab(currentTab)}
        </TabContainer>
        </div>
      </div>
    );
  }
  // Возможное значение только из этого enum
  private handleChange = (event:React.SyntheticEvent<object>, currentTab: Setting) => {
    this.setState({ currentTab });
  };

  private renderCurrentTab = (currentTab:Setting) => {
    const classes = this.props.classes;
    if(currentTab === Setting.Auth){
      return(
        <Authorization
          password="password"
          login="string"
          classes={classes}
        />
      )
    }else if(currentTab === Setting.Registration){
      return (
        <Registration
          password="password"
          login={"string"}
          confirmPassword="confirmPassword"
          classes={classes}
        />
      )
    }
  }

}

function mapStateToProps(state:any) {
  return {
    is_authorized: state.authorization.success
  }
}

export default connect(mapStateToProps)(AuthPage);
