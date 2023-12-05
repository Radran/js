// ... rest, ...spread
const nfc = [
    ['49ers', 'Seahawks', 'Cardinals', 'Rams'],
    ['Eagles', 'Cowboys', 'Commanders', 'Giants'],
    ['Lions', 'Packers', 'Bears', 'vikings'],
    ['Saints', 'Buccaneers', 'Panthers', 'Falcons']
];
[nfcWest, nfcEast, nfcNorth, nfcSouth] = nfc;
console.log(nfcEast, nfcWest, nfcNorth, nfcSouth);
const afc = [
    ['Dolphins', 'Bills', 'Jets', 'Patriots'],
    ['Chiefs', 'Broncos', 'Raiders', 'Chargers'],
    ['Ravens', 'Browns', 'Steelers', 'Bengals'],
    ['Jaguars', 'Texans', 'Colts', 'Titans']
];
[afcEast, afcWest, afcNorth, afcSouth] = afc;
console.log(afcEast,afcWest,afcNorth,afcSouth);


