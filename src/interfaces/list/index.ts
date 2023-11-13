import { ItemInterface } from 'interfaces/item';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ListInterface {
  id?: string;
  title: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  item?: ItemInterface[];
  organization?: OrganizationInterface;
  _count?: {
    item?: number;
  };
}

export interface ListGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  organization_id?: string;
}
