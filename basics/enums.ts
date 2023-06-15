//If don't give any value to the enum variables, then it starts from 0
enum seatChoices{
    FIRST, //If you hover it you can see the by default the value will be 0 and rest of the variable follows the value, like FIRST = 0, SECOND = 1 and THIRD = 2
    SECOND,
    THIRD
}

const mySeat = seatChoices.FIRST

/* --------------------------------------------- */

enum seatChoicesUpdated{
    FIRST = 5, //If you hover it you can see the by default the value will be 5 and rest of the variable follows the value, like FIRST = 5, SECOND = 6 and THIRD = 7
    SECOND,
    THIRD
}

const mySeatUpdated = seatChoicesUpdated.FIRST