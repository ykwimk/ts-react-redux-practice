import * as actions from './actions';
import { GithubProfile } from './../../api/github';
import { ActionType } from 'typesafe-actions';

export type GithubAction = ActionType<typeof actions>

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  }
}