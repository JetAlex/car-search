import {CarsResponse, Color, ColorsResponse, Manufacturer, ManufacturersResponse} from "../types/types";

const API_URL = "https://auto1-mock-server.herokuapp.com/api";

interface GetAllCars {
  currentPage: number;
  filterColor: string;
  filterManufacturer: string;
}

export const getAllCars = ({currentPage, filterColor, filterManufacturer}: GetAllCars) =>
  fetch(`${API_URL}/cars?${new URLSearchParams([
    ["page", `${currentPage}`],
    ["color", `${filterColor}`],
    ["manufacturer", `${filterManufacturer}`]
  ])}`).then(res => res.json()).then(({cars, totalPageCount, totalCarsCount}: CarsResponse) => (
    {
      cars,
      totalCarsCount,
      totalPageCount
    }
  ));

export const getAllColors = (cb: (colors: Color[]) => void) => {
  fetch(`${API_URL}/colors`).then(res => res.json()).then(({colors}: ColorsResponse) => cb(colors))
};

export const getAllManufacturers = (cb: (manufacturers: Manufacturer[]) => void) => {
  fetch(`${API_URL}/manufacturers`).then(res => res.json()).then(({manufacturers}: ManufacturersResponse) => cb(manufacturers))
};
