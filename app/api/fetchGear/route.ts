import { auth } from "@/auth";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { EquippedGear } from "@/lib/gear/gearInfo";

export async function GET() {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: 'User not Logged-In' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("test");

    // retrieves data from mongoDB 
    const gears = await db.collection("users").findOne(
        { email: session.user?.email });
    // some other bs here

    // if email SOMEHOW not found and gearsID as well return default loadset.
    if (!gears || !gears.gearIds) {
        return NextResponse.json({ tool: 1, bag: 1, belt: 0, boot: 0, guard: 0, mask: 0 }, { status: 404 });
    }

    //return gearIds
    return NextResponse.json({ gearIds: gears.gearIds }, { status: 200 });

}
