var lengthOfLongestSubstring = function(s) {
    let subStr = [];
    let maxStr = [];
    s.split('').forEach((char, index) => {
        let pos = subStr.indexOf(char);
        if(pos > -1){
            subStr = subStr.slice(pos + 1, index);
        }
        subStr.push(char);
        if(subStr.length > maxStr.length){
            maxStr = subStr;
        }
    });
    return maxStr.length;
};

var s = lengthOfLongestSubstring('dvdf');