import { GearType } from './gearType';

export interface Bag extends GearType {
    redPollen?: number;
    bluePollen?: number;
    whitePollen?: number;
    pollen?: number;
}

export const bags: Bag[] = [
    { id: 1, name: "Pouch", costPollen: 0, image:"/gears/bags/Pouch.webp" },
    { id: 2, name: "Jar", costPollen: 650, image:"/gears/bags/Jar.webp" },
    { id: 3, name: "Backpack", costPollen: 5500, image:"/gears/bags/Backpack.webp" },
    { id: 4, name: "Canister", costPollen: 22000, image:"/gears/bags/Canister.webp" },
    { id: 5, name: "Mega-Jug", costPollen: 50000, image:"/gears/bags/Mega-Jug.webp" },
    { id: 6, name: "Compressor", costPollen: 160000, image:"/gears/bags/Compressor.webp" },
    { id: 7, name: "Elite Barrel", costPollen: 650000, image:"/gears/bags/Elite_Barrel.webp" },
    { id: 8, name: "Port-O-Hive", costPollen: 1250000, image:"/gears/bags/poh.webp" },
    { id: 9, name: "Red Port-O-Hive", costPollen: 12500000, redPollen: 5, image:"/gears/bags/rpoh.webp" },
    { id: 10, name: "Blue Port-O-Hive", costPollen: 12500000, bluePollen: 5, image:"/gears/bags/bpoh.webp" },
    { id: 11, name: "Porcelain Port-O-Hive", costPollen: 250000000, redPollen: 10, bluePollen: 10, whitePollen: 50, image:"/gears/bags/ppoh.webp" },
    { id: 12, name: "Coconut Canister", costPollen: 25000000000, whitePollen: 100, pollen: 5, image:"/gears/bags/cc.webp" },
];