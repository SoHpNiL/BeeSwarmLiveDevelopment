import { GearType } from './gearType';

interface Tool extends GearType{
    pollenPerSecond: number;
}

export const tools: Tool[] = [
    { name: "Scooper", pollenPerSecond: 5, costPollen: 0, id: 1 },
    { name: "Rake", pollenPerSecond: 8, costPollen: 800, id: 2 },
    { name: "Clippers", pollenPerSecond: 13.85, costPollen: 2200, id: 3 },
    { name: "Magnet", pollenPerSecond: 18, costPollen: 5500, id: 4 },
    { name: "Vacuum", pollenPerSecond: 32.5, costPollen: 14000, id: 5 },
    { name: "Super-Scooper", pollenPerSecond: 40, costPollen: 40000, id: 6 },
    { name: "Pulsar", pollenPerSecond: 58, costPollen: 125000, id: 7 },
    { name: "Electro-Magnet", pollenPerSecond: 72, costPollen: 300000, id: 8 },
    { name: "Scissors", pollenPerSecond: 120, costPollen: 850000, id: 9 },
    { name: "Honey Dipper", pollenPerSecond: 108.89, costPollen: 1500000, id: 10 },
    { name: "Scythe", pollenPerSecond: 238, costPollen: 3500000, id: 11 },
    { name: "Bubble Wand", pollenPerSecond: 240, costPollen: 3500000, id: 12 },
    { name: "Golden Rake", pollenPerSecond: 149.33, costPollen: 20000000, id: 13 },
    { name: "Porcelain Dipper", pollenPerSecond: 324, costPollen: 150000000, id: 14 },
    { name: "Petal Wand", pollenPerSecond: 528.57, costPollen: 1500000000, id: 15 },
    { name: "Dark Scythe", pollenPerSecond: 1000, costPollen: 2500000000000, id: 16 },
    { name: "Tide Popper", pollenPerSecond: 1000, costPollen: 2500000000000, id: 17 },
    { name: "Gummyballer", pollenPerSecond: 1000, costPollen: 2500000000000, id: 18 },
    { name: "Sparky Staff", pollenPerSecond: 345, costPollen: 999999999999999, id: 19 } // SKIP
];