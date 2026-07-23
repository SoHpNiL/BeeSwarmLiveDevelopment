interface StatCardProps {
    label: string;
    value: string | number; 
}

export default function statCard({ label, value }: StatCardProps) {
    return (
        <div className="bg-gray-400/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-xs sm:text-sm tracking-wide text-gray-300">
                {label}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-amber-500 mt-1">
                {value}
            </span>
        </div>
    );
}
