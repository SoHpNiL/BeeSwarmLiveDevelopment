import { GearType } from './gearType';

export interface Belt extends GearType {
}

export const belts: Belt[] = [
    { id: 0, name: "none", costPollen: 0 },
    { id: 1, name: "Belt Pocket", costPollen: 14000 },
    { id: 2, name: "Belt Bag", costPollen: 440000 },
    { id: 3, name: "Mondo Belt Bag", costPollen: 12400000 },
    { id: 4, name: "Honeycomb Belt", costPollen: 75000000 },
    { id: 5, name: "Petal Belt", costPollen: 15000000000 },
    { id: 6, name: "Coconut Belt", costPollen: 7500000000000 },
];