import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link
    data-testid="BackButton"
      href="/"
      className="dark:bg-darkBlueElement w-fit   hover:bg-[#24292F]/90 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center  dark:hover:bg-[#050708]/30 me-2 ml-6 mb-2 shadow-md z-20"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span className="ms-2">Back</span>
    </Link>
  );
};

export default BackButton;
