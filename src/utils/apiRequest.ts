import axios from "axios";
import { RequestPayload, RequestPayloadOptionsModified } from "types";

import { RequestMethods } from "types/enums";
import getApiUrl from "./getApiUrl";

const apiRequest = (data: RequestPayload, method = RequestMethods.POST) => {
  const ID = localStorage.getItem("rUserId");
  const options: RequestPayloadOptionsModified = {
    ...data.options,
    rUserId: ID || "none",
  };
  data.options = options;

  return axios({
    url: getApiUrl(),
    method,
    data,
  });
};

export default apiRequest;
