const INITIAL_STATE = {
  posts: null,
  currPage: '',
  pageNumber: 0,
  postsLength: null,
}

export function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURR_PAGE':
      // console.log('SET_CURR_PAGE', action.postsLength)
      return {
        ...state,
        currPage: action.page,
      }
    case 'SET_POSTS_LENGTH':
      // console.log('set posts', action.postsLength)
      return {
        ...state,
        postsLength: action.postsLength,
      }
    case 'SET_NEXT_PAGE':
      // console.log('SET_NEXT_PAGE', action.pageNumber)
      return {
        ...state,
        pageNumber: action.pageNumber,
      }
    case 'SET_POSTS':
      // console.log('SET_POSTS', action.posts)
      return {
        ...state,
        posts: [...action.posts],
      }
    case 'ADD_POSTS':
      // console.log('ADD_POSTS', ...action.posts)
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
      }
    default:
      return state
  }
}