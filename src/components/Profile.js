import { useEffect, useState } from "react";

const ProfileFunctional = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    //2
    console.log("Use Effect ");

    const timer = setInterval(() => {
      console.log("Namste Set Interval Timer ");
    }, 1000);

    //3 (un mounting phase) after leaving current page, it will be called
    return () => {
      console.log("Use Effect Return ");

      clearInterval(timer);
    };
  }, []);

  //1
  console.log("Render ");

  return (
    <div>
      <h1>Profile Funtional</h1>
      <h2>Name : {props.name}</h2>
      <h2>Count1 : {count}</h2>
      <h2>Count 2 : {count2}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        SetCount Functional
      </button>
    </div>
  );
};

export default ProfileFunctional;
