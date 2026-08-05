// Serves as a rule so <states> can only refer to ID numbers for gears
export interface EquippedGear {
    tool: number;
    bag: number;
    belt: number;
    boot: number;
    guard: number;
    mask: number;
}

// Strings to identify each Gear Category
export type GearCategory = "tool" | "bag" | "belt" | "boot" | "guard" | "mask";


// Fields that gears must/may hold
export interface GearFields {
    name: string;
    costPollen: number;
    extraCost?: string;
    id: number;
    image?: string;
}


export function findGear<Gear extends GearFields>(id: number, array: Gear[]): Gear {

    // Searches in the specific gear's array if Id matches to an existing gear and then returns it
    const foundGear = array.find((gear) => id === gear.id);
    if (!foundGear) {
        throw new Error("Incorrect Gear ID");
    }

    return foundGear;
}