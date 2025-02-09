import {Realm} from '@realm/react';
import ChatsModel from '@models/Collections.model';
const realmConfig: Realm.Configuration = {
  // add your schema
  schema: [ChatsModel],
};

export default realmConfig;
