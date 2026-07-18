interface Boot {
    name: string;
    extraCost?: string;
    costPollen: number;
    pollen?: number;
    id: number;
    image?: string;
}

export const boots: Boot[] = [
    { id: 1, name: "Basic Boots", costPollen: 4400 },
    { id: 2, name: "Hiking Boots", costPollen: 2200000 },
    { id: 3, name: "Beekeeper's Boots", costPollen: 15000000 },
    { id: 5, name: "Coconut Clogs", costPollen: 10000000000, pollen: 15 },
    { id: 6, name: "Gummy Boots", costPollen: 100000000000, pollen: 20 },
];