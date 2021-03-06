export interface IAuthorizationState {
  success: string,
  loading: boolean,
  error: string,
}


const initialState:IAuthorizationState = {
  success: null,
  loading: false,
  error: null,
};


export const enum AUTHORIZATION_ACTION_TYPE {
  LOADING = 'AUTHORIZATION_LOADING',
  SUCCESS = 'AUTHORIZATION_SUCCESS',
  FAILURE = 'AUTHORIZATION_FAILURE'
}


export default function authorization(state:IAuthorizationState = initialState,action:any)   {
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
      // Если нечего не изменилось вернем стейт
    default:
      return state
  }
}

