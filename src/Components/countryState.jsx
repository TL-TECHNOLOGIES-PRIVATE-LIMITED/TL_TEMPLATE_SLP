import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { FaMapLocation } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function CountryStates({
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity
  }) {

  

  useEffect(() => {
    if (selectedCountry) {
      console.log(selectedCountry);
      console.log(selectedCountry?.isoCode);
      console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    const country = Country.getAllCountries().find(
      (c) => c.name === event.target.value
    );
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (event) => {
    const state = State.getStatesOfCountry(selectedCountry?.isoCode).find(
      (s) => s.name === event.target.value
    );
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = (event) => {
    const city = City.getCitiesOfState(
      selectedState?.countryCode,
      selectedState?.isoCode
    ).find((c) => c.name === event.target.value);
    setSelectedCity(city);
  };

  return (
    <div className="flex w-fit flex-wrap justify-start text-xs font-sans  items-center md:gap-6 gap-2">
        <h6 className="text-sm  "><CiLocationOn/></h6>
        <div className="relative inline-block">
      <select
        onChange={handleCountryChange}
        className="w-[120px]  max-h-10 font-sans font-bold bg-stone-100 h-8 rounded-2xl outline-none px-4 bg-opacity-90 text-stone-950"
        value={selectedCountry?.name ||  ""}
      >
        <option value="" className="text-stone-950 w-fit">Select Country</option>
        {Country.getAllCountries().map((country) => (
          <option key={country.isoCode} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {/* Animation or Indicator */}
{
    !selectedCountry&&        <div className="p-1 bg-red-600 animate-pulse absolute top-0 right-0  rounded-full"></div>

}
    </div>

      {selectedCountry && (
        <select   className="w-[100px] font-bold max-h-10 font-sans  bg-stone-100 h-8 rounded-2xl outline-none px-4 bg-opacity-90  placeholder:text-opacity-90 placeholder:text-blue-400 -stone-800 text-stone-950" onChange={handleStateChange} value={selectedState?.name || ""}>
          <option value="">Select State</option>
          {State.getStatesOfCountry(selectedCountry.isoCode).map((state) => (
            <option key={state.isoCode} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      )}

      {selectedState && (
        <select   className="w-[100px] p-2  max-h-10 font-sans  font-bold bg-stone-100 h-8 rounded-2xl outline-none px-4 bg-opacity-90  placeholder:text-opacity-90 placeholder:text-blue-400 -stone-800 text-stone-950" onChange={handleCityChange} value={selectedCity?.name || ""}>
          <option value="">Select City</option>
          {City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode).map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
