interface Bag {
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

export const bags: Bag[] = [
    { id: 1, name: "Pouch", costPollen: 0 },
    { id: 2, name: "Jar", costPollen: 650 },
    { id: 3, name: "Backpack", costPollen: 5500 },
    { id: 4, name: "Canister", costPollen: 22000 },
    { id: 5, name: "Mega-Jug", costPollen: 50000 },
    { id: 6, name: "Compressor", costPollen: 160000 },
    { id: 7, name: "Elite Barrel", costPollen: 650000 },
    { id: 8, name: "Port-O-Hive", costPollen: 1250000 },
    { id: 9, name: "Red Port-O-Hive", costPollen: 12500000, redPollen: 5 },
    { id: 10, name: "Blue Port-O-Hive", costPollen: 12500000, bluePollen: 5 },
    { id: 11, name: "Porcelain Port-O-Hive", costPollen: 250000000, redPollen: 10, bluePollen: 10, whitePollen: 50 },
    { id: 12, name: "Coconut Canister", costPollen: 25000000000, whitePollen: 100, pollen: 5 },
];