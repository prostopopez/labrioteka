let store = null;

const getCoordData = async () => {
    if (store === null) {
        store = fetch('https://api.ipregistry.co/?key=22u1lyn8beqgz0&pretty=true').then(data => data.json());
    }

    return store;
};

const getCoords = async () => {
    const { location } = await getCoordData();

    return location;
};

export { getCoords }
