import WeightLifting from '../../../public/images/WeightLifting.png'
import Cycling from '../../../public/images/Cycling.png'
import YogaMeditation from '../../../public/images/YogaMeditation.png'
import BuildingBody from '../../../public/images/BuildingBody.png'
import FitnessTrack from '../../../public/images/FitnessTrack.png'
import Fitness from '../../../public/images/Fitness.png'
import Image from 'next/image'
import EZBAR from '../components/EZbar'
const servicesData = [
    {
      icon: "/images/WeightLifting.png",
      title: "Weight Lifting",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
    {
      icon: "/images/Cycling.png",
      title: "Cycling",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
    {
      icon: "/images/YogaMeditation.png",
      title: "Yoga Meditation",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
    {
      icon: "/images/BuildingBody.png",
      title: "Building Body",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
    {
      icon: "/images/FitnessTrack.png",
      title: "Fitness Track",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
    {
      icon: "/images/Fitness.png",
      title: "Fitness",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.",
    },
  ];
  
  const Services = () => {
    return (
      <section>
        <div className=" mx-auto p-5 md:p-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold  mb-4">Our Services</h2>
            <EZBAR/>
            <p className="">
              We offer more than 35 group exercise, aerobic classes each week.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {servicesData.map((service, index) => (
            <div
            key={index}
            className="bg-white text-black rounded-lg shadow-md hover:bg-orange-100 hover:shadow-lg transition-all duration-200 ease-in-out"
          >          
                <div className="flex flex-col text-center items-center p-3 md:p-6 ">
                  <Image src={service.icon} alt={service.title} width={50} height={50} className='mb-5'/>
                  <h4 className="md:text-xl font-semibold  mb-2 uppercase">
                    {service.title}
                  </h4>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  