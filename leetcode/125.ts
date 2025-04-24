function isPalindrome(s: string): boolean {
    const str = s.replace(/[,: ]/g, '').toLowerCase();
    const rev = str.split('').reverse().join('');
    console.log(rev);
    if (str === rev){
        return true;
    } else{
        return false;
    }
};

console.log(isPalindrome('0P'));
