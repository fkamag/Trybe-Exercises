export const GET_IMAGE = "GET_IMAGE";
export const REQUEST_IMAGE = "REQUEST_IMAGE";
export const FAILED_REQUEST = "FAILED_REQUEST";

export const getImage = (json) => ({ type: GET_IMAGE, payload: json.message });

export const requestdog = (json) => ({ type: REQUEST_IMAGE });

export const failedRequest = (error) => ({ type: GET_IMAGE, payload: error });
