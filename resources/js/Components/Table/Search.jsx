import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react'

const Search = (props) => {
  const { value, onInput } = props;

  const { data, setData } = useForm({
    value: value,
  });

  useEffect(() => {
    if (value == '') {
      data.value = '';
    }

    console.log(data)
    console.log(value)
  }, [data, value]);

  function handleInput(val) {
    setData('value', val)

    setTimeout(() => {
      onInput(val);
    }, 300);
  }

  return (
    <div className="flex w-full h-9">
      <input
        value={ data.value }
        onChange={e => handleInput(e.target.value) }
        className="block form-input relative w-full focus:shadow-outline 
          h-9 px-2 rounded text-base border border-gray-200"
        type="text"
        name="search"
        placeholder="Search…"
      />
    </div>
  );
}

export default Search;
