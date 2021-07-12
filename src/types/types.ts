export type Unit = "km" | "mi";

export type Fuel = "Diesel" | "Petrol";


export type Color = string;

export type Manufacturer = {
  name: string;
  models: Array<{
    name: string;
  }>;
}

export type Car = {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: {
    number: number;
    unit: Unit;
  };
  fuelType: Fuel;
  color: string;
  pictureUrl: string;
}

export interface CarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export interface ColorsResponse {
  colors: Color[];
}

export interface ManufacturersResponse {
  manufacturers: Manufacturer[]
}

