/* eslint-disable @next/next/no-img-element */

import React, {useEffect, useState} from 'react'
import { ShoppingCartIcon, PhoneIcon } from '@heroicons/react/solid'
import axios from 'axios';


interface Product{
created_at: string
discount_details: string
id: string
image_url: string
link: string
new_price: string
old_price: string
title: string
updated_at: string
}
const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  { name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },

]



export const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);

useEffect(()=> {
  axios.get('https://shop-like-abed.herokuapp.com/deals')
  .then(function (response) {
    // handle success
    console.log(response.data[0]);
    setProducts(response.data[0])
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


},[])
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <li
          key={product.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <a>
            <img className="w-3/4 flex-shrink-0 mx-auto bg-black rounded-md" src={`https://www.market-in.gr/${product.image_url}`} alt="" />
            </a>
            <h3 className="mt-6 text-gray-900 text-xl font-medium">Tesla</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-base">{product.title}</dd>
              <dt className="sr-only">new price</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {product.new_price}
                </span>
              </dd> 
              <dt className="sr-only">old price</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                  {product.old_price}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
              
                  <button type="button"
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"

                  >
                  <ShoppingCartIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Add to list</span>
                </button>
              </div>
              {/* <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}