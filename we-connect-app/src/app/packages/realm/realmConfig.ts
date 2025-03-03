import {Realm} from '@realm/react';
import ChatsModel from '@models/Chats.model';
import CallsModel from '@models/Calls.model';

const realmConfig: Realm.Configuration = {
  schema: [ChatsModel, CallsModel],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: __DEV__,
};

export default realmConfig;
