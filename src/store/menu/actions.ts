import { setMenuData } from ".";
import { setError } from "../content";
import { AppThunk } from "..";

import { ActionTypes, EntityTypes } from "types/enums";

import apiRequest from "utils/apiRequest";

import { defaultError } from "utils/consts";

export const requestMenuData = (): AppThunk => async (dispatch) => {
  try {
    const res = await apiRequest({
      entity: EntityTypes.system_view,
      action: ActionTypes.left_menu,
      options: {},
    });
    if (res.data?.data) {
      dispatch(setMenuData(res.data.data));
    }
    
    if (!res.data?.success || !res.data?.data) {
      dispatch(setError(res.data?.error || defaultError));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.error || defaultError));
  }
};
