import { useSession, signIn, signOut } from "next-auth/react";
import Icon from '@/app/components/icon';
import route from '@/app/api/fetchGear/route';




export default function SaveGearButton() {
    // Keep button seperate so different states of the button appears for when needed
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl">
                Loading...
            </button>
        );
    }

    if (session) {
        return (
            <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl">
                Save Gears <Icon image="/check_mark.webp" properties="w-12 h-12"/>
            </button>
        );
    }

    return (
        <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl" onClick={() => signIn("google")}>
            Sign In to Save Gears <Icon image="/alert_icon.webp" properties="w-12 h-12"/>
        </button>
    )
}