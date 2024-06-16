import { Suspense } from "react";
import CountryDetails from "../_components/CountryDetails";
import Loading from "../../_components/Loading";

const Detail = (props) => {
  const { country } = props.params;

  return (
    <main className="flex min-h-screen flex-col  justify-between p-10 sm:p-15 md:p-24 mt-20 sm:mt-8">
      <Suspense fallback={<Loading />}>
        <CountryDetails country={country} />
      </Suspense>
    </main>
  );
};

export default Detail;
