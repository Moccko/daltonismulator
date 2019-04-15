const initialState = {
  disease: "protanopia",
  size: 350,
  showImage: false,
  diseaseImages: {
    normal: require("../../assets/images/normal.jpg"),
    protanopia: require("../../assets/images/protanopia.png"),
    protanomaly: require("../../assets/images/protanomaly.png"),
    deuteranopia: require("../../assets/images/deuteranopia.png"),
    deuteranomaly: require("../../assets/images/deuteranomaly.png"),
    tritanopia: require("../../assets/images/tritanopia.png"),
    tritanomaly: require("../../assets/images/tritanomaly.png"),
    achromatopsia: require("../../assets/images/achromatopsia.png"),
    achromatomaly: require("../../assets/images/achromatomaly.png")
  }
};

export const DiseaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DISEASE":
      // filterOrImageChanged(action.value.disease, state.image);
      return { ...state, disease: action.value };
    case "UPDATE_IMAGE":
      // filterOrImageChanged(state.disease, action.value.image);
      return { ...state, image: action.value };
    case "UPDATE_EYE_SIZE":
      // filterOrImageChanged(state.disease, action.value.image);
      return { ...state, size: action.value };
    case "TOGGLE_IMAGE":
      // filterOrImageChanged(state.disease, action.value.image);
      return { ...state, showImage: action.value };
    case "UPLOAD_IMAGE":
      console.log(action.value);
      return { ...state, diseaseImages: action.value };
    default:
      return state;
  }
};
