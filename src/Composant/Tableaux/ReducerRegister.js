const ReducerRegister = (state, action) => {
  switch (action.type) {
    case "userdata":
      return {
        ...state,
        userdata: action.playload.userdata,
      };
    case "setResponseOFerver":
      return {
        ...state,
        dataServeur: action.playload.dataServeur,
        isLoading: true,
      };
    case "Checkpass":
      return {
        ...state,
        BtnSubmit: true,
      };
    case "city":
      return {
        ...state,
        city: action.payload.city,
      };
    case "car":
      return {
        ...state,
        car: action.payload.car,
      };
    case "ADD_TO_ARRAY":
      return {
        ...state,
        formDataArray: [...state.formDataArray, action.payload],
      };
    default:
      return state;
  }
};

export default ReducerRegister;
