import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ options, value, label, onChange }) => {
  return (
    // <ReactDropDown
    //   options={options}
    //   value={value}
    //   placeholder={placeHolder}
    //   onChange={onChange}
    // />
    <div className="dropdown">
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={value}
          label={label}
          onChange={({ target }) => {
            onChange({ label: target.name, value: target.value });
          }}
        >
          {options.map((item) => (
            <MenuItem value={item.value} name={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
