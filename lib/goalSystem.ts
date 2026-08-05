import { GearCategory } from '@/lib/gear'

let goalMap: Map<number, Goal>;

// Goals (node) takes form of a Directed Acyclic Graph created on runtime
interface Goal {
    id: number;
    gearId?: number;
    gearCategory?: GearCategory;
    description?: string;
    nextGoal: Goal[]; // Edges
}

// The goalShape interface is used to input raw data and transform it later
interface goalShape {
    id: number;
    gearId?: number;
    gearCategory?: GearCategory;
    description?: string;
    nextGoalIds?: number[];
}

// Transform goalShape array to Goal array by creating each goalShape objects to their own Goal object, hence allowing mapping
// to each Goal on runtime
function createGoal(goals: goalShape[]): Goal[] {

    if (goals == null || goals.length <= 1) {
        throw Error("Goals could not be found");
    }

    goalMap = new Map<number, Goal>();
    // Create each goalShape its own Goal by their unique ID WITH an empty Goal array
    for (const currentGoal of goals) {
        goalMap.set(currentGoal.id, {
            id: currentGoal.id,
            gearId: currentGoal.gearId,
            gearCategory: currentGoal.gearCategory,
            description: currentGoal.description,
            nextGoal: []
        })
    }


    // Since all Goal objects (nodes) are made. now connect them with eachother (edges)
    for (const currentGoal of goals) {

        const updateGoal = goalMap.get(currentGoal.id); // find Goal/Node
        if (updateGoal == null) {
            throw Error("Could not find goal to update");
        }

        // update nextGoal field by getting current Goal's number array and mapping each Id (edges) to get the respective nodes
        updateGoal.nextGoal = (currentGoal.nextGoalIds ?? []).map((edges) => {
            const addGoal = goalMap.get(edges);
            if (addGoal == null) {
                throw Error("Could not find next Goals");
            }

            return addGoal;
        });
    }

    return Array.from(goalMap.values());

}

// The saved id of the User's current Goal is utilized to find their goal for future uses
export function findGoal(id: number, goals: goalShape[]): Goal {
    // Ensure goalMap is initialized
    if (!goalMap) {
        createGoal(goals);
    }

    const targetGoal = goalMap.get(id);
    if (!targetGoal) {
        throw Error(`Goal with id ${id} not found`);
    }

    return targetGoal;
}


export const goalInfo: goalShape[] = [
    {
        id: 1,
        description: "You can choose to get: Clipper or Backpack",
        nextGoalIds: [2, 3],
    },
    {
        id: 2,
        gearId: 3,
        gearCategory: "tool",
        description: "Clipper",
        nextGoalIds: [4],
    },
    {
        id: 3,
        gearId: 3,
        gearCategory: "bag",
        description: "Backpack",
        nextGoalIds: [4],
    },
    {
        id: 4,
        description: "5 Bees",
        nextGoalIds: [5],
    },
    {
        id: 5,
        gearId: 4,
        gearCategory: "bag",
        description: "Canister",
        nextGoalIds: [6],
    },
    {
        id: 6,
        gearId: 5,
        gearCategory: "tool",
        description: "Vacuum",
        nextGoalIds: [7],
    },
    {
        id: 7,
        description: "You can choose to get: Belt Pocket, Basic Boots, or Helmet",
        nextGoalIds: [8, 9, 10],
    },
    {
        id: 8,
        description: "You can choose to get: Basic Boots or Helmet",
        nextGoalIds: [11, 12],
    },
    {
        id: 9,
        description: "You can choose to get: Belt Pocket or Helmet",
        nextGoalIds: [11, 13],
    },
    {
        id: 10,
        description: "You can choose to get: Basic Boots or Belt Pocket",
        nextGoalIds: [12, 13], 
    },
    {
        id: 11,
        description: "Helmet",
        nextGoalIds: [],
    },
    {
        id: 12,
        description: "Basic Boots",
        nextGoalIds: [],
    },
    {
        id: 13,
        description: "Belt Pocket",
        nextGoalIds: [],
    },
];
