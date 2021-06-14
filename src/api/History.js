import constants_api, { httpMethod } from "constants/constants_api";
import request from "./Request";

const HistoryService = {
  postHistoryData: (data) => {
    const host = constants_api.api_url;
    const path = constants_api.send_history;

    return request({
      url: `${host}${path}`,
      method: httpMethod.post,
      data: data,
    });
  },
};

export default HistoryService;
