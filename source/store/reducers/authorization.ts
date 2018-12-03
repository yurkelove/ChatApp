interface IAuthorizationState {
  success: string,
  loading: boolean,
  error: string,
  type:string,
}


const initialState:IAuthorizationState = { //передать из interface
  success: null,
  loading: false,
  error: null,
  type:''
};


export const enum AUTHORIZATION_ACTION_TYPE {
  LOADING = 'AUTHORIZATION_LOADING',
  SUCCESS = 'AUTHORIZATION_SUCCESS',
  FAILURE = 'AUTHORIZATION_FAILURE'
}


export default function authorization(state = initialState,action:IAuthorizationState)   {
  switch(action.type){
    case AUTHORIZATION_ACTION_TYPE.LOADING:
      return {
        ...state,
        loading: true
      };
    case AUTHORIZATION_ACTION_TYPE.SUCCESS:
      return {
        loading:false,
        success: true,
        error: null
      };
    case AUTHORIZATION_ACTION_TYPE.FAILURE:
      return {
        loading:false,
        success: false,
        error: action.error
      };
    default:
      return state
  }
}

