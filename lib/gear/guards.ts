import { GearType } from './gearType';

interface Guard extends GearType {
    redPollen?: number;
    bluePollen?: number;
    whitePollen?: number;
}

export const guards: Guard[] = [
    { id: 0, name: "None", costPollen: 0},
    { id: 1, name: "Brave Guard", costPollen: 300000, whitePollen: 5 },
    { id: 2, name: "Hasty Guard", costPollen: 300000 }, // First 4 optional besides Hasty (Good Speed)
    { id: 3, name: "Bomber Guard", costPollen: 300000, whitePollen: 5 },
    { id: 4, name: "Looker Guard", costPollen: 300000 },
    { id: 5, name: "Blue Guard", costPollen: 1000000, bluePollen: 15 }, // Pairs below
    { id: 6, name: "Red Guard", costPollen: 750000, redPollen: 15 },
    { id: 7, name: "Elite Blue Guard", costPollen: 999999999999999, bluePollen: 25 }, // SKIP ELITES
    { id: 8, name: "Elite Red Guard", costPollen: 999999999999999, redPollen: 25 },
    { id: 9, name: "Bucko Guard", costPollen: 30000000, bluePollen: 35 }, // Pairs below
    { id: 10, name: "Riley Guard", costPollen: 30000000, redPollen: 35 },
    { id: 11, name: "Cobalt Guard", costPollen: 200000000, bluePollen: 50 }, // Pairs below
    { id: 12, name: "Crimson Guard", costPollen: 200000000, redPollen: 50 },
];