import { useRouteError } from "react-router-dom";
import Header from "./components/Layout/Header";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div
        
        className=" font-Philosopher flex justify-center items-center text-blue-950 flex-col"
      >
        <Header />
        <h2 className='text-center font-Satisfy px-2 text-3xl mt-8'>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          You may call{" "}
          <strong>
            <b>Avom Brice</b>
          </strong>{" "}
          to come and handle it...{" "}
        </p>
        <p>
          <span>
            Error message:{" "}
            {error.status && (
              <i className="i-tag text-red-700"> {error.status}</i>
            )}{" "}
          </span>
          <i className="i-tag text-red-700">{error.statusText}</i>{" "}
          <i className="i-tag text-red-700">{error.Error}</i>
        </p>
      </div>
    </>
  );
}
