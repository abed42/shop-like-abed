/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Carousel, Footer, Header, Navbar, ProductCard } from '../components';

const images = [
  'https://images.unsplash.com/photo-1624943233648-9cf5cc4ee471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=60',
  'https://images.unsplash.com/photo-1624160719218-33eb1081919c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1624762451499-33a0805d78df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1624764953628-9f1681e44892?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1622839144198-63bb83ab8722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
];

export default function Home() {
  const [imgArray, setImgArray] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgArray(imgArray === 4 ? 0 : imgArray + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [imgArray]);
  return (
    <div>
      <Head>
        <title>Shop like abed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      {/* <Carousel /> */}
      <div className="flex w-full">
        <div className=" flex space-x-5 px-28 py-20  ">
          <img
            src={images[imgArray]}
            alt="imgs"
            className=" object-contain h-64 rounded-md shadow-xl "
          />
          <img
            src={images[imgArray]}
            alt="imgs"
            className=" object-contain h-64 rounded-md shadow-xl "
          />
        </div>
      </div>
      <button type="button" onClick={() => setImgArray(imgArray === 4 ? 0 : imgArray + 1)}>
        {' '}
        next img
      </button>
      <div className="mx-28 my-20 ">
        <ProductCard />
      </div>
      <main></main>
      <Footer />
    </div>
  );
}
