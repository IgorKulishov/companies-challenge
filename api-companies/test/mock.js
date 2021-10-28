const eventData = {
    "name": "Coldplay",
    "locationCity": "London",
    "locationState": "England",
    "foundedDate": "undefined",
    "founderFullName":"Chris Martin",
    "founderPosition":"singer",
    "description": "The band consists of vocalist, rhythm guitarist, and pianist Chris Martin;"
};

const eventMock = {
    body: JSON.stringify(eventData)
};
const updateEventData = {
    "name": "Coldplay",
    "locationCity": "London",
    "locationState": "England",
    "foundedDate": "1996",
    "founderFullName":"Chris Martin",
    "founderPosition":"singer",
    "description": "The band consists of vocalist, rhythm guitarist, and pianist Chris Martin; lead guitarist Jonny Buckland;"
}
const updateEventMock = {
    body: JSON.stringify(updateEventData)
};
const emptyEventMock = {
    body: undefined
};

module.exports = {
    eventData,
    eventMock,
    emptyEventMock,
    updateEventData,
    updateEventMock
}
