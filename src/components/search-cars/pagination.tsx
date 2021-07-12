import React from 'react';
import './search-cars.scss';
import {Button} from "react-bootstrap";

import {ISetPages} from "./search-cars";

interface PaginationProps {
  setPagesStatus: (cb: (prevProps: ISetPages) => ISetPages) => void;
  currentPage: number;
  totalPageCount: number;
}

function Pagination({
  currentPage,
  setPagesStatus,
  totalPageCount
}: PaginationProps) {

  const changeCurrentPage = (newPageNumber: number) => setPagesStatus((prevState: ISetPages) => ({
    ...prevState,
    currentPage: newPageNumber
  }));

  const getBtnClassName = (disabled: boolean) => `btn-link px-4${disabled ? " btn-link-disabled" : ""}`;

  return (
    <div className="text-center">

      <Button variant="link" className={getBtnClassName(currentPage === 1)} onClick={() => changeCurrentPage(1)}>First</Button>
      <Button variant="link" className={getBtnClassName(currentPage === 1)} onClick={() => changeCurrentPage(currentPage - 1)}>Previous</Button>
      <Button variant="link" className={getBtnClassName(true)}>Page {currentPage} of {totalPageCount}</Button>
      <Button variant="link" className={getBtnClassName(currentPage + 1 > totalPageCount)} onClick={() => changeCurrentPage(currentPage + 1)}>Next</Button>
      <Button variant="link" className={getBtnClassName(currentPage + 1 > totalPageCount)} onClick={() => changeCurrentPage(totalPageCount)}>Last</Button>

    </div>
  );
}

export default Pagination;
