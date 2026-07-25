import { EquippedGear } from '@/lib/gear';


export async function postGearIds(gears: EquippedGear): Promise<void> {
    const jsonGears = JSON.stringify(gears); // Create JSON
    await fetch('/api/saveGear',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonGears,
        });
}