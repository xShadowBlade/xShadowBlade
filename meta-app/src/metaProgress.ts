interface gameData {
    title: string;
    id: string;
    save: string | null;
}

const data: gameData[] = [
    {
        title: "Stellar Odyssey",
        id: "stellar-odyssey",
        save: localStorage.getItem("stellar-odyssey-data"),
    },
];

export { data };