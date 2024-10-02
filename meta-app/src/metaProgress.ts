interface GameData {
    title: string;
    id: string;
    save: string | null;
}

const data: GameData[] = [
    {
        title: "Stellar Odyssey",
        id: "stellar-odyssey",
        save: localStorage.getItem("stellar-odyssey-data"),
    },
];

export { data };
