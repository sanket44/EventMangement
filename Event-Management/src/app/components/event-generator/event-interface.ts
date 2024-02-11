// order.interface.ts
export interface Order {
  quantity: number; // Optional property
  typeofOrder: string;
  bookingDate: string;
  vendorId: number;
  flowerDetails: FlowerDetail[]; // Optional property for FLOWERS type
  companyName: string;
}

export interface FlowerDetail {
  flowerType: string;
  quantity: number;
}

export class EvenT {
  eventName: string = '';
  orders: Order[] = [];
}
