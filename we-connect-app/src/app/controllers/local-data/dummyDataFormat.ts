import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';

export const dummyDataFormat = <P>(response: IUnformattedAPIResponse<P>) => {
  const formatRes = {
    ...response,
    body: response.data,
    status: response.success,
  };
  return formatRes;
};
