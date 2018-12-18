import * as React from 'react';
import {bindActionCreators} from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import * as dialogs from '../store/actions/dialogs';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';
import {IDialogsState} from '../store/reducers/dialogs';
import IClasses from '../components/IClasses';
import LoadingHoc from '../hoc/Loading';
import {dialog_styles} from '../hoc/dialog_styles';
import {IItemDialogs} from '../store/reducers/dialogs';


type IDialogsProps = IDialogsDispatchToProps & IDialogsState & Partial<IClasses>;


@(withStyles as any)(dialog_styles)
class Dialogs extends React.Component<IDialogsProps>{
  // public static defaultProps: {
  //   data: []
  // };

  componentDidMount(){
      this.props.dialogs();
  }

//Default Props - который будет устанавливать data - []
  //item : any - изменить на созданный интерфейс

  public render (){
    const {data} = this.props;
    console.log(data);
    const ListElements = (data || []).map((item :IItemDialogs) => <ListItem>
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
          {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
         }/>
    </ListItem>);
      return (
      <List>
        {ListElements}
      </List>
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







