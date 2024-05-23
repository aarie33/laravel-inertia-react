import React from 'react';

const TableHeaderColumn = (props) => {
	
  const { label, enableSorting, sortingKey, querySort, queryOrder, classes, onSort } = props;

  function handleSort() {
    onSort({
      key: sortingKey, 
      order: queryOrder == 'desc' ? 'asc' : 'desc'
    });
  }

	return (
    <th
      className="p-3 lg:font-bold lg:uppercase lg:text-base lg:table-cell text-xs text-gray-400 border-b border-gray-300 {classes}"
    >
      <div
        className="flex item-center cursor-pointer"
        onClick={ handleSort }
      >
        {label}
        {enableSorting ? (
          <div className="ml-2 flex flex-col">
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              className={
                `fill-current stroke-current transform -rotate-90
                ${ querySort == sortingKey && queryOrder == 'desc' ? 'text-gray-900' : 'text-gray-300' }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.31595 5.5512C6.31523 5.67399 6.29017 5.79544 6.24219 5.90857C6.19422 6.0217 6.12428 6.12429 6.03638 6.21045L2.24317 9.89875C2.15475 9.98472 2.05018 10.0525 1.93543 10.0983C1.82068 10.144 1.698 10.1668 1.57439 10.1654C1.45078 10.1639 1.32866 10.1383 1.21501 10.0899C1.10136 10.0415 0.998397 9.97125 0.912005 9.88324C0.825613 9.79524 0.757482 9.69116 0.711503 9.57695C0.665523 9.46274 0.642596 9.34063 0.644029 9.21761C0.645462 9.09459 0.671227 8.97305 0.719854 8.85994C0.768481 8.74683 0.839018 8.64437 0.927436 8.5584L4.0661 5.52499L1.12091 2.4114C1.02602 2.32445 0.950176 2.21896 0.898116 2.10152C0.846056 1.98407 0.818903 1.8572 0.818355 1.72884C0.817806 1.60048 0.843874 1.47339 0.89493 1.35552C0.945985 1.23765 1.02093 1.13154 1.11507 1.04382C1.20922 0.956093 1.32054 0.888647 1.44207 0.845699C1.56361 0.802752 1.69274 0.785225 1.8214 0.794214C1.95005 0.803204 2.07547 0.838518 2.18979 0.897945C2.30412 0.957373 2.40489 1.03964 2.48582 1.13959L6.06086 4.9137C6.22415 5.08625 6.31536 5.31417 6.31595 5.5512Z"
              />
            </svg>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              className={
                `fill-current stroke-current transform rotate-90 
                ${querySort == sortingKey && queryOrder == 'asc' ? 'text-gray-900' : 'text-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.31595 5.5512C6.31523 5.67399 6.29017 5.79544 6.24219 5.90857C6.19422 6.0217 6.12428 6.12429 6.03638 6.21045L2.24317 9.89875C2.15475 9.98472 2.05018 10.0525 1.93543 10.0983C1.82068 10.144 1.698 10.1668 1.57439 10.1654C1.45078 10.1639 1.32866 10.1383 1.21501 10.0899C1.10136 10.0415 0.998397 9.97125 0.912005 9.88324C0.825613 9.79524 0.757482 9.69116 0.711503 9.57695C0.665523 9.46274 0.642596 9.34063 0.644029 9.21761C0.645462 9.09459 0.671227 8.97305 0.719854 8.85994C0.768481 8.74683 0.839018 8.64437 0.927436 8.5584L4.0661 5.52499L1.12091 2.4114C1.02602 2.32445 0.950176 2.21896 0.898116 2.10152C0.846056 1.98407 0.818903 1.8572 0.818355 1.72884C0.817806 1.60048 0.843874 1.47339 0.89493 1.35552C0.945985 1.23765 1.02093 1.13154 1.11507 1.04382C1.20922 0.956093 1.32054 0.888647 1.44207 0.845699C1.56361 0.802752 1.69274 0.785225 1.8214 0.794214C1.95005 0.803204 2.07547 0.838518 2.18979 0.897945C2.30412 0.957373 2.40489 1.03964 2.48582 1.13959L6.06086 4.9137C6.22415 5.08625 6.31536 5.31417 6.31595 5.5512Z"
              />
            </svg>
          </div>
        ): ''}
      </div>
    </th>
  );
}

export default TableHeaderColumn;
