import { Goal, GoalShape } from '@/lib/progressionSystem';
import { EquippedGear } from '@/lib/gear'


// At the bottom of this file contains all the actual data.

let goalMap: Map<number, Goal>; // DAG containing all data and directions



// Transform goalShape array to Goal array by creating each goalShape objects to their own Goal object, hence allowing mapping
// to each Goal on runtime
export function createGoal(): Goal[] {

    goalMap = new Map<number, Goal>();
    // Create each goalShape its own Goal by their unique ID WITH an empty Goal array
    for (const currentGoal of goalInfo) {
        goalMap.set(currentGoal.id, {
            id: currentGoal.id,
            type: currentGoal.type,
            gearId: currentGoal.gearId,
            gearCategory: currentGoal.gearCategory,
            description: currentGoal.description,
            nextGoal: []
        })
    }


    // Since all Goal objects (nodes) are made. now connect them with eachother (edges)
    for (const currentGoal of goalInfo) {

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

function isCompleted(goal: Goal, playerGear: EquippedGear): boolean {
    // inputs require player's gear data hence users must be logged in
    switch (goal.type) {
        case 'gear': { 
            return (goal.gearId != null && goal.gearCategory != null && playerGear[goal.gearCategory] >= goal.gearId); 
        } // Compare gearId of goal vs player to see if completed

        case 'bee': // TODO: implement new data type for player's bee count
        case 'milestone':
        case 'multichoice':
    }
}

export function traverseDAG(start: number, playerGear: EquippedGear): Goal {

    // Ensure goalMap is initialized
    if (!goalMap) {
        createGoal();
    }

    const visitedNode = new Set<number>(); // save registered goal's via their IDs

    goalMap.forEach( (item) => {
        if (visitedNode.has(item.id)){
            return;
        }

        visitedNode.add(item.id);
        if (isCompleted(item, playerGear)){

        }
    })

}


const goalInfo: GoalShape[] = [
    {
        id: 1,
        type: "multichoice",
        description: "You can choose to get: Clipper or Backpack",
        nextGoalIds: [2, 3],
    },
    {
        id: 2,
        type: "gear",
        gearId: 3,
        gearCategory: "tool",
        description: "Clipper",
        nextGoalIds: [4],
    },
    {
        id: 3,
        type: "gear",
        gearId: 3,
        gearCategory: "bag",
        description: "Backpack",
        nextGoalIds: [4],
    },
    {
        id: 4,
        type: "bee",
        description: "5 Bees",
        nextGoalIds: [5],
    },
    {
        id: 5,
        type: "gear",
        gearId: 4,
        gearCategory: "bag",
        description: "Canister",
        nextGoalIds: [6],
    },
    {
        id: 6,
        type: "gear",
        gearId: 5,
        gearCategory: "tool",
        description: "Vacuum",
        nextGoalIds: [7],
    },
    {
        id: 7,
        type: "multichoice",
        description: "You can choose to get: Belt Pocket, Basic Boots, or Helmet",
        nextGoalIds: [8, 9, 10],
    },
    {
        id: 8,
        type: "multichoice",
        description: "You can choose to get: Basic Boots or Helmet",
        nextGoalIds: [11, 12],
    },
    {
        id: 9,
        type: "multichoice",
        description: "You can choose to get: Belt Pocket or Helmet",
        nextGoalIds: [11, 13],
    },
    {
        id: 10,
        type: "multichoice",
        description: "You can choose to get: Basic Boots or Belt Pocket",
        nextGoalIds: [12, 13],
    },
    {
        id: 11,
        type: "gear",
        description: "Helmet",
        nextGoalIds: [],
    },
    {
        id: 12,
        type: "gear",
        description: "Basic Boots",
        nextGoalIds: [],
    },
    {
        id: 13,
        type: "gear",
        description: "Belt Pocket",
        nextGoalIds: [],
    },
];
