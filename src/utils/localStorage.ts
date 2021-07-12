import {Car} from "../types/types";


export const getAllFavoriteCars = () => {
  const favoriteCars = localStorage.getItem("favoriteCars") || "{}";
  return JSON.parse(favoriteCars);
};

export const addFavoriteCar = (car: Car) => {
  localStorage.setItem('favoriteCars', JSON.stringify({
    ...getAllFavoriteCars(),
    [car.stockNumber]: car
  }));

  return getAllFavoriteCars();
};

export const removeFavoriteCar = (car: Car) => {

  const {[car.stockNumber]: carToDelete, ...newObj} = getAllFavoriteCars();

  localStorage.setItem('favoriteCars', JSON.stringify(newObj));

  return getAllFavoriteCars();
};


