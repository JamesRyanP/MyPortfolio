export const gameData = [

    {
        id: 1,
        title: 'Sokodice',
        category: `\u2022 Dice \u2022 Puzzle`,
        released: 'IOS / Android / Nintendo Switch',
        roles: [["Design: ", "Helped design gameplay elements including mechanics, UI, and level design"], ["QA Tester: ", "Conducted thorough quality assurance testing to ensure functionality, usability, and overall game quality."], ["Composer: ", "Composed all audio including music and SFX"]],
        description: "Inspired by the classic crate-pushing puzzle game, Sokoban, Sokodice is a challenging puzzle game where you roll dice around 100+ challenging levels, trying to match the number of the dice to numbered tiles scattered about. You'll face plenty of environmental challenges, and use various dice abilities to traverse 10 different worlds, each with it's own unique challenges.",
        technology: ["Unity", "C#"]
    },
    {
        id: 2,
        title: 'WordAround',
        category: `\u2022 Word \u2022 Puzzle`,
        released: 'IOS / Android',
        roles: [["Design: ", "Researched, planned, and designed all game features and UI."], ["Programmer: ", "Programmed all game compnents, pages, and funcionalities"], ["QA Tester: ", "Conducted thorough quality assurance testing to ensure functionality, usability, and overall game quality."], ["Composer: ", "Composed all audio including music and SFX"]],
        description: "Inspired by the classic crate-pushing puzzle game, Sokoban, Sokodice is a challenging puzzle game where you roll dice around 100+ challenging levels, trying to match the number of the dice to numbered tiles scattered about. You'll face plenty of environmental challenges, and use various dice abilities to traverse 10 different worlds, each with it's own unique challenges.",
        technology: ["React-Native", "Javascript"]
    },
    { 
        id: 3,
        title: 'One Click Santa',
        category: `\u2022 Tap \u2022 Adventure`,
        released: 'Itch.Io',
        roles: [["Design: ", "Helped design gameplay elements including mechanics, UI, and level design"], ["Programmer: ", "Programmed all game compnents, pages, and funcionalities"],  ["QA Tester: ", "Conducted thorough quality assurance testing to ensure functionality, usability, and overall game quality."]],
        description: "Inspired by the classic crate-pushing puzzle game, Sokoban, Sokodice is a challenging puzzle game where you roll dice around 100+ challenging levels, trying to match the number of the dice to numbered tiles scattered about. You'll face plenty of environmental challenges, and use various dice abilities to traverse 10 different worlds, each with it's own unique challenges.",
        technology: ["Phaser", "Javascript"] 
    },
];

export const generateImageUrl = (id) => {
    const image = require(`../../assets/Gallery-Images/Item${id}/Icon.png`);
    return image;

}

export const generateImageBanner = (id) => {
    try {
        const image = require(`../../assets/Gallery-Images/Item${id}/Banner.png`);
        return image;
    }

    catch (error) {
        return null;
    }


}