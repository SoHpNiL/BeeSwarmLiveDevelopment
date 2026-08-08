import { tools } from './tools';
import { bags } from './bags';
import { belts } from './belts';
import { boots } from './boots';
import { guards } from './guards';
import { masks } from './masks';
import { GearFields, findGear, EquippedGear, GearCategory } from './gearInfo';


// Cleaner way of importing all the files in this directory for components/pages
export { tools, bags, belts, boots, guards, masks, findGear };
export type { EquippedGear, GearCategory, GearFields };