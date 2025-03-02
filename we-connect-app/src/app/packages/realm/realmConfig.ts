import {Realm} from '@realm/react';
import ChatsModel from '@models/Chats.model';
import CallsModel from '@models/Calls.model';
const realmConfig: Realm.Configuration = {
  // add your schema
  schema: [ChatsModel, CallsModel],
};

export default realmConfig;
