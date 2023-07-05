import * as ActionConstants from '../../utils/ActionConstants';

const initialState = {
  userDetails: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.USER_DETAILS:
      return {...state, userDetails: action.payload};

    default:
      return state;
  }
};
