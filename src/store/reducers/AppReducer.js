import { getFilteredImage } from "../../colorblind";

const initialState = {
  disease: "protanopia",
  size: 350,
  showImage: false
};

function filterOrImageChanged(type, image) {
  const filterName = "hcirn" + type;
  console.log("filterOrImageChanged: " + filterName);
  getFilteredImage(image, filterName, function(filteredImage, url) {
    console.log(url);
  });
}

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
    default:
      return state;
  }
};
