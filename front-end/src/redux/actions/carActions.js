import axios from "axios";
export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LADING", payload: true });
  try {
    const response = await axios.get(`/api/cars/getallcars`);
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LADING", payload: false });
  }
};
