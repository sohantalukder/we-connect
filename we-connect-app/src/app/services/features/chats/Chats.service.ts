import config from '@/config';
import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';
import {sleepHook} from '@helper/hooks/sleep.hook';
import dummyData from '@localData/dummyData';
import {dummyDataFormat} from '@localData/dummyDataFormat';
import {GETTING_PAYLOAD} from '@services/types';

class ChatsServicesClass {
  // :GET Chats list
  async getList(payload?: GETTING_PAYLOAD) {
    const {page, perPage} = payload || {
      page: 1,
      perPage: 10,
    };
    // for call for development version
    if (config.development) {
      // for sleep 2 seconds
      await sleepHook(() => {}, 2000);
      // read data from local data
      const object: IUnformattedAPIResponse<any> = {
        ...dummyData.Chats['chats/list'],
      };
      // format data and return
      return dummyDataFormat({
        ...object,
        data: object.data.splice(
          page === 1 ? 0 : page || 0 * (perPage || 10 + 1),
          perPage,
        ),
      });
    }
  }
}

const ChatsServices = new ChatsServicesClass();
export default ChatsServices;
