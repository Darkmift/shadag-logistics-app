export interface ItemInList {
  id: string;
  name: string;
  category: string;
  subCategory: string;
}

export interface LineItem extends ItemInList {
  quantity: number;
  note: string;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  nationalId: string;
  isMeantForRequester: boolean;
  extraContactFullName: string;
  extraContactPhone: string;
  destinationAddress: string;
  streetNumber: string;
  apartmentNumber: string;
  city: string;
  commentsForDestinationAddress: string;
  items?: LineItem[];
  commentsForRequest: string;
  product: ItemInList[];
}
