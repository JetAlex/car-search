import React from 'react';
import './search-cars.scss';
import {Container, Row, Col} from "react-bootstrap";
import {Car, Color, Manufacturer} from "../../types/types";
import CarItem from "./car-item";
import FilterForm from "./filter-form";
import {getAllCars, getAllColors, getAllManufacturers} from "../../utils/fetch";
import {getAllFavoriteCars, addFavoriteCar, removeFavoriteCar} from "../../utils/localStorage";
import Pagination from "./pagination";
import CarDetails from "./car-details";
import Footer from "../footer/footer";

export const DEFAULT_VALUE_ALL = "all";

export const FiltersDefaultValues = {
  colors: "All car colors",
  manufacturers: "All manufacturers"
};

export interface ISetPages {
  currentPage: number;
  totalCarsCount: number;
  totalPageCount: number;
  filterColor: string;
  filterManufacturer: string;

}

function SearchCars() {

  const [cars, setCars] = React.useState<Car[]>([]);
  const [{currentPage, filterColor, filterManufacturer, totalCarsCount, totalPageCount}, setPagesStatus] = React.useState<ISetPages>({
    currentPage: 1,
    totalCarsCount: 0,
    totalPageCount: 1,
    filterColor: "",
    filterManufacturer: ""
  });
  const [colors, setColors] = React.useState<Color[]>([]);
  const [manufacturers, setManufacturers] = React.useState<Manufacturer[]>([]);
  const [carDetails, setCarDetails] = React.useState<Car | undefined>(undefined);
  const [favoriteCars, setFavoriteCars] = React.useState<{
    [key: string]: Car
  }>(getAllFavoriteCars());

  const addCar = (car: Car) => setFavoriteCars(addFavoriteCar(car));
  const removeCar = (car: Car) => setFavoriteCars(removeFavoriteCar(car));


  React.useEffect(() => {
    getAllColors(setColors);
    getAllManufacturers(setManufacturers);
  }, []);

  React.useEffect(() => {
    getAllCars({
      currentPage,
      filterColor,
      filterManufacturer
    }).then(({cars, totalPageCount: pagesCont, totalCarsCount: carsCount}) => {
      setCars(cars);
      setPagesStatus((prevState) => ({
        ...prevState,
        totalCarsCount: carsCount,
        totalPageCount: pagesCont
      }))
    });
  }, [currentPage, filterColor, filterManufacturer]);

  return (
    <div className="m-search-cars">
      <Container className="px-4">
        <Row>
          <Col md={3}>
            <FilterForm
              setPagesStatus={setPagesStatus}
              colors={colors}
              manufacturers={manufacturers}
            />
          </Col>
          <Col md={9}>
            <h5>Available Cars</h5>
            <p>Showing {cars.length} of {totalCarsCount} results</p>
            {cars.map((carProps: Car) => (
              <CarItem
                key={carProps.stockNumber}
                {...carProps}
                showCarDetails={() => setCarDetails(carProps)}
                isFavorite={!!favoriteCars[carProps!.stockNumber]}
                addCar={() => addCar(carProps as Car)}
                removeCar={() => removeCar(carProps as Car)}
              />
            ))}

            <Pagination setPagesStatus={setPagesStatus} currentPage={currentPage} totalPageCount={totalPageCount}/>

          </Col>
        </Row>
      </Container>

      <CarDetails car={carDetails} setCarDetails={() => setCarDetails(undefined)}
                  addCar={() => addCar(carDetails as Car)}/>

      <Footer />
    </div>
  );
}

export default SearchCars;
