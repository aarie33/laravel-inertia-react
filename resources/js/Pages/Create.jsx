import React, { Fragment, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react'
import { useForm } from '@inertiajs/inertia-react'
import ImageInput from '@/Components/Fields/ImageInput';

const Create = (props) => {
  const {title, errors } = props;

  const { data, setData, post, progress } = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    avatar: ''
  })
  
  function submit() {
    post('/users')
  }

  return (
    <main className="px-40 py-10">
      <h5 className="text-blue-700 mb-3">{ title }</h5>
      <div className="my-2 bg-white rounded shadow p-4">
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="col-span-1">
            Name
            <input 
              type="text" 
              className="border border-gray-200 h-9 rounded w-full px-2" 
              value={ data.name } 
              onChange={e => setData('name', e.target.value)}
              placeholder="Name" />
            {errors.name ? <div className="text-xs text-red-500">{errors.name}</div> : null}

            <div className="mt-2">Email</div> 
            <input 
              type="email" 
              className="border border-gray-200 h-9 rounded w-full px-2" 
              value={ data.email } 
              onChange={e => setData('email', e.target.value)}
              placeholder="Email" />
            {errors.email ? <div className="text-xs text-red-500">{errors.email}</div> : null }
            
            <div className="mt-2">Phone</div>
            <input 
              type="phone" 
              className="border border-gray-200 h-9 rounded w-full px-2" 
              value={ data.phone } 
              onChange={e => setData('phone', e.target.value)}
              placeholder="Phone" />
            {errors.phone ? <div className="text-xs text-red-500">{errors.phone}</div> : null }

            <div className="mt-2">Address</div>
            <textarea 
              value={ data.address }
              onChange={e => setData('address', e.target.value)}
              className="border border-gray-200 w-full rounded px-2 py-1" 
              rows="7"></textarea>
            {errors.address ? <div className="text-xs text-red-500">{errors.address}</div> : null }
          </div>
          <div className="col-span-1">
            Gender
            <select 
              value={ data.gender }
              onChange={e => setData('gender', e.target.value)}
              className="border border-gray-200 h-9 rounded w-full px-2">
              <option value="">Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {errors.gender ? <div className="text-xs text-red-500">{errors.gender}</div> : null }
            <div className="mt-2"></div>
            <ImageInput onInput={ (e) => setData('avatar', e) } />
            {errors.avatar ? <div className="text-xs text-red-500">{errors.avatar}</div> : null }
          </div>
        </div>

        <div className="flex justify-end w-full">
          <Link
            href="/users">
            <button
              className="
                bg-white
                hover:bg-blue-50
                inline-block
                flex
                items-center
                h-9
                px-4
                rounded
                float-right
                cursor-pointer
                border border-gray-200
              "
              type="button"
            >
              Kembali
            </button>
          </Link>

          <button
            className="
              bg-blue-600
              hover:bg-blue-700
              inline-block
              flex
              items-center
              h-9
              px-4
              rounded
              float-right
              cursor-pointer
              ml-2
              text-white
            "
            onClick={ submit }
          >
            { progress ?
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            : '' }
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Create;
