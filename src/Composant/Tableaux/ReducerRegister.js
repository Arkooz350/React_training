function ReducerRegister(state, action) {
  if (action.type === "userdata") {
    return {
      ...state,
      userdata: action.playload.userdata,
    };
  }
  if (action.type === "setResponseOFerver") {
    return {
      ...state,
      dataServeur: action.playload.dataServeur,
      isLoading: true,
    };
  }
  if (action.type === "Checkpass") {
    return {
      ...state,
      BtnSubmit: true,
    };
  }

  return state;
}
export default ReducerRegister;
