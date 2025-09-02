function TaskReducer(state, action) {
  if (action.type === "Setemail") {
    return {
      ...state,
      inputemail: {
        email: action.playload.inputemail.email,
      },
    };
  }
  if (action.type === "Setpass") {
    return {
      ...state,
      inputpass: {
        pass: action.playload.inputpass.pass,
      },
    };
  }
  if (action.type === "saveres") {
    return {
      ...state,
      saveresponse: action.playload.saveresponse,
    };
  }
  return state;
}

export default TaskReducer;
