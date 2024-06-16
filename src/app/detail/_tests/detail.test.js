import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { getData } from "../../_api/getData";
import CountryDetails from "../_components/CountryDetails";
import Detail from "../[country]/page";
import BackButton from "../_components/BackButton";
import e from "express";
import CountryFlag from "../_components/CountryFlag";
import CountryProperties from "../_components/CountryProperties";
import Border from "../_components/Border";

const country = {
  name: {
    common: "Canada",
    nativeName: { official: "Canada", common: "Canada" },
  },
  capital: "Ottawa",
  flags: {
    svg: "https://restcountries.com/data/can.svg",
  },
  population: 36155487,
  region: "Americas",
  borders: ["USA"],
  cca3: "CAN",
  languages: {
    eng: "English",
    fra: "French",
  },
  currencies: {
    CAD: {
      name: "Canadian dollar",
    },
  },
};

jest.mock("../_components/CountryDetails", () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="CountryDetails">Country Detail</div>;
    },
  };
});

// mock lookup.byIsoCode function
jest.mock("country-code-lookup", () => {
  return {
    byIso: () => {
      return {
        country: "United States",
      };
    },
  };
});

fetchMock.enableMocks();
//mock fetch function
fetchMock.mockResponse(JSON.stringify(country));

// test details page
describe("Details", () => {
  it("should render Details component", async () => {
    const { getByTestId } = render(<Detail params={{ country: "CAN" }} />);
    expect(getByTestId("CountryDetails")).toBeInTheDocument();
  });
});

// test back button
describe("Back Button", () => {
  it("should render Back Button", async () => {
    const { getByTestId } = render(<BackButton />);
    expect(getByTestId("BackButton")).toBeInTheDocument();
  });
  it("should changes the page to homepage when clicked and have href", async () => {
    const {getByRole} = render(<BackButton />);
    
    const link = getByRole("link");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveTextContent("Back");
  });
});

// test country flag
describe("Country Flag", () => {
  it("should render Country Flag", async () => {
    const { getByTestId } = render(<CountryFlag flag={country.flags} />);
    expect(getByTestId("CountryFlag")).toBeInTheDocument();
  });
});

// test country properties
describe("Country Properties", () => {
  it("should render Country Properties", async () => {
    const { getByTestId } = render(<CountryProperties properties={country} />);
    expect(getByTestId("CountryProperties")).toBeInTheDocument();
  });
  it("should populate property fields with country data", async () => {
    render(<CountryProperties properties={country} />);
    expect(screen.getByText("Ottawa")).toBeInTheDocument();
    expect(screen.getByText("36,155,487")).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
  });
});

// test border component
describe("Border", () => {
  it("should render Border component", async () => {
    const { getByTestId } = render(<Border border="USA" />);
    expect(getByTestId("Border")).toBeInTheDocument();
  });
  it("Should have correct children and href'", async () => {
    const { getByRole } = render(<Border code="USA" />);
    const link = getByRole("link");
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "/detail/USA");
    expect(link).toHaveTextContent("United States");
  });
});
