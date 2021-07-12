import React from 'react';
import './search-cars.scss';
import { Row, Col,Button, Image} from "react-bootstrap";
import {Car} from "../../types/types";
import {ReactComponent as StarIcon} from "../../icons/star.svg";
import {ReactComponent as StarIconFilled} from "../../icons/star-filled.svg";

interface ICarItem extends Car {
  showCarDetails: () => void;
  isFavorite: boolean;
  addCar: () => void;
  removeCar: () => void;
}

function CarItem({
  addCar,
  color,
  stockNumber,
  modelName,
  mileage,
  fuelType,
  pictureUrl,
  removeCar,
  showCarDetails,
  isFavorite
}: ICarItem) {
  return (
    <Row className="border mb-3 mx-0">
      <Col sm={2} className="py-3 px-3">
        <div className="s-image-4x5">
          <Image fluid src={pictureUrl} className="s-car-pic" />
        </div>
      </Col>

      <Col sm={10} className="py-3 px-3">
        <h5 className="d-flex">
          {modelName}
          {isFavorite ? (
            <StarIconFilled className="s-star-icon s-star-icon--filled px-1" onClick={removeCar}/>
          ) : (
            <StarIcon className="s-star-icon px-1" onClick={addCar}/>
          )}

        </h5>
        <p>Stock #{stockNumber} - {mileage.number} {mileage.unit} - {fuelType} - {color}</p>
        <Button variant="link" className="p-0" onClick={showCarDetails}>View details</Button>
      </Col>
    </Row>
  );
}

export default CarItem;
