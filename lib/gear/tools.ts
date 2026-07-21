import { GearType } from './gearType';

interface Tool extends GearType {
    pollenPerSecond: number;
}

export const tools: Tool[] = [
    { name: "Scooper", pollenPerSecond: 5, costPollen: 0, id: 1, image: "/gears/tools/scooper.webp" },
    { name: "Rake", pollenPerSecond: 8, costPollen: 800, id: 2, image: "/gears/tools/rake.webp"  },
    { name: "Clippers", pollenPerSecond: 13.85, costPollen: 2200, id: 3, image: "/gears/tools/clippers.webp"  },
    { name: "Magnet", pollenPerSecond: 18, costPollen: 5500, id: 4, image: "/gears/tools/magnet.webp"  },
    { name: "Vacuum", pollenPerSecond: 32.5, costPollen: 14000, id: 5, image: "/gears/tools/vacuum.webp"  },
    { name: "Super-Scooper", pollenPerSecond: 40, costPollen: 40000, id: 6, image: "/gears/tools/super-scooper.webp"  },
    { name: "Pulsar", pollenPerSecond: 58, costPollen: 125000, id: 7, image: "/gears/tools/pulsar.webp"  },
    { name: "Electro-Magnet", pollenPerSecond: 72, costPollen: 300000, id: 8, image: "/gears/tools/electro-magnet.webp"  },
    { name: "Scissors", pollenPerSecond: 120, costPollen: 850000, id: 9, image: "/gears/tools/scissors.webp"  },
    { name: "Honey Dipper", pollenPerSecond: 108.89, costPollen: 1500000, id: 10, image: "/gears/tools/honey_dipper.webp"  },
    { name: "Scythe", pollenPerSecond: 238, costPollen: 3500000, id: 11, image: "/gears/tools/scythe.webp"  },
    { name: "Bubble Wand", pollenPerSecond: 240, costPollen: 3500000, id: 12, image: "/gears/tools/bubble_wand.webp" },
    { name: "Golden Rake", pollenPerSecond: 149.33, costPollen: 20000000, id: 13, image: "/gears/tools/golden_rake.webp"  },
    { name: "Porcelain Dipper", pollenPerSecond: 324, costPollen: 150000000, id: 14, image: "/gears/tools/porcelain_dipper.webp"  },
    { name: "Petal Wand", pollenPerSecond: 528.57, costPollen: 1500000000, id: 15, image: "/gears/tools/petal_wand.webp"  },
    { name: "Dark Scythe", pollenPerSecond: 1000, costPollen: 2500000000000, id: 16, image: "/gears/tools/dark_scythe.webp"  },
    { name: "Tide Popper", pollenPerSecond: 1000, costPollen: 2500000000000, id: 17, image: "/gears/tools/tide_popper.webp"  }, // THE GOAT
    { name: "Gummyballer", pollenPerSecond: 1000, costPollen: 2500000000000, id: 18, image: "/gears/tools/gummyballer.webp"  },
    { name: "Sparky Staff", pollenPerSecond: 345, costPollen: 999999999999999, id: 19, image: "/gears/tools/spark_staff.webp"  } // SKIP
];