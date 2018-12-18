import * as React from 'react';
import {compose} from "redux";
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as dialogs from '../store/actions/dialogs';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import {IDialogsState} from '../store/reducers/dialogs';
import IClasses from '../components/IClasses';
import LoadingHoc from '../hoc/Loading';




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
      <DialogsWithLoader loading={loading}/>
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

// Обернуть LoadingWithSpinner,сделать правильный коннект
// const connect =  connect(mapStateToProps,mapDispatchToProps)(Dialogs);

// const LoadingWithSpinner = LoadingHoc(Dialogs);
// const composeHoc = compose(
//   connect(mapStateToProps,mapDispatchToProps)
// )(LoadingWithSpinner);
//
// export default composeHoc;

const DialogsWithLoader = LoadingHoc(Dialogs);

export default connect(mapStateToProps,mapDispatchToProps)(DialogsWithLoader);







