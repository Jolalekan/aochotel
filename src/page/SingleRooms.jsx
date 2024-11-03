import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SingleRooms = () => {
  const { roomId } = useParams();
  const datePickerRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [adultCount, setAdultCount] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const maxTotal = 5;

  const handImageClick = () => {
    datePickerRef.current.setFocus();
  };
  const [activeImage, setActiveImage] = useState("/assets/hotel1.avif");

  const images = [
    {
      id: 1,
      src: "/assets/hotel1.avif",
    },
    {
      id: 2,
      src: "/assets/hotel2.avif",
    },
    {
      id: 3,
      src: "/assets/hotel3.avif",
    },
    {
      id: 4,
      src: "/assets/hotel4.avif",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-10 ">
        <div className="flex gap-6">
          {/* LEFT */}
          <div className="w-2/3 flex  flex-col gap-10">
            {/* TOP */}
            <div className="h-[500px] w-full ">
              <img
                src={activeImage}
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4">
              {images.map((image) => (
                <div
                  className="w-[180px] h-[180px] cursor-pointer hover:opacity-80"
                  onClick={() => setActiveImage(image.src)}
                  key={image.id}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* BOTTOM */}
          </div>

          <div className="w-1/3 bg-gray-800 rounded-xl py-4">
            <div className=" flex flex-col items-center gap-3 mb-2 border-b border-gray-700">
              <h3 className="font-medium text-[28px] text-center">
                DESCRIPTION
              </h3>
              <span className="text-[26px] font-medium">Executive Room</span>

              <p className="text-[36px] font-medium mb-4">
                # 72,0000 <span className="text-[16px]">/Night </span>
              </p>
            </div>
           
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col rounded-md ">
                <h3 className="font-medium text-center text-[20px] uppercase">
                  Arrival Date
                </h3>
                <div className="relative">
                  <div className="flex items-center relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      className="text-[20px] p-1 pl-10 w-full text-black bg-slate-400 rounded-md cursor-pointer focus:outline-none"
                    />
                    <img
                      src="/assets/calendar.png"
                      alt="calendar icon"
                      width={20}
                      height={20}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                      onClick={handImageClick}
                    />
                    <img
                      src="/assets/arrow-down.png"
                      alt="arrow icon"
                      width={20}
                      height={20}
                      className="absolute right-0 mx-3 top-1/2 transform -translate-y-1/2"
                      onClick={handImageClick}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-md ">
                <h3 className="font-medium text-center text-[20px] uppercase">
                  Arrival Date
                </h3>
                <div className="relative">
                  <div className="flex items-center relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      className="text-[20px] p-1 pl-10 w-full text-black bg-slate-400 rounded-md cursor-pointer focus:outline-none"
                    />
                    <img
                      src="/assets/calendar.png"
                      alt="calendar icon"
                      width={20}
                      height={20}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                      onClick={handImageClick}
                    />
                    <img
                      src="/assets/arrow-down.png"
                      alt="arrow icon"
                      width={20}
                      height={20}
                      className="absolute right-0 mx-3 top-1/2 transform -translate-y-1/2"
                      onClick={handImageClick}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col   items-center w-[270px]">
          <h3 className="font-medium text-center text-[20px] uppercase">
            ADULTS
          </h3>
          <div className="flex gap-6 bg-gray-400 w-full justify-between px-4 rounded-md text-black font-bold">
            <button
              className="text-[24px] font-medium"
              onClick={() =>
                setAdultCount(
                  adultCount < maxTotal ? adultCount + 1 : adultCount
                )
              }
              disabled={adultCount >= maxTotal}
            >
              +
            </button>
            <p className="text-[24px] font-medium">{adultCount}</p>

            <button
              className="text-[24px]"
              onClick={() => setAdultCount(adultCount > 1 ? adultCount - 1 : 1)}
            >
              -
            </button>
          </div>
        </div>

        <div className="flex flex-col   items-center w-[270px]">
          <h3 className="font-medium text-center text-[20px] uppercase">
            ROOMS
          </h3>

          <div className="flex gap-6 bg-gray-400 w-full justify-between px-4 rounded-md text-black font-bold">
            <button
              className="text-[24px]"
              onClick={() => setRooms(rooms < maxTotal ? rooms + 1 : 1)}
              disabled={rooms >= maxTotal}
            >
              +
            </button>
            <p className="text-[24px] font-medium">{rooms}</p>

            <button
              className="text-[24px]"
              onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
            >
              -
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-[270px]">
          <h3 className="font-medium text-center text-[20px] uppercase">
            CHILDREN
          </h3>
          <div className="flex gap-6 bg-gray-400 w-full justify-between px-4 rounded-md text-black font-bold">
            <button
              className="text-[24px]"
              onClick={() =>
                setChildrenCount(
                  childrenCount < maxTotal ? childrenCount + 1 : childrenCount
                )
              }
              disabled={childrenCount >= maxTotal}
            >
              +
            </button>

            <p className="text-[24px] font-medium">{childrenCount}</p>
            <button
              className="text-[24px]"
              onClick={() =>
                setChildrenCount(childrenCount > 0 ? childrenCount - 1 : 0)
              }
            >
              -
            </button>
          </div>
          </div>
              

              <button className="border  font-medium text-2xl bg-gray-400 w-[270px] py-4 rounded-md hover:opacity-85 ">BOOK NOW</button>
              
            </div>
          </div>
        </div>



        <div className="flex bg-gray-800 p-6">
          <div className="w-1/3 border-r border-gray-400">
          <h2 className="font-medium">Description</h2>
          </div>
              <div className="w-2/3">
                <div className="flex flex-col gap-6">
                  <h3>EXECUTIVE ROOM</h3>
                  <p>FEATURES</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat perspiciatis, saepe ipsa eaque velit quibusdam, quo mollitia suscipit laborum, et explicabo? Eaque veritatis esse placeat blanditiis ab quibusdam rem.</p>
                </div>
              </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleRooms;
