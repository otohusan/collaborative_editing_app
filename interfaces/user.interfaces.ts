import { Articles } from './articles.interfaces';

export interface User {
  id: number;
  user_name: string;
  hobby: string;
  articles?: Articles[];
  password?: string;
}
