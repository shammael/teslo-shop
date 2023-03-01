export interface UIState {
  isMenuOpen: boolean;
}

type ActionType = { type: 'UI - ToggleMenuOpen' };

const UIReducer = (state: UIState, action: ActionType) => {
  switch (action.type) {
    case 'UI - ToggleMenuOpen':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};

export default UIReducer;
