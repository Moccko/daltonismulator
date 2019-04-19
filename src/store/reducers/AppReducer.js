const initialState = {
  disease: "normal",
  size: 350,
  showImage: false,
  diseaseImages: {
    normal: require("../../assets/images/normal.jpg"),
    protanopie: require("../../assets/images/protanopia.png"),
    protanomalie: require("../../assets/images/protanomaly.png"),
    deuteranopie: require("../../assets/images/deuteranopia.png"),
    deuteranomalie: require("../../assets/images/deuteranomaly.png"),
    tritanopie: require("../../assets/images/tritanopia.png"),
    tritanomalie: require("../../assets/images/tritanomaly.png"),
    achromatopsie: require("../../assets/images/achromatopsia.png"),
    achromatomalie: require("../../assets/images/achromatomaly.png")
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
      return { ...state, diseaseImages: action.value };
    default:
      return state;
  }
};
