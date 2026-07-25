import { EquippedGear } from '@/lib/gear';

export async function getGearIds(): Promise<EquippedGear> {
    const jsonGearIds = await fetch ('/api/fetchGear');
    const gearIds = jsonGearIds.json(); // Unpack JSON file
    return gearIds;
}
