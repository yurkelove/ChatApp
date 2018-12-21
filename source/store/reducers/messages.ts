export interface IMessagesState {
    data: IItemMessages[],
    loading: boolean,
    error: string,
  }

  const initialState:IMessagesState = {
    data: [],
    loading: false,
    error: null,
  };

  export const enum MESSAGES_ACTION_TYPE {
    LOADING = 'MESSAGES_LOADING',
    SUCCESS = 'MESSAGES_SUCESS',
    FAILURE = 'MESSAGES_FAILURE'
  }

  export interface IItemMessages  {
    userId: string,
    userName: string,
    message : string,
    time: string
  }


  export default function messages (state:IMessagesState = initialState,action:any)   {
    switch(action.type){
      case MESSAGES_ACTION_TYPE.LOADING:
        return {
          ...state,
          loading: true
        };
      case MESSAGES_ACTION_TYPE.SUCCESS:
        return {
          loading:false,
          data: action.payload.messages,
          error: null as any
        };
      case MESSAGES_ACTION_TYPE.FAILURE:
        return {
          loading:false,
          data: [],
          error: action.error
        };
      default:
        return state;
    }
  }

