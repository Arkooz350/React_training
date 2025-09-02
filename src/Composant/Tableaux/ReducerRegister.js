function ReducerRegister(state, action) {
  if (action.type === "userdata") {
    return {
      ...state,
      userdata: {
        dataClients: action.playload.userdata.dataClients,
      },
    };
  }
  if (action.type === "setResponseOFerver") {
    return {
      ...state,
      dataServeur: action.playload.dataServeur,
      isLoading: true,
    };
  }

  return state;
}
export default ReducerRegister;
