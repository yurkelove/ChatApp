interface IRegistrationState {
  success: string,
  loading: boolean,
  error: string,
  type:string,
}

const initialState:IRegistrationState = {
  success: null,
  loading: false,
  error: null,
  type:''
};


export const enum REGISTRATION_ACTION_TYPE {
  LOADING = 'REGISTRATION_LOADING',
  SUCCESS = 'REGISTRATION_SUCCESS',
  FAILURE = 'REGISTRATION_FAILURE'
}


//передать из interface state :
export default function registration(state = initialState,action:IRegistrationState)   {
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

