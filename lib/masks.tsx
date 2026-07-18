interface Mask {
    name: string;
    extraCost?: string;
    costPollen: number;
    redPollen?: number;
    bluePollen?: number;
    whitePollen?: number;
    pollen?: number;
    id: number;
    image?: string;
}

export const masks: Mask[] = [
    { id: 1, name: "Helmet", costPollen: 30000, pollen: 10 },
    { id: 2, name: "Propeller Hat", costPollen: 2500000, pollen: 15 },
    { id: 3, name: "Beekeeper's Mask", costPollen: 20000000, pollen: 20 },
    { id: 4, name: "Honey Mask", costPollen: 100000000, pollen: 25 },
    { id: 5, name: "Fire Mask", costPollen: 100000000, redPollen: 150 },
    { id: 6, name: "Bubble Mask", costPollen: 100000000, bluePollen: 150 },
    { id: 7, name: "Demon Mask", costPollen: 5000000000, pollen: 25, redPollen: 150  },
    { id: 8, name: "Diamond Mask", costPollen: 5000000000, pollen: 25, bluePollen: 150 },
    { id: 9, name: "Gummy Mask", costPollen: 5000000000, pollen: 25, whitePollen: 125},
];