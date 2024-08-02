import React from "react";
import "./body.css";
import "../index.css";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";
import { useState } from "react";

// let [data, setData] = useState([]);

function Body() {
  return (
    <div
      className="body w-8/12 ml-24 text-white overflow-y-scroll overflow-x-hidden"
      style={{}}
    >
      <div className="body-head flex justify-between h-20 mb-4 items-center">
        <h1 className="text-3xl" style={{ fontWeight: "700" }}>
          Welcome back, User
        </h1>
        <div className="date flex gap-3 items-center">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 0.833374C6.75626 0.833374 7.16667 1.24378 7.16667 1.75004V2.66671H10.8333V1.75004C10.8333 1.24378 11.2437 0.833374 11.75 0.833374C12.2563 0.833374 12.6667 1.24378 12.6667 1.75004V2.66671H15.4167C16.4292 2.66671 17.25 3.48752 17.25 4.50004V16.4167C17.25 17.4292 16.4292 18.25 15.4167 18.25H2.58333C1.57081 18.25 0.75 17.4292 0.75 16.4167V4.50004C0.75 3.48752 1.57081 2.66671 2.58333 2.66671H5.33333V1.75004C5.33333 1.24378 5.74374 0.833374 6.25 0.833374ZM5.33333 4.50004H2.58333V7.25004H15.4167V4.50004H12.6667V5.41671C12.6667 5.92297 12.2563 6.33337 11.75 6.33337C11.2437 6.33337 10.8333 5.92297 10.8333 5.41671V4.50004H7.16667V5.41671C7.16667 5.92297 6.75626 6.33337 6.25 6.33337C5.74374 6.33337 5.33333 5.92297 5.33333 5.41671V4.50004ZM15.4167 9.08337H2.58333V16.4167H15.4167V9.08337Z"
              fill="gray"
            />
          </svg>

          <p>{Date(Date.now()).slice(3, 16)}</p>
        </div>
      </div>
      <div className=" body-x flex justify-center">
        <div
          className="body-card-container grid items-center gap-5 w-6/12 xl:w-9/12 xl:max-2xl:m-auto xl:grid-cols-2 xl:grid-rows-2  2xl:grid-cols-3 2xl:grid-rows-1"
          style={{}}
        >
          <Body_card_container title="To do" num="4" />
          <Body_card_container title="In progress" num="4" />
          <Body_card_container title="Done" num="3" />
        </div>
      </div>
    </div>
  );
}

function Body_card_container(props) {
  return (
    <div
      className="body-card pt-3 rounded-xl pl-3 pr-3 grid gap-3 "
      style={{
        minWidth: "348px",
        background: "var(--card-container-clr)",
        height: "87vh",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <div className="body-card-head text-gray-500 flex justify-between w-full">
        <p className="text-base" style={{ fontWeight: 600 }}>
          {props.title}
        </p>
        <div className="p-2 rounded-full hover:bg-gray-600">
          <svg
            className="text-white"
            width="12"
            height="12"
            viewBox="0 0 10 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M9 5L1 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5 9L5 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>

      <div
        className="overflow-y-scroll h-full flex flex-col"
        style={{ scrollbarWidth: "none", gap: "1.5%" }}
      >
        {/* {console.log(props.num, typeof props.num)} */}

        {Array(parseInt(props.num)).fill(
          <Body_card title={props.title} data="" />
        )}
      </div>
    </div>
  );
}

function Body_card(props) {
  return (
    <div
      className="body-card-content p-3 space-y-3"
      style={{
        background: "var(--card-clr)",
        minHeight: "23%",
      }}
    >
      <div className="body-card-head">
        <h style={{ fontWeight: "600" }}>
          this is my title add props.title here
        </h>
        <p className="text-sm text-gray-400">this is the desc</p>
      </div>

      <div className="progres-sec flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/public/progressicon.svg" alt="" />
            <p>Progress</p>
          </div>
          <p>0//10</p>
        </div>
        <div
          className="bar h-1"
          style={{
            background:
              "linear-gradient(to right, green 0, green 50%, white 50%, white 100%)",
          }}
        ></div>
      </div>

      <div className="body-card-bottom flex justify-between items-center">
        <div
          className="date-added text-gray-500 rounded-full text-sm p-2"
          style={{ fontWeight: "700", background: "var(--date-bg)" }}
        >
          2 Aug 2024
        </div>
        {(() => {
          if (props.title != "To do") {
            return (
              <div className="actions flex gap-4 items-center">
                <div className="p-2 hover:bg-gray-600 rounded-full">
                  <LuMoveLeft />
                </div>
                <div className="p-2 hover:bg-gray-600 rounded-full">
                  <div>
                    <LuMoveRight />
                  </div>
                </div>
                {/* {add progress and done logo depending on which card-container it is} */}
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Body;
