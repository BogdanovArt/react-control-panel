import { setContentData, setTabData, setError } from ".";
import { AppThunk } from "..";

import { ActionTypes, EntityTypes } from "types/enums";
import { RequestPayloadOptions } from "types";

import apiRequest from "utils/apiRequest";

import { defaultError } from "utils/consts";

export const requestContentData = (
  options: RequestPayloadOptions,
  entity = EntityTypes.content,
  action = ActionTypes.get,
): AppThunk => async (dispatch) => {
  try {
    const res = await apiRequest({
      entity,
      action,
      options,
    });
    if (res.data?.data) {
      dispatch(setError(""));
      switch (entity) {
        case EntityTypes.content:
          dispatch(setContentData(res.data.data));
          dispatch(setTabData([]));
          break;
        case EntityTypes.tabs:
          dispatch(setTabData(res.data.data));
          break;
        default:
          break;
      }
    }
    if (!res.data?.success || !res.data?.data) {
      dispatch(setContentData([]));
      dispatch(setTabData([]));
      dispatch(setError(res.data?.error || defaultError));
    }
  } catch (error) {
    dispatch(setContentData([]));
    dispatch(setTabData([]));
    dispatch(setError(error.response?.data?.error || defaultError));
  }
};
