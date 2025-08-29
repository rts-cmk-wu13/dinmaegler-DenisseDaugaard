export default function HouseFloorPlant({house}) {
    const floorPlant = house.floorplan?.url

    return (
        <>
       <img className="h-[30rem]" src={floorPlant} alt="house floorplant" />
        </>
    )
}