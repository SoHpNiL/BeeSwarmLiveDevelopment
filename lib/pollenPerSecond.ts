import { tools, bags, belts, boots, guards, masks, findGear, EquippedGear, GearCategory } from '@/lib/gear/';

/* Function: Takes the honey per second provided by user's tool and multiplies it with other gear's multipliers
             returning the value 
    
    Inputs: [bags,boots,guards,masks,tools]
    Outputs: Integers

    Author: Shopnil Rahman
*/

export function pollenPerSecond(gears: EquippedGear) {

    const chosenTool = findGear(gears.tool, tools);
    const chosenBag = findGear(gears.bag, bags);
    const chosenBoot = findGear(gears.boot, boots);
    const chosenGuard = findGear(gears.guard, guards);
    const chosenMask = findGear(gears.mask, masks);

    const bluePollen = (chosenBag.bluePollen ?? 0) + (chosenBag.pollen ?? 0) + (chosenBoot.pollen ?? 0) + (chosenGuard.bluePollen ?? 0) + (chosenMask.bluePollen ?? 0) + (chosenMask.pollen ?? 0) + (chosenTool.pollen ?? 0) + (chosenTool.bluePollen ?? 0);
    const redPollen = (chosenBag.redPollen ?? 0) + (chosenBag.pollen ?? 0) + (chosenBoot.pollen ?? 0) + (chosenGuard.redPollen ?? 0) + (chosenMask.redPollen ?? 0) + (chosenMask.pollen ?? 0) + (chosenTool.pollen ?? 0) + (chosenTool.redPollen ?? 0);
    const whitePollen = (chosenBag.whitePollen ?? 0) + (chosenBag.pollen ?? 0) + (chosenBoot.pollen ?? 0) + (chosenGuard.whitePollen ?? 0) + (chosenMask.whitePollen ?? 0) + (chosenMask.pollen ?? 0) + (chosenTool.pollen ?? 0) + (chosenTool.whitePollen ?? 0);

    const tool = chosenTool.pollenPerSecond;


    let totalBluePollen = bluePollen * tool;
    let totalRedPollen = redPollen * tool;
    let totalWhitePollen = whitePollen * tool;

    if (totalBluePollen == 0) {
        totalBluePollen = tool;
    }

    if (totalRedPollen == 0) {
        totalRedPollen = tool;
    }

    if (totalWhitePollen == 0) {
        totalWhitePollen = tool;

    }
    return {
        bluePollen: totalBluePollen,
        redPollen: totalRedPollen,
        whitePollen: totalWhitePollen
    };
}

