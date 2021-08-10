/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import {
  ShoppingCartIcon,
  PhoneIcon,
  ViewListIcon,
  ClipboardListIcon
} from '@heroicons/react/solid';
import axios from 'axios';

interface Product {
  created_at: string;
  discount_details: string;
  id: string;
  image_url: string;
  link: string;
  new_price: string;
  old_price: string;
  title: string;
  updated_at: string;
  label: string;
  source: 'Lidl' | 'Marketin' | 'Mymarkket';
}

export const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://shop-like-abed.herokuapp.com/deals')
      .then(function (response) {
        console.log(response.data[0]);
        setProducts(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const formatUrl = (url: string, source: 'Lidl' | 'Marketin' | 'Mymarket') =>
    source === 'Marketin' ? 'https://www.market-in.gr/' + url : url;

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => (
        <li
          key={product.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200 ">
          <div className="flex-1 flex flex-col p-8 ">
            <a>
              <img
                className="w-3/4 flex-shrink-0 mx-auto bg-black rounded-md"
                src={formatUrl(product.image_url, product.source)}
                alt=""
              />
            </a>
            <h3 className="mt-6 text-gray-900 text-xl font-medium">{product.label}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-base">{product.title}</dd>
              <dt className="sr-only">Source</dt>
              <dd className="text-gray-500 text-base">{product.source}</dd>
              <dt className="sr-only">new price</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {product.new_price}
                </span>
              </dd>
              {product.old_price !== 'None' && (
                <>
                  <dt className="sr-only">old price</dt>
                  <dd className="mt-3">
                    <span className="px-2 py-1 text-red-800 text-xs font-medium line-through bg-red-100 rounded-full">
                      {product.old_price}
                    </span>
                  </dd>
                </>
              )}
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <button
                  type="button"
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <ShoppingCartIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Add to list</span>
                  <ClipboardListIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
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
  );
};
