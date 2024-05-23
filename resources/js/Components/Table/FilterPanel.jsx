import React from 'react';
import { useForm } from '@inertiajs/inertia-react'

const FilterPanel = (props) => {
  const {filters, query, onInput, onClear } = props;

  let show = false;
  let menu = null;
  let selected = {}
  let isFiltered = false;

  function filtered() {
    for (let i in filters) {
      let getFilter = get(query, filters[i].paramName);
      if (getFilter != null && getFilter != '') {
        selected[filters[i].paramName] = getFilter;
        return true;
      }
    }
    return false;
  }

  function checkFiltered() {
    for (let i in filters) {
      let getFilter = get(query, filters[i].paramName);
      // console.log('getFilter')
      // console.log(getFilter)
      if (getFilter != null) {
        isFiltered = true;
        return;
      }
    }
    isFiltered = false;
  }

  function get(object, key) {
    return object[key] ?? null;
  }

  // watch reactivity
  // $: query, filtered()
  // $: selected, query, checkFiltered()
  // $: console.log(isFiltered)
  // $: selected, console.log('selected')
  // $: selected, console.log(selected)
  // $: console.log(query);

  checkFiltered()

  const handleOutsideClick = (event) => {
    if (show && !menu.contains(event.target)) {
      show = false;
    }
  };

  const handleEscape = (event) => {
    if (show && event.key === 'Escape') {
      show = false;
    }
  };

  // // add events when element is added to the DOM
  // document.addEventListener('click', handleOutsideClick, false);
  // document.addEventListener('keyup', handleEscape, false);

  // // remove events when element is removed from the DOM
  // return () => {
  //   document.removeEventListener('click', handleOutsideClick, false);
  //   document.removeEventListener('keyup', handleEscape, false);
  // };

  function setFilter(paramName) {
    let filter = {
      key: paramName,
      value: selected[paramName]
    };
    onInput(filter);
	}

  function clear() {
    selected = {}
    isFiltered = false
    show=!show
    onClear()
  }

  return (
    <div className="relative">
      <div>
        <button
          onClick={() => (show = !show)}
          className={`bg-white focus:border-blue-500 focus:shadow-solid flex items-center justify-center 
            h-9 w-9 rounded border border-gray-200 hover:border-blue-500
          ${ isFiltered && `bg-blue-600` }
          ${ isFiltered && `text-white` }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>

        { show &&
          <div
            className="origin-top-left absolute left-0 w-48 p-2 mt-1 bg-white rounded shadow-lg border border-gray-200"
          >
            <div className="flex justify-end" hidden={!isFiltered}>
              <span className="cursor-pointer text-xs" onClick={() => clear() }>clear</span>
            </div>
            { filters.map((filter, index) => (
              <select 
                key={index}
                className="w-full p-2 mb-2 rounded border border-gray-200" 
                value={selected[filter.paramName]} 
                oChange={(e) => setFilter(filter.paramName) }
              >
                <option value="">{ filter.label }</option>
                { filter.options.map((option) => (
                  <option value={`${option.name}`}>{option.value}</option>
                ))}
              </select>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default FilterPanel;