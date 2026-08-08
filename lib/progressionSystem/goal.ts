import { GearCategory } from '@/lib/gear'

// Goals (node) takes form of a Directed Acyclic Graph created on runtime
export interface Goal {
    id: number;
    type: goalTypes;
    gearId?: number;
    gearCategory?: GearCategory;
    description?: string;
    nextGoal: Goal[]; // Edges
}

type goalTypes = "gear" | "bee" | "milestone" | "multichoice";

// The goalShape interface is used to input raw data and transform it later
export interface GoalShape {
    id: number;
    type: goalTypes;
    gearId?: number;
    gearCategory?: GearCategory;
    description?: string;
    nextGoalIds?: number[];
}