let count = 0;

function cc(card) {
    // Only change code below this line
    let result;
    if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--
    } else if (2 <= card <= 6) {
        count++
    } else if (7 <= card <= 9) {
        count
    }
    if (count > 0) {
        result = count + " Bet"
    }
    else {
        result = count + " Hold"
    }


    return result;
    // Only change code above this line
}

