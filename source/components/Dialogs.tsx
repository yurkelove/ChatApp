import * as React from 'react';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import * as dialogs from '../store/actions/dialogs';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import {IDialogsState} from '../store/reducers/dialogs'
import IClasses from '../components/IClasses';
import Loading from '../hoc/Loading';


type IDialogsProps = IDialogsDispatchToProps & IDialogsState & Partial<IClasses>;


// @(withStyles as any)()
class Dialogs extends React.Component<IDialogsProps>{
  componentDidMount(){
    setTimeout(()=> {
      this.props.dialogs();
    },5000)
  }


  public render (){
    const {loading} = this.props;
    console.log(loading);
    return(
      <div>
        <h1>Dialogs Page</h1>
        <div>
          {loading ?  (
                <h1>Данные загрузились</h1>
            ) :
            <Fade
              in={loading === loading}
              style={{ transitionDelay: loading ? '800ms' : '0ms', }}
              unmountOnExit
            >
              <CircularProgress/>
            </Fade>
          }
        </div>
      </div>
    );
  }
}


interface IDialogsDispatchToProps {
  dialogs: () => void;
}

function mapStateToProps(state:any) {
  return {
    loading: state.dialogs.loading,
    data: state.dialogs.data,
    error: state.dialogs.error
  };
}

function mapDispatchToProps(dispatch:any):IDialogsDispatchToProps {
  return bindActionCreators({
    ...dialogs,
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(Dialogs);


