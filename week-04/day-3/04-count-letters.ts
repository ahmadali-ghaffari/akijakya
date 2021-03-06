export class Letters {
    public countLetters (word:string) {
        let letters = {};
        word.split('').forEach(function (e) {
            if (letters[e] === undefined) {
                letters[e] = 1;
            } else {
                letters[e] += 1;
            }
        });
        return letters;
    }
}