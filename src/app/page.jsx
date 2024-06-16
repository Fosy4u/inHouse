import { Suspense } from "react";
import Countries from "./_homepage/_components/Countries";
import Loading from "./_components/Loading";

export default function Home() {
  return (
    <main data-testid="main" className="flex min-h-screen flex-col  justify-between p-10 sm:p-15 md:p-24 mt-20 sm:mt-8">
      
      <Suspense fallback={<Loading />}>
        
        <Countries />
      
      </Suspense>
    </main>
  );
}
