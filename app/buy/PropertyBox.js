'use client'
import React from 'react';
import {Card, CardBody, CardFooter, Image, Chip, Link, Avatar, Divider} from "@nextui-org/react";

export default function PropertyBox() {
  const list = [
    {
      title: "Property 1",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
      view: "999",
      link: "buy_1",
      rea_name: "Agent Johnson",
      rea_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      on_sale: true,
    },
    {
      title: "Property 2",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
      view: "999",
      rea_name: "Jonny Wade",
      rea_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      on_sale: false,
    },
    {
      title: "Property 3",
      address: "123 Figuenrter Street, Gedasg, 1235",
      img: "https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912",
      type: "HDB",
      shortlist: "123",
      view: "999",
      rea_name: "John Witch",
      rea_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      on_sale: true,
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} as={Link} href={item.link} isPressable>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-fill h-[200px]"
              src={item.img}
            />
            <div className='flex w-full justify-between pt-2 pr-2'>
            <b className='pl-3 text-large'>{item.title}</b>
            <Chip color="default" variant="solid" className="text-default-1000">{item.type}</Chip>
            </div>
            <div className='flex w-full justify-start pl-3'>
              <span>{item.address}</span>
            </div>
            <div className='flex justify-start pr-3 pt-2'>
              <p className='text-start text-xs pl-3 pb-3'>{item.shortlist} <i className='bx bxs-bookmark-star'></i></p>
              <p className='text-start text-xs pl-3 pb-3'>{item.view} <i className='bx bx-show-alt'></i></p>
            </div>
          </CardBody>
          <Divider className="my-0" />
          <CardFooter className="pb-1 h-12 flex-row text-small place-content-start bg-brand-200 rounded-none">
            <Avatar src={item.rea_avatar}></Avatar>
            <p className='pl-3'>{item.rea_name}</p>
          </CardFooter>
          <div className=' flex w-full pb-3 bg-brand-200'>
              <div className='flex w-full justify-end pr-3'>
                <Chip className={item.on_sale==true ? " bg-success-300":" bg-red-500"}>{item.on_sale==true ? "On Sale":"Sold"}</Chip>
              </div>
            </div>
        </Card>
      ))}
    </div>
  );
}