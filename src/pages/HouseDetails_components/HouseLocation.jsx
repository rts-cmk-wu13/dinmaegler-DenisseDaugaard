export default function HouseLocation({house}) {


    const houseLocationLat = house.images?.lat
    const houseLocationLng = house.images?.long
    console.log(houseLocationLat, houseLocationLng);
    
    const mapUrl = `https://maps.google.com/maps?q=${houseLocationLat},${houseLocationLng}&z=15&output=embed`;


    return (
        <>
        <iframe className="w-[100%] h-[30rem]" src={mapUrl}></iframe>
        </>
    )
}