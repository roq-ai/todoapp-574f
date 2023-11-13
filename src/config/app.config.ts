interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Viewer'],
  tenantName: 'Organization',
  applicationName: 'Todoapp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage items', 'Manage lists', 'Manage users', 'Manage organizations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/81d7a7e0-a5cb-428e-95ec-39634f247d81',
};
