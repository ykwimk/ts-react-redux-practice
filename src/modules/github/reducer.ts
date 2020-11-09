import { GithubAction, GithubState } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_USER_PROFILE, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS } from './actions';

const initialState: GithubState = {
  userProfile: {
    loading: false,
    data: null,
    error: null
  }
}

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      data: null,
      error: null
    }
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      data: action.payload,
      error: null
    }
  }),
  [GET_USER_PROFILE_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      data: null,
      error: action.payload
    }
  })
})

export default github;