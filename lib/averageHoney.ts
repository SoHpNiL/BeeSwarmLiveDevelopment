import { auth } from "@/auth"

export async function averageHoney() {
    // Check if user is logged in
    const session = await auth()
    let isLoggedIn = true;


    if (session === null) {
        isLoggedIn = false;
        return { value: 'Sign-Up'};
    }

    // TODO: create an average Honey calculation System, and fetch it here from MongoDB
    // then return if found data or redirect to start calculation
    return {value: '42.8 B'};
}