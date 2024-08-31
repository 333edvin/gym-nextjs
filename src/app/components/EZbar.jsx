import Image from "next/image";

export default function EZBAR(){
    return(
        <div className="flex justify-center mb-5">
        <Image src="/images/EZbar.svg" alt="bar" width={200} height={80}/>
        </div>
    )
}