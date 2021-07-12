import React, {useState} from 'react';
import { Button, Form} from "react-bootstrap";
import {Color, Manufacturer} from "../../types/types";
import {DEFAULT_VALUE_ALL, FiltersDefaultValues, ISetPages} from "./search-cars";

interface FilterFormProps {
  colors: Color[];
  manufacturers: Manufacturer[];
  setPagesStatus: (cb: (prevProps: ISetPages) => ISetPages) => void;
}

function FilterForm({colors, manufacturers, setPagesStatus}: FilterFormProps) {

  const [color, setColor] = useState(DEFAULT_VALUE_ALL);
  const [manufacturer, setManufacturer] = useState(DEFAULT_VALUE_ALL);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPagesStatus((prevProps) => ({
      ...prevProps,
      currentPage: 1,
      filterColor: color !== DEFAULT_VALUE_ALL ? color : "",
      filterManufacturer: manufacturer !== DEFAULT_VALUE_ALL ? manufacturer : "",
    }))
  };

  return (
    <Form className="border p-4 mb-4" onSubmit={onSubmit}>
      <Form.Group controlId="formGridColor" className="mb-3">
        <Form.Label className="mb-2">Color</Form.Label>
        <Form.Control as="select" defaultValue="All car colors" value={color} onChange={({target:{value}}) => setColor(value)}>
          <option value={DEFAULT_VALUE_ALL}>{FiltersDefaultValues.colors}</option>
          {colors.map((color) => <option key={color} value={color}>{color}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formGridManufacturer" className="mb-3">
        <Form.Label className="mb-2">Manufacturer</Form.Label>
        <Form.Control as="select" defaultValue="All manufacturers" value={manufacturer} onChange={({target:{value}}) => setManufacturer(value)}>
          <option value={DEFAULT_VALUE_ALL}>{FiltersDefaultValues.manufacturers}</option>
          {manufacturers.map(({name}) => <option key={name} value={name}>{name}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group className="clearfix">
        <Button variant="primary" type="submit" className="float-end px-5">
          Filter
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FilterForm;
