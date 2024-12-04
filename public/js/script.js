// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

toggleDrum = (arrayName, indexNumber) => {

    if (indexNumber<0 || indexNumber>15) {
        return console.log('IndexNumber invalid! Must be 0-15')
    } else {
        switch (arrayName) {
            case 'kicks':
                if (kicks[indexNumber] === true) {
                    kicks[indexNumber] = false;
                } else {kicks[indexNumber] = true}
            break;
            case 'snares':
                if (snares[indexNumber] === true) {
                    snares[indexNumber] = false;
                } else {snares[indexNumber] = true}
            break;
            case 'hihats':
                if (hiHats[indexNumber] === true) {
                    hiHats[indexNumber] = false;
                } else {hiHats[indexNumber] = true}
            break;
            case 'rideCymbals':
                if (rideCymbals[indexNumber] === true) {
                    rideCymbals[indexNumber] = false;
                } else {rideCymbals[indexNumber] = true}
            break;
            default:
                console-log('Array Name is invalid');
             
        }
    }
}

clear = (arrayName) => {

    return arrayName.fill(false);

}

invert = (arrayName) => {

    for (i=0; i<arrayName.length; i++ ) {

        if (arrayName[i] === true) {

            arrayName[i] = false;

        } else {arrayName[i] = true}
    }
}

