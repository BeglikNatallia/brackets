module.exports = function check(str, bracketsConfig) {
    let checkArr = str.split('');

    for (let i = 0; i < checkArr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let openBracket = checkArr[i] === bracketsConfig[j][0];
            let closeBracket = checkArr[i + 1] === bracketsConfig[j][1];
            if (openBracket && closeBracket) {
                checkArr.splice(i, 2);
                i = -1;
            }
        }

        if (checkArr.length === 0) {
            return true;
        }
    }

    return false;
};
