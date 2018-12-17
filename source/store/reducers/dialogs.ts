export interface IDialogsState {
  data: object,
  loading: boolean,
  error: string,
}

const initialState:IDialogsState = {
  data: null,
  loading: false,
  error: null,
};

export const enum DIALOGS_ACTION_TYPE {
  LOADING = 'DIALOGS_LOADING',
  DATA = 'DIALOGS_DATA',
  FAILURE = 'DIALOGS_FAILURE'
}


export default function dialogs (state:IDialogsState = initialState,action:any)   {
  switch(action.type){
    case DIALOGS_ACTION_TYPE.LOADING:
      return {
        ...state,
        loading: true
      };
    case DIALOGS_ACTION_TYPE.DATA:
      return {
        loading:false,
        data: true,
        error: null
      };
    case DIALOGS_ACTION_TYPE.FAILURE:
      return {
        loading:false,
        data: false,
        error: action.error
      };
    default:
      return state
  }
}

