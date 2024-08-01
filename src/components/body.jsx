import React from "react";
import "./body.css";
import "../index.css";

function Body() {
  return (
    <div className="body w-full text-white">
      <div className="body-head flex justify-between w-8/12 m-auto h-20 mb-6 items-center">
        <h1 className="text-3xl" style={{ fontWeight: "700" }}>
          Welcome back, User
        </h1>
        <div className="date flex">
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

          <p>{Date.now()}</p>
        </div>
      </div>
      <div
        className="body-card-container grid w-8/12 m-auto items-center gap-5"
        style={{ gridTemplateColumns: "repeat(3,1fr)" }}
      >
        <Body_card_container title="To do" />
        <Body_card_container title="In progress" />
        <Body_card_container title="Done" />
      </div>
    </div>
  );
}

function Body_card_container(props) {
  return (
    <div
      className="body-card pt-5 rounded-xl pl-3 pr-3 grid gap-3"
      style={{
        background: "var(--card-container-clr)",
        height: "85vh",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <div className="body-card-head text-gray-500 flex justify-between w-full">
        <p className="text-lg" style={{ fontWeight: 600 }}>
          {props.title}
        </p>
        <div className="p-2 rounded-full hover:bg-gray-600">
          <svg
            className="text-white"
            width="15"
            height="15"
            viewBox="0 0 10 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M9 5L1 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M5 9L5 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
      </div>

      <div
        className="overflow-y-scroll h-full flex flex-col"
        style={{ scrollbarWidth: "none", gap: "2%" }}
      >
        <Body_card />
        <Body_card />
        <Body_card />
        <Body_card />
      </div>
    </div>
  );
}

function Body_card(props) {
  return (
    <div
      className="body-card-content p-3 space-y-2"
      style={{
        background: "var(--card-clr)",
        minHeight: "23%",
      }}
    >
      <div className="body-card-head">
        <h3>this is my title add props.title here</h3>
        <p>this is the desc</p>
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
    </div>
  );
}

export default Body;
