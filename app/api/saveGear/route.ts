import { auth } from "@/auth";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { EquippedGear } from "@/lib/gear/gearInfo";

export async function POST(request: Request) {
    const session = await auth();

    // User not logged-in. Error 401
    if (!session) {
        return NextResponse.json({ error: 'User not Logged-In' }, { status: 401 });
    }

    const gear: EquippedGear = await request.json();

    const client = await clientPromise;
    const db = client.db("test");

    // Update/Set gearIds on mongoDB for specific user (found
    //  by their email).
    await db.collection("users").updateOne(
        { email: session.user?.email },
        { $set: { gearIds: gear } }
    );

    return NextResponse.json({ success: true });
}