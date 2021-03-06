import React, { Fragment, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm } from '@inertiajs/inertia-react';

const Detail = (props) => {
  const {title, errors, resource } = props;

  return (
    <main className="px-40 py-10">
      <h5 className="text-blue-700 mb-3">{ title }</h5>
      <div className="my-2 bg-white rounded shadow p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            { resource.avatar ?
              <img src={ resource.avatar_url } className="w-full rounded" alt={resource.name} />
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 mb-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            }
          </div>
          <div className="col-span-1">
            <div className="mb-2">
              <div className="text-xs text-gray-500">
                Name
              </div>
              <div className="text-sm">
                { resource.name || '-' }
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500">
                Email
              </div>
              <div className="text-sm">
                { resource.email || '-' }
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500">
                Phone
              </div>
              <div className="text-sm">
                { resource.phone || '-' }
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500">
                Gender
              </div>
              <div className="text-sm">
                { resource.gender || '-' }
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500">
                Address
              </div>
              <div className="text-sm">
                { resource.address || '-' }
              </div>
            </div>
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
              inline-flex
              items-center
              justify-center
              bg-blue-600
              hover:bg-blue-700
              h-9
              rounded-md
              mx-1
              px-4
              text-white
              cursor-pointer
            "
            onClick={() => Inertia.visit(`/users/${resource.id}/edit`, {undefined, preserveState: true } )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current text-white h-4 w-4">
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>

            Edit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Detail;
