const getCharacterByName = (data, name) => {
    name = name.toLowerCase();
    return data.filter(personaje => personaje.name.toLowerCase().includes(name));
}

export default getCharacterByName;