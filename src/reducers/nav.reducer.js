import AppNavigator from '../navigators/AppNavigator';

// const initialState = AppNavigator.router.getStateForAction(
//   AppNavigator.router.getActionForPathAndParams('Auth')
// );
const initialState = null;

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
