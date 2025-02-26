import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import ChatDetails from '@modules/chats/features/chat-details/ChatDetails';

const chatRoutes: Array<RouteProps> = [
  {
    accessLabel: 0,
    component: ChatDetails as any,
    isHide: false,
    name: screens.chatDetails,
  },
];

export default chatRoutes;
