import Image from "next/image";

export default function Sticker({image, properties, x = 64, y = 64}: {image: string; properties: string; x?:number; y?: number}){
    return(
        <Image src={image} alt="" width={x} height={y} className={`absolute pointer-events-none select-none z-0 ${properties}`}/>
    )
}