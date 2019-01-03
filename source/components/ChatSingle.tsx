import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import IClasses from './IClasses';
import {styles} from './styles/chatSingle_styles';
import LoadingHoc from '../hoc/Loading';
import {messages} from '../store/actions/messages';
import {IMessagesState,IItemMessages} from '../store/reducers/messages'
import formatDate from '../helpers/formatDate';



const userId = 1;


  type IMessagesProps = IMessagesDispatchToProps & IMessagesState & Partial<IClasses>;


@(withStyles as any)(styles)
export class ChatSingle extends React.Component<IMessagesProps>{

  state = {
    inpValue: '',
  };

  public render (){
    const {classes,data} = this.props;
    const infoMap = data.map((item:IItemMessages) =>
      <div key={item.userId}>
        {item.userId === userId ?
          <div className={classes.rightUser}>
            {this.renderMessage(item,classes)}
          </div>
          : <div className={classes.leftUser}>
            {this.renderMessage(item,classes)}
          </div>
        }
      </div>);

    return(
      <div className={classes.page_container}>
          <div className={classes.items_container}>
            {infoMap}
            <TextField
              className={classes.item_textField}
              type="text"
              label={`Введите сообщение`}
              variant="outlined"
              onChange={this.onChangeHandle}
              onKeyUp={this.handleInput}
            />
            <Button className={classes.sendMessage}
                    variant="contained"
                    color="primary"
                    onClick={this.sendMessage}>
                    Отправить
            </Button>
          </div>
      </div>
    )
  }


  private renderMessage = (item:any,classes:any) => {
    const timeStamp = formatDate(item.time);
    return (
      <div>
        <div className={classes.userName}>{item.userName}</div>
        <div className={classes.message}>{item.message}</div>
        <div className={classes.sms_time}>{timeStamp}</div>
      </div>
    )
  };


  private sendMessage = () => {
    this.state.inpValue = "";
  };



  private onChangeHandle = (e:any) => {
    this.setState({
      inpValue: e.target.value,
    });
  };

  private handleInput = (e:any) => {
    const inputValue = this.state.inpValue;
    if (e.keyCode === 13 && inputValue !== '') {
      this.sendMessage();
    }
  };
}


interface IMessagesDispatchToProps {
  onMount: () => void;
}


function mapStateToProps(state:any):IMessagesState {
  return {
    loading: state.messages.loading,
    data: state.messages.data,
    error: state.messages.error
  };
}

function mapDispatchToProps(dispatch:any):IMessagesDispatchToProps {
  return bindActionCreators({
    onMount: messages
  }, dispatch);
}


const MessageWithLoader = LoadingHoc(ChatSingle);

// @ts-ignore
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MessageWithLoader));


