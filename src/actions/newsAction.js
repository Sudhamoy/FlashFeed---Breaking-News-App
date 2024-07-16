import axios from 'axios'

export const FETCH_NEWS_LOADING="FETCH_NEWS_LOADING"
export const FETCH_NEWS_SUCCESS="FETCH_NEWS_SUCCESS"
export const FETCH_NEWS_FAILED="FETCH_NEWS_FAILED"

//Action creators:
export const fetchNewsLoading=()=>({
  type: FETCH_NEWS_LOADING,
})
export const fetchNewsSuccess=(news)=>({
  type: FETCH_NEWS_SUCCESS,
  payload:news
})
export const fetchNewsFailed=(errorMsg)=>({
  type: FETCH_NEWS_FAILED,
  payload:errorMsg
})

//Special action creator:
//Have seen this type of nested function in closures.
export const fetchNews=()=>{
  return async (dispatch)=>{
    try{
      dispatch(fetchNewsLoading());

      const res=await axios.get('/v2/everything?q=india&apiKey=daa379cf8e3b46e6a5d516707eea316f');

      const filteredNews=res.data.articles.filter(article => article.title !== '[Removed]' && article.author !== null)
      dispatch(fetchNewsSuccess(filteredNews));
    }
    catch(error){
      console.log('error');
      dispatch(fetchNewsFailed(error.errorMsg));
    }
  }
}

//Note : Here dispatching action creators through special action creators(here it is "fetchNews").



/* 
Note:
(1)
-We know that action creators only return object.
- For returning async function we use "redux-thunk".
- Redux Thunk:
  - External dependency
  - Create special creators which allow (action creators) to return async function also(not ony object)
  - Handle async requests.
  - Returned async function has a "dispatch" parameter.
  - Within this special action creators, other action creators can be dispatched.
  
  
  (2)What is happening in "fetchNews" action creator:
    -Before API calling : fetchNewsLoading()
    -After API calling, if successful : fetchNewsSuccess()
    -After API calling, if unsuccessful : fetchNewsFailed()
    
*/