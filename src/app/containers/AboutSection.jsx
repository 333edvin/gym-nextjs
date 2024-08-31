import Image from "next/image";

const About  = () => {
    return(
       <section>
  <div className="p-5 md:p-20  ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-end">
        <Image src="/images/bg/bg-5.jpg" width={500} height={500} alt='background-image' className="img-fluid rounded shadow w-100" />
      </div>
      <div className="flex items-center">
        <div className="space-y-6 my-5">
          <h2 className="text-3xl uppercase">We’ve skill in <br />wide <span className="text-color">range of fitness</span> and Other body health facility. </h2>
          <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>
          <button>
          <a href="#" className=" my-5 p-3 bg-orange-500 text-white">Learn More<i className="fa fa-angle-right " /></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default About;