import Image from "next/image";
import cta from '../../../public/images/bg/bg-7.jpg'
export default function CTA(){
    return(
        <section>
            <div className="relative">
                <Image src={cta} alt="cta" className="w-full h-72 object-cover"/>
                <div className=" w-full h-full ">
                    <div className="absolute top-0 inset-0 flex flex-col items-center justify-center  uppercase space-y-6 bg-black/30">
                    <span className="h6 letter-spacing text-white">Dscover your potential</span>
                    <h2 className=" md:text-3xl text-white">
                        Book your early seat to get <span className="text-color">summer 25% </span>dicsount
                    </h2>
                    <button className="bg-orange-500 p-3 uppercase">
                    <a href="pricing.html" className="btn btn-main text-white">Join Today</a>
                    </button>
                    </div>
                </div>
            </div>
</section>

    )
}