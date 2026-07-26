import { EquippedGear } from '@/lib/gear';

export async function getGearIds(): Promise<EquippedGear> {
    const gearIds = await fetch ('/api/fetchGear').then(response => response.json()) //fetch gearIds and unpack json file
    return gearIds;
}
