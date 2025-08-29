import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router";

import { GetHouseById } from "../api/typicode";
import HouseDetailsHero from "./HouseDetails_components/HouseDetailsHero";
import HouseDetailsFeatures from "./HouseDetails_components/HouseDetailsFeatures";
import HouseDetailsDes from "./HouseDetails_components/HouseDetailsDes";
import ModalElm from "./HouseDetails_components/Modal";
import HouseCarousel from "./HouseDetails_components/HouseCarousel";
import HouseFloorPlant from "./HouseDetails_components/HouseFloorPlant";
import HouseLocation from "./HouseDetails_components/HouseLocation";

export default function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState({});

 const [modalShow, setModalShow] =useState(false)
 const location = useLocation()

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
    setModalShow={setModalShow}
    />

    <HouseDetailsDes
    house={house}
    />

    {modalShow && (
      <ModalElm
      setModalShow={setModalShow}
      >
         {location.pathname.includes("housecarousel") && <HouseCarousel 
         house={house}/>
         || location.pathname.includes('housefloorplant')&& <HouseFloorPlant
         house={house}/>||
         location.pathname.includes('houselocation') && <HouseLocation
         house={house}/>}
      
    </ModalElm>
  )}

   
    </>
  );
}
