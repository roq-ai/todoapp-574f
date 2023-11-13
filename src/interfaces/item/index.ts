import { ListInterface } from 'interfaces/list';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  list_id: string;
  description: string;
  status?: boolean;
  created_at?: any;
  updated_at?: any;

  list?: ListInterface;
  _count?: {};
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  list_id?: string;
  description?: string;
}
