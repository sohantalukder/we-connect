interface IChat {
  id: string;
  name: string;
  message: string;
  date: string;
  image: string;
  seen: boolean;
  total_message_unseen: number;
}

export type {IChat};
