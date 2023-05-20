import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data && Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i}>
        <a onClick={() => handleClick(i)}>{i}</a>
      </li>
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data && data.slice(startIndex, endIndex);

  return (
    <div className="meetingsList">
      <div className="data">{
        currentData && currentData.map((item) => (
          console.log(item)
          ,
          <div className="meetingsList__item">
            <p>
              <span>{item.type}</span>
              <span className="span">
                {JSON.stringify(item.date).split("T")[0].split('"')[1]}
              </span>
              {item.name}
            </p>
          </div>
        ))
      }</div>
       <ul className="pagination">{pages}</ul>
    </div>
  );
};

export default Pagination;
