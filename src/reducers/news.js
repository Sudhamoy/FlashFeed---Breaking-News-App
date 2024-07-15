import { FETCH_NEWS_SUCCESS, FETCH_NEWS_LOADING, FETCH_NEWS_FAILED } from "../actions/newsAction"

const initialState={
  loading:false,
  news:[],
  errorMsg:''
}


const reducer=(state=initialState , action)=>{

  switch(action.type){

    case FETCH_NEWS_LOADING:
      return{
        ...state,
        loading:true
      }
    case FETCH_NEWS_SUCCESS:
      return{
        ...state,
        news:[...action.payload],
        loading:false
      }
    case FETCH_NEWS_FAILED:
      return{
        ...state,
        errorMsg:action.payload,
        loading:false
      }
    
    default:
      return state
  }
}

export default reducer