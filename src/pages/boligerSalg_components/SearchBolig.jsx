import { GetAllHouses } from "../../api/typicode";
import { useState, useEffect } from "react";
import { Slider, Typography, Box } from "@mui/material";
import SectionHeader from "../../Components/header-components/SectionHeadder";
import HouseCard from "../Home_components/HouseCard";

export default function SearchBolig() {
  const [houses, setHouses] = useState([]);
  const [value, setValue] = useState([0, 12000000]);
  const [selectedType, setSelectedType] = useState("Ejendomstype");

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllHouses();
      setHouses(data);
    };
    fetchData();
  }, []);

  const houseTypes = [...new Set(houses.map((house) => house.type))];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <SectionHeader
      title="Søg efter dit drømmehus"
      subtitle="Find din perfekte bolig"
      style="section__header"
    />

      <section className="search__bolig flex justify-between items-center">
        <form className="search__house flex flex-col">
          <label htmlFor="houseType">
            Ejendomstype :
            <select
              id="houseType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option disabled>Ejendomstype</option>
              {houseTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </form>

     
        <div className="price__slider">
          <Box sx={{ width: 400, p: 1 }}>
            <Typography gutterBottom>Pris-interval</Typography>
            <Slider
              value={value}
              min={0}
              max={12000000}
              step={100000}
              onChange={handleChange}
              valueLabelDisplay="auto"
              sx={{
                color: "#D3DEE8", // active track color
                height: 6,
                "& .MuiSlider-thumb": {
                  width: 12,
                  height: 12,
                  backgroundColor: "#D3DEE8",
                  border: "1px solid lightgrey",
                },
                "& .MuiSlider-rail": {
                  opacity: 0.5,
                  backgroundColor: "#D3DEE8", // match your design
                },
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>{value[0].toLocaleString("da-DK")} kr.</Typography>
              <Typography>{value[1].toLocaleString("da-DK")} kr.</Typography>
            </Box>
          </Box>
        </div>
      </section>

      <section className="search__results">
        {houses
          .filter(
            (house) =>
              house.price >= value[0] &&
              house.price <= value[1] &&
              (selectedType === "Ejendomstype" || house.type === selectedType)
          )
          .map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
      </section>
    </>
  );
}
