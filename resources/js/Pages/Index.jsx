import React, { Fragment, useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import TableHeaderColumn from  '@/Components/Table/TableHeaderColumn';
import Pagination from  '@/Components/Table/Pagination';
import FilterPanel from  '@/Components/Table/FilterPanel';
import Search from  '@/Components/Table/Search';
import Confirm from  '@/Components/Modal/Confirm';

const Index = (props) => {
  const { title, resources, filters, params } = props;

  let query = {
    ...params,
    search: params.search || '',
    page: resources.current_page,
    per_page: resources.per_page,
    sort: params.sort || 'name',
    order: params.order || 'asc',
  }

  const [state, setState] = useState({ 
    showModal: false,
    selectedId: null
  });

  function rowNumber(index) {
    const newIndex = Number(index);
    return (
      Number(query.page) * Number(query.per_page) - Number(query.per_page) + 1 + newIndex
    );
  }

  function handleQueryChange() {
    Inertia.visit(window.location.pathname, {
      data: query,
      replace: true,
      preserveScroll: true,
      preserveState: true,
    });
  }

  function changePerPage(e) {
    query.per_page = e;
    handleQueryChange();
  }

  function changePage(e) {
    query.page = e;
    handleQueryChange();
  }
  
  function onSearch(e) {
    query.search = e
    handleQueryChange();
  }

  function sort(e) {
    query.sort = e.key
    query.order = e.order

    handleQueryChange();
  }

  function clear() {
    query = {
      search: null,
      page: query.page,
      per_page: query.per_page,
      sort: query.sort,
      order: query.order,
    }
    handleQueryChange();
  }

  function handleToggleModal(id = null) {
    setState({
      showModal: !state.showModal,
      selectedId: id
    })
  }

  function get(object, key) {
    return object[key] ?? null;
  }

  function setFilter(filter) {
    if (filter.value == null || filter.value == '') {
      // delete query[filter.key]
    } else {
      query[filter.key] = filter.value
    }
    handleQueryChange()
  }

  function clearFilter() {
    query = {
      search: query.search,
      page: query.page,
      per_page: query.per_page,
      sort: query.sort,
      order: query.order,
    }
    handleQueryChange();
  }

  function confirmModal() {
    Inertia.post(`/users/${state.selectedId}`, {
      _method: 'delete',
      preserveScroll: true,
      preserveState: true
    });
    handleToggleModal()
  }

	return (
		<main className="px-40 py-10">
      <Confirm 
        open={ state.showModal } 
        title="Delete User ?" 
        desc="Are you sure want to delete this user ?" 
        type="warning" 
        action="Delete" 
        onClose={() => handleToggleModal() }
        onConfirm={() => confirmModal()} />

      <h5 className="text-blue-700 mb-3">{ title }</h5>
      <div className="mb-6">
        <div className="mt-2 pt-0">
          <div className="flex justify-between flex-wrap sm:flex-no-wrap">
            <FilterPanel 
              filters={filters} 
              query={query}
              // onInput={(e) => setFilter(e)}
              // onClear={clearFilter()}
               />
              
            <div className="flex-grow ml-1">
              <Search value={ query.search } onInput={ (e) => onSearch(e) } />
            </div>
            <button
              className="bg-white text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600 focus:text-blue-600
                rounded mx-1 px-5 h-9 border border-gray-200"
              type="button"
              onClick={clear}
            >
              Reset
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 inline-block flex items-center
                h-9 px-2 rounded float-right text-white cursor-pointer"
              type="button"
              onClick={() => Inertia.visit('/users/create', { preserveState: true })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-visible">
        <table className="bg-white table-fixed shadow-md w-full rounded-lg text-base">
          <thead>
            <tr>
              <TableHeaderColumn 
                label={'No'}
                enableSorting={ false }
              />
              <TableHeaderColumn 
                label={'Nama'}
                enableSorting={true}
                sortingKey={'name'}
                querySort={ query.sort }
                queryOrder={ query.order }
                onSort={sort}
              />
              <TableHeaderColumn
                label={'Phone'}
                enableSorting={true}
                sortingKey={'phone'}
                querySort={ query.sort }
                queryOrder={ query.order }
                onSort={sort}
              />
              <TableHeaderColumn
                label={'Alamat'}
                enableSorting={true}
                sortingKey={'address'}
                querySort={ query.sort }
                queryOrder={ query.order }
                onSort={sort}
              />
              <TableHeaderColumn
                label={'Status'}
                enableSorting={true}
                sortingKey={'is_active'}
                querySort={ query.sort }
                queryOrder={ query.order }
                onSort={sort}
              />
              <TableHeaderColumn enableSorting={false} />
            </tr>
          </thead>
          <tbody>
            { resources.data.map((item, index) => (
              <tr
                key={item.id}
                className="bg-white lg:hover:bg-gray-100 mb-10 lg:mb-0 border-b border-gray-200"
              >
                <td className="px-3 cursor-pointer" onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true }) }>
                  { rowNumber(index) }
                </td>
                <td className="px-3 cursor-pointer" onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true }) }>
                  <div>{ item.name }</div>
                    <i className="text-gray-500 text-xs">{ item.email }</i>
                </td>
                <td className="px-3 cursor-pointer" onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true }) }>
                  { item.phone }
                </td>
                <td className="px-3 cursor-pointer" onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true }) }>
                  { item.address || "-" }
                </td>
                <td className="px-3 cursor-pointer" onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true }) }>
                  <div
                      className={
                        `rounded-md text-white text-sm px-2 mb-2 
                        ${item.is_active == 1 ? 'bg-blue-500' : 'bg-gray-500'}`}
                      >{ item.is_active_label }</div
                    >
                </td>
                <td
                  className="w-full lg:w-auto pl-3 pb-1 pr-3 pt-2 lg:p-3 text-center
                    block lg:table-cell relative lg:static">
                  <div className="flex justify-end mb-1">
                    <div
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-yellow-500
                        hover:bg-yellow-600
                        h-8
                        w-8
                        rounded-md
                        cursor-pointer
                      "
                      onClick={() => Inertia.visit(`/users/${item.id}`, { preserveState: true })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="fill-current text-white h-4 w-4"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    
                    <div
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-blue-600
                        hover:bg-blue-700
                        h-8
                        w-8
                        rounded-md
                        mx-1
                        cursor-pointer
                      "
                      onClick={() => Inertia.visit(`/users/${item.id}/edit`, {undefined, preserveState: true } )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="fill-current text-white h-4 w-4"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        />
                      </svg>
                    </div>
                    
                    <div
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-red-500
                        hover:bg-red-600
                        h-8
                        w-8
                        rounded-md
                        cursor-pointer
                      "
                      onClick={() => handleToggleModal(item.id) }
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="fill-current text-white h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 7C5.447 7 5 7 5 7V20C5 21.104 5.896 22 7 22H17C18.104 22 19 21.104 19 20V7C19 7 18.553 7 18 7H6ZM10 19H8V10H10V19ZM16 19H14V10H16V19ZM16.618 4L15 2H9L7.382 4H3V6H8H16H21V4H16.618Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
      
            {
              resources.data.length == 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-3">
                    <span className="text-gray-500 text-sm italic">Tidak ada data</span>
                  </td>
                </tr> ) : null
            }
          </tbody>
        </table>
      
        <Pagination
          links={ resources.links }
          total={ resources.total }
          perPageOptions={ [10, 20, 50, 100] }
          query={ query }
          onChangePerPage={ (e) => changePerPage(e) }
          onChangePage={ (e) => changePage(e) }
        />
      </div>
    </main>
	);
};

export default Index;
