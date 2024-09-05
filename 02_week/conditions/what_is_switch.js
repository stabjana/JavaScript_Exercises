switch (expression) {
    case value1:    //code to execute
        break;
    case value2:    //code to execute
        break;
        defalut:        //code if no match
}


switch (day) {
    case 'Margit':					// case number is 1 (1 is the value)
        console.log('Monday');
        break;
    case 'Maria':
        console.log('Tuesday')
        break;		// ——————> // same as return but in switch (necessary to stop, when it has the answer already)
    default:					// if the case is not mentioned, this is the default answer
        console.log('Invalid day');
}