import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#69bac9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#69bac9"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loader;
