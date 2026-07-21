// Serves as a general guideline to how <states> can only refer to ID's for gears
export interface EquippedGear {
    tool: number;
    bag: number;
    belt: number;
    boot: number;
    guard: number;
    mask: number;
}

export type GearCategory = "tool" | "bag" | "belt" | "boot" | "guard" | "mask";
