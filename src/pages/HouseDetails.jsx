import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { CiImageOn } from "react-icons/ci";
import { GetHouseById } from "../api/typicode";
import { IoLayersOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";


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
     <section className="house__details">
    {house && (
    <>
      {house.images?.[0] && (
        <figure className="house__details__hero">
          <img src={house.images[0].url} alt={house.images[0].name} />
        </figure>
      )}
        <section className="house__features flex justify-between" >
            <span>
                <p className="font-bold">{house.adress1}</p>
                <p className="font-bold">{house.city}</p>
            </span>
            <div className="flex">
                <CiImageOn />
                <IoLayersOutline />
                <CiLocationOn />
                <GrFavorite />
            </div>
            <span className="font-bold">Kr. {house.price}</span>
        </section>
    </>
     )}
</section>

    </>
  );
}
