import * as React from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {dialogs} from '../store/actions/dialogs';
import {IDialogsState,IItemDialogs} from '../store/reducers/dialogs';
import IClasses from '../components/IClasses';
import LoadingHoc from '../hoc/Loading';


type IDialogsProps = IDialogsDispatchToProps & IDialogsState & Partial<IClasses>;


const Dialogs = (props:any):IDialogsProps => {

  const handlerSingle = (id:string) => {
    return () => {
      props.history.push(`/dialogs/${id}`);
    }
  };

  const ListElements = (props.data || []).map((item :IItemDialogs) =>
    <ListItem key={item.id} onClick={handlerSingle(item.id)}>
    <ListItemAvatar>
      <Avatar src={item.dialogPic} />
    </ListItemAvatar>
    <ListItemText
      primary="Brunch this weekend?"
      secondary={
        <React.Fragment>
          <Typography component="span"  color="textPrimary">
            Ali Connors
          </Typography>
          {item.lastMessage}
        </React.Fragment>
      }/>
  </ListItem>);
  // @ts-ignore
  return (
    <List >
      {ListElements}
    </List >
  )


};

interface IDialogsDispatchToProps {
  onMount: () => void;
}

function mapStateToProps(state:any):IDialogsState {
  return {
    loading: state.dialogs.loading,
    data: state.dialogs.data,
    error: state.dialogs.error
  };
}

function mapDispatchToProps(dispatch:any):IDialogsDispatchToProps {
  return bindActionCreators({
    onMount: dialogs
  }, dispatch);
}


const DialogsWithLoader = LoadingHoc(Dialogs);


// @ts-ignore
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DialogsWithLoader));







