import Link from 'next/link';

export default function homeButton(){
    return(
        <Link href="/">
         <span className="absolute hidden sm:block top-7.5 right-2 font-(family-name:--font-nabla) px-4 text-2xl hover:scale-105 transition-transform duration-700">
                BeeSwarm.LIVE
            </span>
            </Link>
    );
}