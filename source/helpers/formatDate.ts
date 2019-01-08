import * as moment from 'moment';

export default function formatDate (date:number) {
  const now = moment();
  const msgTime = moment(date);
  if(now.startOf('day').isSame(msgTime.startOf('day'))) {
    return moment(date).format( 'LT' );
  }else if(now.startOf('year').isSame(msgTime.startOf('year'))){
    return moment(date).format('MMMM Do');
  }else{
    return moment(date).format('MMMM Do YYYY');
  }
};
