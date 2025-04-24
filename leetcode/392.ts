function isSubsequence(s: string, t: string): boolean {
    for (let i = 0; 0 < s.length; i++){
        console.log(t[i]);
        if (t.includes(s[i])){
            continue;

        }
        else
        {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence('abc', 'safgbllc'));