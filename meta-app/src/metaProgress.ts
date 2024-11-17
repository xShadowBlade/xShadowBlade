/**
 * @file Data for the meta progress page.
 */
import { DataManager } from "emath.js/game";

interface GameData {
    title: string;
    id: string;
    save: string | null;
    data: Exclude<ReturnType<DataManager["decompileData"]>, null>;
    progress: {
        current: number;
        max: number;
    };
}

const data: GameData[] = (([
    {
        title: "Stellar Odyssey",
        id: "stellar-odyssey",
        // save: localStorage.getItem("stellar-odyssey-data"),
        // data: DataManager.prototype.decompileData(localStorage.getItem("stellar-odyssey-data")) as GameData["data"],
    },
    {
        title: "Generic Training Game",
        id: "generic-training-game",
        // save: localStorage.getItem("generic-training-game-data"),
        // data: DataManager.prototype.decompileData(localStorage.getItem("generic-training-game-data")) as GameData["data"],
    },
    // {
    //     title: "game that doesnt exist",
    //     id: "game-that-doesnt-exist",
    // },
] as Omit<GameData, "data">[])
    .map((gameDataWithoutSave): GameData | undefined => {
        try {
            const newData = {
                ...gameDataWithoutSave,
                save: localStorage.getItem(gameDataWithoutSave.id + "-data"),
                data: DataManager.prototype.decompileData(localStorage.getItem(gameDataWithoutSave.id + "-data"))!,
            };
            return newData;
        } catch (error) {
            return undefined;
        }
    })
    .filter(x => x) as GameData[])
    .map(gameData => ({
        ...gameData,
        progress: {
            current: (gameData.data[1].progress ?? 0) as number,
            max: (gameData.data[1].maxProgress ?? 0) as number,
        },
    }));

console.log(data);

export { data };
