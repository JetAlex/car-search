import React from 'react';
import './search-cars.scss';
import {Modal, Container, Row, Col, Button, Image} from "react-bootstrap";
import {Car} from "../../types/types";

interface ICarDetails {
  car?: Car;
  setCarDetails: () => void;
  addCar: () => void;
}

function CarDetails({car, setCarDetails, addCar}: ICarDetails) {
  return (
    <Modal show={!!car} onHide={setCarDetails} size="xl">
      {car && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{car.modelName}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col md={12} className="float-center">
                  <Image fluid src={car.pictureUrl} className="d-block mx-auto mb-4"/>
                </Col>
                <Col md={8}>
                  <p className="h2 mb-4">{car.modelName}</p>
                  <p className="h4 mb-4">Stock
                    #{car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</p>
                  <p>
                    This car is currently available and can be delivered as soon as
                    tomorrow morning. Please be aware that delivery times shown in
                    this page are not definitive and may change due to bad weather
                    conditions.
                  </p>
                </Col>
                <Col md={4}>
                  <div className="border p-4">
                    <p>
                      If you like this car, click the button and
                      save it in your collection of favourite
                      items.
                    </p>

                    <div className="clearfix">
                      <Button variant="primary" className="float-end px-5" onClick={addCar}>Save</Button>
                    </div>

                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default CarDetails;
