import * as React from 'react';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as dialogs from '../store/actions/dialogs';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import {IDialogsState} from '../store/reducers/dialogs';
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
    return (
      <h1>Тут подключение</h1>
    )
  };
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

const DialogsConnected = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default LoadingWithSpinner(DialogsConnected);

// Обернуть LoadingWithSpinner,сделать правильный коннект




