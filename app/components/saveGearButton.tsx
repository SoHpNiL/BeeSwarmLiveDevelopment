import { useSession, signIn } from "next-auth/react";
import { useState } from 'react';
import { postGearIds } from '@/lib/postGearIds'
import { EquippedGear } from '@/lib/gear';

import Icon from '@/app/components/icon';
                                    

export default function SaveGearButton({ gears }: { gears: EquippedGear }) {
    // Keep button seperate so different states of the button appears for when needed
    const { data: session, status } = useSession();
    const [disabled, setDisabled] = useState<boolean>(false); // Disable user from further sending data
    const [failure, setFailure] = useState<boolean>(false); // Display to user data failed to send to database


    // Sends data and inhibits next click for 5 seconds
    const handleClick = async () => {
        setDisabled(true);
        try {
            await postGearIds(gears);
        } catch (e) {
            console.error("Data failed to send", e)
            setDisabled(false);
            setFailure(true);
            setTimeout(() => setFailure(false), 2000);
            return;
        }

        console.log("2 Second Cooldown Activated")
        setTimeout(() => setDisabled(false), 2000)
    }


    if (status === "loading") {
        return (
            <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl">
                Loading Data  <span className="loading loading-spinner loading-s text-2xl" />
            </button>
        );
    }

    if (session && !disabled) {
        return (
            <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl" onClick={handleClick}>
                Save Gears <Icon image="/check_mark.webp" properties="w-12 h-12" />
            </button>
        );
    }

    // Spinner
    else if (disabled) {
        return (
            <button className="btn btn-sm btn-ghost bg-gray-500 sm:btn-lg mt-60 rounded-2xl cursor-default">
                Sending Data  <span className="loading loading-spinner loading-s text-2xl" />
            </button>
        );
    }

    else if (failure) {
        return (
            <button className="btn btn-sm btn-ghost bg-gray-500 sm:btn-lg mt-60 rounded-2xl cursor-default">
                Data Failed to Save <Icon image="/alert_icon.webp" properties="w-12 h-12" />
            </button>
        )
    }

    else {
        return (
            <button className="btn btn-sm btn-ghost bg-amber-600 sm:btn-lg mt-60 rounded-2xl" onClick={() => signIn("google")}>
                Sign In to Save Gears <Icon image="/alert_icon.webp" properties="w-12 h-12" />
            </button>
        );
    }
}