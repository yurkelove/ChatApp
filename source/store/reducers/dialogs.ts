export interface IDialogsState {
  data: IItemDialogs[],
  loading: boolean,
  error: string,
}

const initialState:IDialogsState = {
  data: [],
  loading: false,
  error: null,
};

export const enum DIALOGS_ACTION_TYPE {
  LOADING = 'DIALOGS_LOADING',
  SUCCESS = 'DIALOGS_SUCESS',
  FAILURE = 'DIALOGS_FAILURE'
}

//interface для item-dialog , interface подставить в data-2 строка
export interface IItemDialogs  {
  id: string,
  unreadCount : string,
  lastMessage: string,
  dialogPic: string
}


export default function dialogs (state:IDialogsState = initialState,action:any)   {
  switch(action.type){
    case DIALOGS_ACTION_TYPE.LOADING:
      return {
        ...state,
        loading: true
      };
    case DIALOGS_ACTION_TYPE.SUCCESS:
      return {
        loading:false,
        data: action.payload.dialogs,
        error: null as any
      };
    case DIALOGS_ACTION_TYPE.FAILURE:
      return {
        loading:false,
        data: [],
        error: action.error
      };
    default:
      return state
  }
}

