import * as api from "../api/index";

export const fetchData = () => async (dispatch) => {
  const { data } = await api.fetchdata();

  dispatch({
    type: "DATA",
    payload: data
  })
};
