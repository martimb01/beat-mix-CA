// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

toggleDrum = (arrayName, indexNumber) => {

    if ( arrayName===undefined || indexNumber === undefined ) {
        return console.log('Missing arguments!')
    }

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
            case 'hiHats':
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
    
    if (arrayName === 'kicks') {
        kicks.fill(false);
    } else if (arrayName === 'snares') {
        snares.fill(false);
    } else if (arrayName === 'hiHats') {
        hiHats.fill(false);
    } else if (arrayName === 'rideCymbals') {
        rideCymbals.fill(false)
    } else {console.log('Array name is invalid!!')}
    
}

invert = (arrayName) => {
    if (arrayName === 'kicks') {

        for (i=0; i<kicks.length; i++) {
            if (kicks[i]=== true) {
                kicks[i] = false;
            } else {kicks[i] = true}
        }
        
    } else if (arrayName === 'snares') {
        
        for (i=0; i<snares.length; i++) {
            if (snares[i]=== true) {
                snares[i] = false;
            } else {snares[i] = true}
        }

    } else if (arrayName === 'hiHats') {
        
        for (i=0; i<hiHats.length; i++) {
            if (hiHats[i]=== true) {
                hiHats[i] = false;
            } else {hiHats[i] = true}
        }

    } else if (arrayName === 'rideCymbals') {
        
        for (i=0; i<rideCymbals.length; i++) {
            if (rideCymbals[i]=== true) {
                rideCymbals[i] = false;
            } else {rideCymbals[i] = true}
        }
    } else {console.log('Array name is invalid!!')}
}


 

