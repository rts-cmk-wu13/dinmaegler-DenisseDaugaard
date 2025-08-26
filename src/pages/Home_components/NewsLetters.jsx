
import { GoArrowRight } from "react-icons/go";
export default function NewsLetters() {

    return (
      <section className="newsletter flex justify-center items-center gap-8">
           <div>
            <p>Tilmeld dig vores nyhedsbrev og </p>
            <p>hold dig opdateret på boligmarkedet</p>
        
           </div>
            <form action="">
                <input className="bg-white text-black " type="email" placeholder="Indtast din email adresse" />
                <button type="submit"><GoArrowRight /></button>
            </form>
      </section>
    )
}