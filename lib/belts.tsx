interface Belt {
    name: string;
    extraCost?: string;
    costPollen: number;
    id: number;
    image?: string;
}

export const belts: Belt[] = [
    { id: 1, name: "Belt Pocket", costPollen: 14000 },
    { id: 2, name: "Belt Bag", costPollen: 440000 },
    { id: 3, name: "Mondo Belt Bag", costPollen: 12400000 },
    { id: 4, name: "Honeycomb Belt", costPollen: 75000000 },
    { id: 5, name: "Petal Belt", costPollen: 15000000000 },
    { id: 6, name: "Coconut Belt", costPollen: 7500000000000 },
];