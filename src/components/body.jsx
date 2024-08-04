import React, { useEffect, useInsertionEffect } from "react";
import "./body.css";
import "../index.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Popup from "reactjs-popup";
/*
{title:"",
desc:"",
progress:1,
date:""
}
 */

function Body() {
  const [data, setData] = useState({
    todo: [],
    inprogress: [],
    done: [],
  });

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
              d="M6.25 0.833374C6.75626 0.833374 7.16667 1.24378 7.16667 1.75004V2.66671H10.8333V1.75004C10.8333 1.24378 11.2437 0.833374 11.75 0.833374C12.2563 0.833374 12.6667 1.24378 12.6667 1.75004V2.66671H15.4167C16.4292 2.66671 17.25 3.48752 17.25 4.50004V16.4167C17.25 17.4292 16.4292 18.25 15.4167 18.25H2.58333C1.57081 18.25 0.75 17.4292 0.75 16.4167V4.50004C0.75 3.48752 1.57081 2.66671 2.58333 2.66671H5.33333V1.75004C5.33333 1.24378 5.74374 0.833374 6.25 0.833374ZM5.33333 4.50004H2.58333V7.25004H15.4167V4.50004H12.6667V5.
              41671C12.6667 5.92297 12.2563 6.33337 11.75 6.33337C11.2437 6.33337 10.8333 5.92297 10.8333 5.41671V4.50004H7.16667V5.41671C7.16667 5.92297 6.75626 6.33337 6.25 6.33337C5.74374 6.33337 5.33333 5.92297 5.33333 5.41671V4.50004ZM15.4167 9.08337H2.58333V16.4167H15.4167V9.08337Z"
              fill="gray"
            />
          </svg>

          <p>{Date(Date.now()).slice(3, 16)}</p>
        </div>
      </div>
      <div className=" body-x flex justify-center">
        <div className="body-card-container grid items-center gap-5 w-6/12 xl:w-9/12 xl:max-2xl:m-auto xl:grid-cols-2 xl:grid-rows-2  2xl:grid-cols-3 2xl:grid-rows-1">
          <Body_card_container
            title="To do"
            num={data.todo.length}
            data={data.todo}
            main={data}
            setData={setData}
          />
          <Body_card_container
            title="In progress"
            num={data.inprogress.length}
            data={data.inprogress}
            main={data}
            setData={setData}
          />
          <Body_card_container
            title="Done"
            num={data.done.length}
            data={data.done}
            main={data}
            setData={setData}
          />
        </div>
      </div>
    </div>
  );
}

function Body_card_container(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    let temp = JSON.parse(JSON.stringify(props.main));
    if (props.title == "Done") {
      let obj = {};
      obj.progress = "100%";
      obj.title = title;
      obj.desc = desc;
      temp.done.push(obj);
    } else if (props.title == "In progress") {
      let obj = {};
      obj.progress = "10%";
      obj.title = title;
      obj.desc = desc;
      temp.inprogress.push(obj);
    } else if (props.title == "To do") {
      let obj = {};
      obj.progress = "0%";
      obj.title = title;
      obj.desc = desc;
      temp.todo.push(obj);
    }

    props.setData(temp);
  };

  return (
    <div
      className="body-card pt-3 pb-2 rounded-xl pl-3 pr-3 grid gap-3 "
      style={{
        minWidth: "348px",
        background: "var(--card-container-clr)",
        height: "87vh",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <div className="body-card-head text-gray-500 flex justify-between w-full">
        <p className="text-lg" style={{ fontWeight: 600 }}>
          {props.title}
        </p>

        <Popup
          modal
          trigger={
            <div className="flex gap-1 items-center cursor-pointer">
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

              <h3
                className="text-base text-white"
                style={{ fontWeight: "700" }}
              >
                Add new task
              </h3>
            </div>
          }
          position="center center"
        >
          <div
            className=" z-10 rounded-2xl shadow-2xl absolute text-white p-14"
            style={{
              background: "var(--board-clr)",
              width: "50vw",
              height: "50vh",
              top: "50%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
            }}
          >
            <div className=" flex flex-col items-center h-full gap-14 relative">
              <div className="add-title flex gap-3 justify-between text-xl items-center w-full">
                <label htmlFor="title">
                  <p className="text-2xl">Title: </p>
                </label>
                <input
                  type="text"
                  id="title"
                  style={{
                    background: "rgb(37, 38, 43)",
                    outline: "none",
                    border: "1px solid white",
                  }}
                  className="rounded-xl px-3 py-2 w-4/6"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="add-desc flex gap-3 justify-between text-xl items-center w-full">
                <label htmlFor="desc">
                  <p className="text-2xl">Description: </p>
                </label>
                <input
                  type="text"
                  id="desc"
                  style={{
                    background: "rgb(37, 38, 43)",
                    outline: "none",
                    border: "1px solid white",
                  }}
                  className="rounded-xl px-3 py-2 w-4/6"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <button
                className="bg-white rounded-full text-xl p-2 w-60 absolute top-3/4"
                style={{ color: "var(--card-clr)", fontWeight: "700" }}
                onClick={add}
              >
                Submit
              </button>
            </div>
          </div>
        </Popup>
      </div>

      <div
        className="overflow-y-scroll h-full flex flex-col"
        style={{ scrollbarWidth: "none", gap: "1.5%" }}
      >
        {props.data.map((elem, index) => {
          return (
            <Body_card
              title={props.title}
              data={elem}
              main={props.main}
              index={index}
              setData={props.setData}
            />
          );
        })}
      </div>
    </div>
  );
}

function inc(props) {
  let temp = JSON.parse(JSON.stringify(props.main));
  console.log(temp);
  if (props.title == "In progress") {
    let res = parseInt(temp.inprogress[props.index].progress.slice(0, -1)) + 10;
    if (res > 100) {
      return;
    }
    temp.inprogress[props.index].progress = `${res}%`;

    if (res == 100) {
      temp.done.push(temp.inprogress[props.index]);
      temp.inprogress.splice(props.index, 1);
    }
  }
  if (props.title == "To do") {
    let res = parseInt(temp.todo[props.index].progress.slice(0, -1)) + 10;
    if (res > 100) {
      return;
    }
    temp.todo[props.index].progress = `${res}%`;

    if (res >= 10) {
      temp.inprogress.push(temp.todo[props.index]);
      temp.todo.splice(props.index, 1);
    }
  }
  console.log(temp);
  console.log(props.setData(temp));
}

function dec(props) {
  let temp = JSON.parse(JSON.stringify(props.main));
  console.log(temp);
  if (props.title == "In progress") {
    if (parseInt(temp.inprogress[props.index].progress.slice(0, -1)) - 10 < 0) {
      return;
    }
    let res = parseInt(temp.inprogress[props.index].progress.slice(0, -1)) - 10;
    temp.inprogress[props.index].progress = `${res}%`;

    if (res == 0) {
      temp.todo.push(temp.inprogress[props.index]);
      temp.inprogress.splice(props.index, 1);
    }
  }
  if (props.title == "Done") {
    if (parseInt(temp.done[props.index].progress.slice(0, -1)) - 10 < 0) {
      return;
    }
    let res = parseInt(temp.done[props.index].progress.slice(0, -1)) - 10;
    temp.done[props.index].progress = `${res}%`;

    if (res < 100) {
      temp.inprogress.push(temp.done[props.index]);
      temp.done.splice(props.index, 1);
    }
  }

  console.log(temp);
  console.log(props.setData(temp));
}

// alt approach for increaing and decreasing the progress bar
// function inc(props) {
//   const { main, title, index, setData } = props;

//   // Only proceed if the title is "In progress" and the index is valid
//   if (title === "In progress" && main.inprogress[index]) {
//     // Create a deep copy of the main object to avoid direct mutation
//     const updatedMain = {
//       ...main,
//       inprogress: main.inprogress.map((item, idx) =>
//         idx === index
//           ? {
//               ...item,
//               progress: `${parseInt(item.progress.slice(0, -1)) + 10}%`,
//             }
//           : item
//       ),
//     };

//     console.log("Before update:", main);
//     console.log("After update:", updatedMain);

//     // Use the setData function to update the state with the new object
//     setData(updatedMain);
//   }
// }

function Body_card(props) {
  return (
    <div
      className="body-card-content p-3 space-y-3 rounded-lg"
      style={{
        background: "var(--card-clr)",
        minHeight: "23%",
      }}
    >
      <div className="body-card-head">
        <div className="flex items-center justify-between pr-1">
          <h1 style={{ fontWeight: "600" }}>{props.data.title}</h1>
          <MdDelete style={{ transform: "scale(1.25)" }} />
        </div>
        <p className="text-sm text-gray-400">{props.data.desc}</p>
      </div>

      <div className="progres-sec flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/public/progressicon.svg" alt="" width="16px" />
            <p>Progress</p>
          </div>
          {console.log(props.data)}
          <p>{parseInt(props.data.progress.slice(0, -1)) / 10}/10</p>
        </div>
        <div
          className="bar rounded-full"
          style={{
            height: "5px",
            background: `linear-gradient(to right, rgb(120, 215, 0) 0, rgb(120, 215, 0) ${props.data.progress}, rgb(63,63,63) ${props.data.progress}, rgb(63,63,63) 100%)`,
          }}
        ></div>
      </div>

      <div className="body-card-bottom flex justify-between items-center">
        <div
          className="date-added text-gray-500 rounded-full text-sm p-2"
          style={{ fontWeight: "700", background: "var(--date-bg)" }}
        >
          {props.data.date}
        </div>
        {(() => {
          if (props.title == "In progress") {
            return (
              <div className="actions flex gap-4 items-center">
                <div
                  className="p-2 hover:bg-gray-600 rounded-full"
                  onClick={() => {
                    dec(props);
                  }}
                >
                  <FaMinus />
                </div>
                <div
                  className="p-2 hover:bg-gray-600 rounded-full"
                  onClick={() => {
                    inc(props);
                  }}
                >
                  <FaPlus />
                </div>
              </div>
            );
          } else if (props.title == "Done") {
            return (
              <div className="actions flex gap-4 items-center">
                <div
                  className="p-2 hover:bg-gray-600 rounded-full"
                  onClick={() => {
                    dec(props);
                  }}
                >
                  <FaMinus />
                </div>
              </div>
            );
          } else if (props.title == "To do") {
            return (
              <div className="actions flex gap-4 items-center">
                <div
                  className="p-2 hover:bg-gray-600 rounded-full"
                  onClick={() => {
                    inc(props);
                  }}
                >
                  <FaPlus />
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Body;
