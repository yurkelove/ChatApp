import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IClasses from './IClasses';
import TextField from '@material-ui/core/TextField/TextField';
import {styles} from './styles/chatSingle_styles';

const info = [
  {
    userId : 1,
    userName : "Yura Kuzkin",
    message : "Привет меня зовут Юра,я пытаюсь сделать чат",
    time: "14:40"
  },
  {
    userId : 1,
    userName : "Yura Kuzkin",
    message : "Я думаю что я смогу это сделать",
    time: "20:40"
  },
  {
    userId : 2,
    userName : "Alex Ivanov",
    message : "Привет, Я Саша",
    time: "15:30"
  },
  {
    userId : 2,
    userName : "Alex Ivanov",
    message : "Я веб дизайнер",
    time: "18-00"
  }
];



@(withStyles as any)(styles)
export class ChatSingle extends React.Component<IClasses>{

  public render (){
    const {classes} = this.props;
    const userId = 1;
    const infoMap =  info.map(item =>
      <div>
        {item.userId === userId ?
          <div className={classes.rightUser}>
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
            />
          </div>
      </div>
    )
  }
}


export default ChatSingle;


// const addMessage = (e:any) => {
//   const inputValue = this.state.inputValue;
//   if(e.keyCode === 13 && inputValue !== ''){
//
//   }
// };





