import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import IClasses from './IClasses';
import {styles} from './styles/chatSingle_styles';
import {messages} from '../store/actions/messages';
import LoadingHoc from '../hoc/Loading';
import {IMessagesState,IItemMessages} from '../store/reducers/messages';
import Button from '@material-ui/core/Button/Button';


type IMessagesProps = IMessagesDispatchToProps & IMessagesState & Partial<IClasses>;

@(withStyles as any)(styles)
export class ChatSingle extends React.Component<IMessagesProps>{

  state = {
    inpValue: '',
  };

  public render (){
    const {classes} = this.props;
    const {data} = this.props;
    const userId = 1;
    const infoMap = data.map((item:any) =>
      <div>
        {item.userId === userId ?
          <div  className={classes.rightUser}>
            <div className={classes.userName}>{item.userName}</div>
            <div className={classes.message}>{item.message}</div>
            <div className={classes.sms_time}>{item.time}</div>
          </div>
          : <div className={classes.leftUser}>
              <div className={classes.userName}>{item.userName}</div>
              <div className={classes.message}>{item.message}</div>
              <div className={classes.sms_time}>{item.time}</div>
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

  private sendMessage = () => {
      console.log('OnClick');
  };

  private onChangeHandle = (e:any) => {
    this.setState({
      inpValue: e.target.value,
    });
  };

  private handleInput = (e:any) => {
    const inputValue = this.state.inpValue;
    if (e.keyCode === 13 && inputValue !== '') {
      console.log('Work');
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





