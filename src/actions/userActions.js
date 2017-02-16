import * as types from './actionTypes';
import { userProps } from '../../test/factories/userFactories';

const users = userProps.users.users.users;

export function usersRequest() {
  return { type: types.USERS_REQUEST };
}

export function usersRequestSuccess(users) {
  return { type: types.USERS_REQUEST_SUCCESS, users };
}

export const fetchUsers = () => {
  return dispatch => {
    const res = { ok: true };
    dispatch(usersRequestSuccess(users));
  };
};
