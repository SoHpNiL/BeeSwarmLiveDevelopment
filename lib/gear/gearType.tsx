export interface GearType {
    name: string;
    costPollen: number;
    extraCost?: string;
    id: number;
    image?: string;
}

export function findGear<Gear extends GearType>(id: number, array: Gear[]): Gear {

    // Searches in the specific gear's array if Id matches to an existing gear and then returns it
    const foundGear = array.find((gear) => id === gear.id);
    if (!foundGear) {
        throw new Error("Incorrect Gear ID");
    }

    return foundGear;
}