import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Home from "../../page";
import Countries from "../_components/Countries";
import { getData } from "../../_api/getData";
import CountryCard from "../_components/CountryCard";
import CountryList from "../_components/CountryList";

const countries = [
  {
    name: { common: "Afghanistan" },
    capital: ["Kabul"],
    flags: {
      svg: "https://restcountries.com/data/afg.svg",
    },
    population: 27657145,
    region: "Asia",
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    cca3: "AFG",
  },
  {
    name: { common: "Åland Islands" },
    capital: ["Mariehamn"],
    flags: {
      svg: "https://restcountries.com/data/ala.svg",
    },
    population: 28875,
    region: "Europe",
    borders: [],
    cca3: "ALA",
  },
];
const country = countries[0];

jest.mock("../_components/Countries", () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="Countries">Countries</div>;
    },
  };
});
fetchMock.enableMocks();
//mock fetch function
fetchMock.mockResponse(JSON.stringify(countries));

describe("Home", () => {
  it("renders Home page without crashing", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("main")).toBeInTheDocument();
  });
  it("should render lazy loaded Countries component", async () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("Countries")).toBeInTheDocument();
  });
});

describe("Countries", () => {
  it("should render Countries component without crashing", async () => {
    const { getByTestId } = render(<Countries />);
    expect(getByTestId("Countries")).toBeInTheDocument();
  });
  it("should get countries data from getApi function", async () => {
    const data = await getData(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,borders,cca3"
    );
    expect(data).toEqual(countries);
  });
});

describe("CountryList", () => {
  it("should render CountryList component without crashing", async () => {
    const { getByTestId } = render(<CountryList countries={countries} />);
    expect(getByTestId("CountryList")).toBeInTheDocument();
  });
  it("should render a list of countries", async () => {
    render(<CountryList countries={countries} />);
    expect(screen.getByText("Afghanistan")).toBeInTheDocument();
    expect(screen.getByText("Åland Islands")).toBeInTheDocument();
  });
  // test search functionality
  it("should filter countries by search input", async () => {
    render(<CountryList countries={countries} />);
    const input = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(input, { target: { value: "Afghanistan" } });
    expect(screen.getByText("Afghanistan")).toBeInTheDocument();
    expect(screen.queryByText("Åland Islands")).not.toBeInTheDocument();
  });

  // test region filter functionality
  it("should filter countries by region", async () => {
    // set isOpen to true to show the region filter
    render(<CountryList countries={countries} />);
    const dropdown = screen.getByTestId("dropdown");
    fireEvent.click(dropdown);
    const select = screen.getByTestId("select");
    // select Europe region
    fireEvent.click(select.children[3]);
    expect(screen.getByText("Åland Islands")).toBeInTheDocument();
    expect(screen.queryByText("Afghanistan")).not.toBeInTheDocument();
  });
});

describe("CountryCard", () => {
  it("should render CountryCard component without crashing", async () => {
    const { getByTestId } = render(<CountryCard country={country} />);
    expect(getByTestId("CountryCard")).toBeInTheDocument();
  });
  it("should render country card with correct data", async () => {
    const population = 27657145;
    render(<CountryCard country={country} />);
    expect(screen.getByText("Afghanistan")).toBeInTheDocument();
    expect(screen.getByText("Kabul")).toBeInTheDocument();
    expect(screen.getByText(population.toLocaleString())).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();
  });
});
