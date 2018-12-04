export interface IRegistrationState {
  success: string,
  loading: boolean,
  error: string,
}

const initialState:IRegistrationState = {
  success: null,
  loading: false,
  error: null,
};


export const enum REGISTRATION_ACTION_TYPE {
  LOADING = 'REGISTRATION_LOADING',
  SUCCESS = 'REGISTRATION_SUCCESS',
  FAILURE = 'REGISTRATION_FAILURE'
}


export default function registration(state:IRegistrationState = initialState,action:any)   {
  switch(action.type){
    case REGISTRATION_ACTION_TYPE.LOADING:
      return {
        ...state,
        loading: true
      };
    case REGISTRATION_ACTION_TYPE.SUCCESS:
      return {
        loading:false,
        success: true,
        error: null
      };
    case REGISTRATION_ACTION_TYPE.FAILURE:
      return {
        loading:false,
        success: false,
        error: action.error
      };
    default:
      return state
  }
}

