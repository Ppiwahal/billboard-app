import UsState from "../data/usStates.json";
import CnState from "../data/cnProvinces.json";
import MxState from "../data/mxStates.json";
import BranchList from "../data/locations.json";

export const getCountry = () => {
  return [
    {
      label: "Maxico",
      value: "mx",
    },
    {
      label: "United States",
      value: "us",
    },
    {
      label: "Canada",
      value: "cn",
    },
  ];
};

export const getStates = (countryCode) => {
  switch (countryCode) {
    case "us":
      return UsState.map(({ ABBR, NAME }) => {
        return { value: ABBR, label: NAME };
      });
    case "cn":
      return CnState.map(({ ABBR, NAME }) => {
        return { value: ABBR, label: NAME };
      });
    case "mx":
      return MxState.map(({ ABBR, NAME }) => {
        return { value: ABBR, label: NAME };
      });
    default:
      return null;
  }
};

export const getBranchList = (stateCode) => {
  return BranchList.filter((item) => item.state === stateCode);
};
