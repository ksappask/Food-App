import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something Wrong </h1>
      <h3>Status : {error.statusText}</h3>
    </div>
  );
};

export default Error;
