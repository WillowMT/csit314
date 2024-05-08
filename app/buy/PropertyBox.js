'use client'
import React from 'react';
import {Card, CardBody, CardFooter, Image, Chip, Link} from "@nextui-org/react";

export default function PropertyBox() {
  const list = [
    {
      title: "Property 1",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
      link: "buy_1",
    },
    {
      title: "Property 2",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 3",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 4",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 5",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 6",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 7",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
    {
      title: "Property 8",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} as={Link} href={item.link} isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-fill h-[200px]"
              src={item.img}
            />
            <div className='flex w-full justify-between'>
            <b className='pl-3 text-large'>{item.title}</b>
            <Chip color="warning" variant="solid" className="text-default-1000 right-2 top-12">{item.type}</Chip>
            </div>
          </CardBody>
          <CardFooter className="flex-col text-small place-items-start">
            <div className='flex w-full justify-start'>
              <span>{item.address}</span>
            </div>
            <p className='w-full text-start text-xs'>{item.shortlist} shortlist</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}