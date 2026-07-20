import Image from "next/image";

// Same as sticker just without abseloute
export default function Icon({image, properties, x = 64, y = 64}: {image: string; properties?: string; x?:number; y?: number}){
    return(
        <Image src={image} alt="" width={x} height={y} className={`pointer-events-none select-none z-0 ${properties}`}/>
    )
}