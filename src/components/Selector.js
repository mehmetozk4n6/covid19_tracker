import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  countriesSelector,
  fetchCountries,
  fetchCountry,
  fetchGlobal,
  changeCountry,
} from "../redux/covidSlice";

export default function BasicSelect() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);

  useEffect(() => {
    dispatch(fetchGlobal());
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    let val = event.target.value;
    let name = countries?.find((country) => country.iso2 === val).name;
    setSelectedCountry(val);
    dispatch(changeCountry(name));
    dispatch(fetchCountry(val));
  };

  return (
    <div className="selector">
      <Box sx={{ width: "50%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCountry}
            label="Country"
            onChange={handleChange}
          >
            {countries?.map((country, index) => (
              <MenuItem key={index} value={country.iso2}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
