
import { CiImageOn } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";



export default function HouseDetailsFeatures({house}) {

    return (
         <section className="house__features" >
        <div className=" flex justify-between border-b-1">
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
        </div>
        <div className=" flex justify-between">
            <table>
                <tbody>
                    {/* <tr><td>Sagsnummer:</td><td>1234567898</td></tr> */}
                    <tr><td>Boligareal:</td><td>{house.livingspace} m²</td></tr>
                    <tr><td>Grundareal:</td><td>{house.lotsize} m²</td></tr>
                    <tr><td>Rum/værelser:</td><td>{house.rooms}</td></tr>
                    {/* <tr><td>Antal Plan:</td><td>3</td></tr> */}
                </tbody>
            </table>    
            <table>
                <tbody>
                    <tr><td>Kælder:</td><td>{house.basementsize == 0 ||house.basementsize == undefined ?('-'):(`${house.basementsize} m²`)}</td></tr>
                    <tr><td>Byggeår:</td><td>{house.built}</td></tr>
                    {/* <tr><td>Ombygget:</td><td>1976</td></tr> */}
                    <tr><td>Energimærke:</td><td>{house.energylabel}</td></tr>
                </tbody>
            </table>    
            <table>
                <tbody>
                    <tr><td>Udbetaling:</td><td>Kr. {house.payment}</td></tr>
                    <tr><td>Brutto ex ejerudgift:</td><td>Kr. {house.gross}</td></tr>
                    <tr><td>Netto ex ejerudgift:</td><td>Kr. {house.netto}</td></tr>
                    <tr><td>Ejerudgifter:</td><td>Kr. {house.cost}</td></tr>
                </tbody>
            </table>    
        </div>
    </section>
    )
}