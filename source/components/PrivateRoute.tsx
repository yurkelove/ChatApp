import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


function PrivateRoute({ component: Component,is_authorized, ...rest }:any) {
  return (
    <Route
        {...rest}
        render={ props => {
          return is_authorized ? (<Component {...props} />)
            : ( <Redirect to="/registration"/>)
        }}
    />
  );
}


function mapStateToProps(state:any) {
  return {
    is_authorized: state.authorization.success
  }
}


export default connect(mapStateToProps)(PrivateRoute);
