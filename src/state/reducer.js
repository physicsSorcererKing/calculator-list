import Type from './type';
import { Theme } from 'util/const';

export const initState = {
  theme: Theme.LIGHT,
  results: [],
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Type.SWITCH_THEME:
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      return state;
    default:
      return state;
  }
};
