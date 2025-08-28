import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { GetHouseById } from "../api/typicode";
import HouseDetailsHero from "./HouseDetails_components/HouseDetailsHero";
import HouseDetailsFeatures from "./HouseDetails_components/HouseDetailsFeatures";
import HouseDetailsDes from "./HouseDetails_components/HouseDetailsDes";


export default function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const data = await GetHouseById({ id });
        setHouse(data);
    };
    fetchData();
  }, [id]);

  console.log(house);
  

  return (
    <>
    <HouseDetailsHero
    house={house}
    />
    <HouseDetailsFeatures
    house={house}
    />

    <HouseDetailsDes
    house={house}
    />
   
    </>
  );
}
