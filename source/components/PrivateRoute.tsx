import * as React from 'react';
import {connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest }:any) {
  const {is_authorized} = rest;
  return (
    <Route
        {...rest}
        render={props => {
          console.log(is_authorized);
          return is_authorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/registration"
            }}
          />
        )
      }
    }
    />
  );
}


function mapStateToProps(state:any) {
  return {
    is_authorized: state.authorization.success
  }
}


export default connect(mapStateToProps)(PrivateRoute);
