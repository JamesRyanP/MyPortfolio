export const gameData = [
    {
        id: 1,
        title: 'One-Click Santa',
        mainCategory: 'Adventure',
        secondaryCategory: 'One Click',
        icon: require('../../assets/Gallery-Images/Item3/Icon.png'),
        getPath: () => `${process.env.PUBLIC_URL}/One-Click Santa/index.html`,
        engine: 'Phaser'
    },
    {
        id: 2,
        title: 'WordAround',
        mainCategory: 'Puzzle',
        secondaryCategory: 'Word',
        icon: require ('../../assets/Gallery-Images/Item2/Icon.png'),
        getPath: () => `${process.env.PUBLIC_URL}/WordAround/index.html`,
        engine: 'React-Native'
    },
];


export const getPathById = (id) => {
    const foundItem = gameData.find(item => item.id === id);
    return foundItem ? foundItem.getPath() : null;
};

export const getEngineById= (id) => {
    const foundItem = gameData.find(item => item.id === id);
    return foundItem ? foundItem.engine : null;
}

