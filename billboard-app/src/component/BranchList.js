import DropDown from "./common/DropDown";
import BranchItem from "./BranchItem";
import { getCountry, getStates, getBranchList } from "../utils/Helper";
import { useEffect, useState } from "react";
import BranchTime from "./BranchTime";

const BranchList = (props) => {
  const [country, setCountry] = useState();
  const [stateList, setStateList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [state, setState] = useState();
  const [selItem, setSelItem] = useState();

  useEffect(() => {
    country && setStateList(getStates(country.value));
  }, [country]);

  useEffect(() => {
    state && setBranchList(getBranchList(state.value));
  }, [state]);

  return (
    <div className="container">
      <div className="sub-container">
        <DropDown
          className="dropdown"
          options={getCountry()}
          label="Select country"
          value={country}
          onChange={(value) => setCountry(value)}
        />

        <DropDown
          options={stateList}
          label="Select state"
          value={state}
          onChange={(value) => setState(value)}
        />

        {branchList?.length ? (
          <div className="branch-list">
            {branchList.map((item) => (
              <BranchItem
                item={item}
                onClick={() => {
                  setSelItem(item);
                }}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="sub-container">
        {selItem && <BranchTime times={selItem.openCloseTimes} />}
      </div>
    </div>
  );
};

export default BranchList;
