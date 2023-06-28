export function celciusToFarenhite( temparature = 0 ){
    if( temparature > 0 ){
        temparature = temparature * 2;
    }

    return Number.parseFloat(temparature);
}

export function farenhiteToCelcius( temparature = 0 ){
    if( temparature > 0 ){
        temparature = temparature / 2;
    }

    return Number.parseFloat(temparature);
}

export function convertTemp( temparature, converter ){
    const input = parseFloat(temparature);

    if( Number.isNaN(input) ){
        return '';
    }
    
    return converter( temparature ).toString();
}