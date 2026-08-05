import { tools } from '@/lib/gear/tools';
import { bags } from '@/lib/gear/bags';
import { belts } from '@/lib/gear/belts';
import { boots } from '@/lib/gear/boots';
import { guards } from '@/lib/gear/guards';
import { masks } from '@/lib/gear/masks';
import { GearFields } from '@/lib/gear/gearInfo';
import { findGear } from '@/lib/gear/gearInfo';
import { EquippedGear } from '@/lib/gear/gearInfo'
import { GearCategory } from '@/lib/gear/gearInfo'


// Cleaner way of importing all the files in this directory for components/pages
export { tools, bags, belts, boots, guards, masks, findGear };
export type { EquippedGear, GearCategory, GearFields };