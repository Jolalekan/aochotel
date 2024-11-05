import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Container from "./Container";
// import {useNavigate} from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    // const navigate = useNavigate()
    const arrivalDatePickerRef = useRef(null);
    const departedDatePickerRef = useRef(null);
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departedDate, setDepartedDate] = useState(new Date());
    const [adultCount, setAdultCount] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
  const maxTotal = 5;

  const handleArrivalImageClick = () => {
    arrivalDatePickerRef.current.setFocus();
  };

  const handleDepartedImageClick = () => {
    departedDatePickerRef.current.setFocus();
  };

  return (
    <Container>
      <div className=" rounded-md mt-4 gradient-bg py-10 lg:flex gap-6 items-center justify-center">
       {/* Arrival Date */}
      <div className="flex justify-center">
          <div className="flex items-center justify-center flex-col gap-4 p-6 rounded-md lg:w-48">
            <h3 className="font-medium text-center text-lg uppercase"> Arrival Date </h3>
            <div className="flex justify-center items-center lg:w-48">
              <DatePicker
                ref={arrivalDatePickerRef}
                selected={arrivalDate}
                onChange={(date) => setArrivalDate(date)}
                className="text-center text-lg p-2 w-full bg-transparent cursor-pointer focus:outline-none"
              />
              <img
                src="assets/calendar.png"
                alt="calendar icon"
                width={20}
                height={20}
                className=" cursor-pointer"
                onClick={handleArrivalImageClick}
              />
            </div>
          </div>
        </div>


 {/* Departed Date */}
 <div className="flex flex-col gap-4 p-6 rounded-md">
          <h3 className="font-medium text-center text-lg uppercase"> Departed Date </h3>
          <div className="flex justify-center items-center lg:w-48">
            <DatePicker
              ref={departedDatePickerRef}
              selected={departedDate}
              onChange={(date) => setDepartedDate(date)}
              className="text-center text-lg p-2 w-full bg-transparent cursor-pointer focus:outline-none"
            />
            <img

              src="assets/calendar.png"
              alt="calendar icon"
              width={20}
              height={20}
              className=" cursor-pointer"
              onClick={handleDepartedImageClick}
            />
          </div>
        </div>

        <div className="flex flex-col  p-4 items-center lg:w-48">
          <h3 className="font-medium text-center text-[20px] uppercase">
            ADULTS
          </h3>
          <div className="flex gap-6 p-2">
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

        <div className="flex flex-col  p-4 items-center lg:w-48">
          <h3 className="font-medium text-center text-[20px] uppercase">
            ROOMS
          </h3>

          <div className="flex gap-6 p-2">
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
        <div className="flex flex-col  p-4 items-center lg:w-48">
          <h3 className="font-medium text-center text-[20px] uppercase">
            CHILDREN
          </h3>
          <div className="flex gap-6 p-2">
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
        <div className="flex flex-col  p-4 items-center lg:w-48">
          <button className="hover:opacity-75 bg-black rounded-md font-medium text-center text-[20px] uppercase py-6 px-3">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
