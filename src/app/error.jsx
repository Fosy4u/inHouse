"use client";

export default function Error({ error, reset }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <h1 className="text-xl">Something went wrong!</h1>
      <button
        className=" mt-3 hover:bg-darkBlueElement hover:text-white hover:dark:bg-veryLightGrayBg hover:dark:text-veryDarkBlueText font-bold py-2 px-4 rounded dark:bg-darkBlueElement dark:text-white light:bg-veryLightGrayBg light:text-veryDarkBlueText shadow-2xl z-20"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
