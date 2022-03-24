import React from 'react';

const Pagination = (props) => {
  const { 
    links, 
    query, 
    perPageOptions, 
    from, 
    to, 
    total, 
    showPerPage, 
    justifyCenter, 
    onChangePerPage,
    onChangePage
  } = props;

  function changeFilterPerPage(perPageOption) {
    onChangePerPage(perPageOption); 
  }

  function changePage(mPage) {
    onChangePage(mPage);
  }

  function isPrev(link){
    return link.label === '&laquo; Previous' || link.label === '&laquo; Sebelumnya' || link.label === 'Previous';
  }

  function isNext(link){
    return link.label === 'Next &raquo;' || link.label === 'Berikutnya &raquo;' || link.label === 'Next';
  }

  return (
    <div
      className={`sm:flex-1 sm:flex sm:items-center my-6
      ${ justifyCenter ? 'sm:justify-center' : null }
      ${ !justifyCenter ? 'sm:justify-between' : null }`}>
      <div>
        { showPerPage &&
          <p className="text-sm leading-5 text-gray-600 flex">
            <span className="mr-2 my-auto">Per halaman : </span>
            { perPageOptions.map((perPageOption, index) => (
              <span
                key={ index }
                className={`font-medium cursor-pointer mx-2 block text-center p-1 rounded-md
                  ${query.per_page == perPageOption ? `bg-blue-500 text-white` : ``}
                  ${ index === 0 ? `ml-0` : ``}`}
                onClick={() => changeFilterPerPage(perPageOption) }>
                { perPageOption }
              </span>
            ))}
          </p>
        }
      </div>
      <ul className="flex justify-center lg:justify-end">
        { links.map((link, index) => (
          <li 
            key={ index }
            className="inline-block float-left ml-3 text-base">
            { isPrev(link) &&
              <span
                onClick={ () => changePage(1) }
                className="bg-blue-500 inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
            }
            { isNext(link) &&
              <span
                tabIndex="0"
                className="bg-blue-500 inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer"
                onClick={ () => changePage(index - 1) }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  /></svg
              ></span>
            }
            { !isPrev(link) && !isNext(link) &&
              <span
                className={`border border-gray-200 text-gray-500 font-bold hover:border-blue-500 hover:text-blue-500 
                  text-md inline-block flex items-center justify-center h-8 w-8 rounded-md cursor-pointer bg-white
                  ${ link.active ? 'bg-blue-500' : null }
                  ${ link.active ? 'text-white' : null }
                  ${ link.active ? 'hover:text-white' : null }`}
                onClick={ () => changePage(link.label) }
                >{ link.label }</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;