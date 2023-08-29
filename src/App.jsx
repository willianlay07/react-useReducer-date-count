import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };

    case "manual":
      return {
        ...state,
        count: action.payload,
      };

    case "step":
      return {
        ...state,
        step: action.payload,
      };

    default:
      return state;
  }
}

const initialValue = {
  count: 0,
  step: 1,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleIncre = () => {
    dispatch({
      type: "inc",
    });
  };

  const handleDecre = () => {
    dispatch({
      type: "dec",
    });
  };

  const handleManual = (e) => {
    dispatch({
      type: "manual",
      payload: Number(e.target.value),
    });
  };

  const handleStep = (e) => {
    dispatch({
      type: "step",
      payload: Number(e.target.value),
    });
  };

  return (
    <>
      <div className="w-[920px] mx-auto">
        <h1 className="text-3xl text-center font-bold py-3">Date Count</h1>

        <div className="w-[500px] mx-auto items-center justify-center text-center">
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={handleStep}
          />

          <p>Step {step}</p>
        </div>

        <div className="w-[500px] mx-auto grid grid-cols-4 py-5">
          <div className="text-center">
            <button
              onClick={handleDecre}
              className="bg-[#009ce1] text-white py-1 px-4 text-3xl rounded-md"
            >
              -
            </button>
          </div>
          <div className="col-span-2">
            <input
              type="text"
              className="w-[100%] py-2 text-center border-[1px] border-gray-700 rounded-md focus:outline-none"
              value={count}
              onChange={handleManual}
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleIncre}
              className="bg-[#009ce1] text-white py-1 px-4 text-3xl rounded-md"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-2xl py-3 text-center">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today is `}
          {date.toDateString()}
        </p>
      </div>
    </>
  );
};

export default App;
