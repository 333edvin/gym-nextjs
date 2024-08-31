import Image from "next/image";
import banner from '../../../public/images/bg/slide2.jpg'
import dumbbell from '../../../public/images/dumbbell.svg'
const Hero = () => {
    const features = [
        { title: "Modern Equipment", description: "Vestibulum sit amet blandit augue, sit amet vehicula mi. Aliquam vitae varius lorem." },
        { title: "Expert Trainers", description: "Vestibulum sit amet blandit augue, sit amet vehicula mi. Aliquam vitae varius lorem." },
        { title: "Personalized Plans", description: "Vestibulum sit amet blandit augue, sit amet vehicula mi. Aliquam vitae varius lorem." },
      ];
    return(
            <section >
                <div >
                    <div>
                    <Image src={banner} alt='banner-img'  className="w-full h-screen object-cover"/>
                    </div>
                    <div className="absolute top-32 md:top-0  text-white uppercase w-full h-screen flex  bg-black/30">
                        <div className="flex flex-col justify-center items-start w-full h-screen   px-5 md:px-20 space-y-6">
                        <span className="mb-0 md:mb-4 border p-1 text-uppercase ">Gym fitness club</span>
                        <h1 className="font-bold text-4xl md:text-7xl mb-5">Step up your <br /> <span className="text-orange-500">fitness Challange</span><br />with us</h1>
                        <a href="pricing.html"  className="btn  p-3 bg-orange-500 ">Join Us <i className="ti-angle-right ml-3" /></a>
                        </div>
                        <div className=" relative right-3 md:right-10">
                            <Image src={dumbbell} alt="dumbbell" className="w-20 md:w-32 h-full"/>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-20 py-10 md:py-20 text-center md:text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="relative bg-white text-black p-6 md:p-8 rounded-lg shadow-lg overflow-hidden">
                        {/* Number in the background */}
                        <span className="absolute top-0 right-0 text-9xl text-orange-500 opacity-40 z-10 pointer-events-none">
                            0{index + 1}
                        </span>

                        {/* Foreground content */}
                        <div className="relative z-20">
                            <h3 className="mt-3 text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-3 mb-4">{feature.description}</p>
                            <a
                            href="about.html"
                            className="text-orange-500 uppercase text-sm font-bold tracking-wide hover:underline"
                            >
                            <i className="ti-minus mr-2" />
                            More Details
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>

        </section>

    )
}

export default Hero;