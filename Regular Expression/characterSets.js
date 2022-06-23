
//////////////////// ######################## ------------- CHARACTER SETS ----------------

// let regex = /v[a-z]vek/;            //  Could have anything between a to z
// let regex = /viv[qwe]k/;            // Could be anything between q or w or e.
// let regex = /viv[ewe0-9]k/;         // Could be anything between e or w or e or anything between 0-9.
// let regex = /viv[^sdA-Z]k/;         // Could be anyting BUT s or d or anything between A-Z.
// let regex = /viv[^sdA-Z][a-zA-Z]/;  // Could be anyting BUT s or d or anything between A-Z.

//////////////////// ######################## ------------- QUANTIFIERS ----------------

// let regex = /vive{2}k/;               // Matches if 'e' repeated exactly twice at that particular index.
// let regex = /vive{1,2}k/;             // Matches if 'e' repeated exactly once to twice at that particular index.
// let regex = /vive{0,1}k/;             // Matches if 'e' repeated exactly from none to once at that particular index.

//////////////////// ######################## ------------- GROUPINGS ----------------

// let regex = /(viv){2}k/;               // Mathces if 'viv' has exactly two occurances.
// let regex = /(viv){2}([0-9r]{2})/;      // Mathces if 'viv' has exactly two occurances following should have a combination of any number 0-9 and r repeated twice.

//////////////////// ######################## ------------- CHARACTER CLASSES ----------------
// Word Characters: (a-z,A-Z,0-9 and _ )

// let regex = /\wood/;                  // Escaping single word caharacter 
// let regex = /\w+d/;                   // Escaping multiple word caharacter
// let regex = /\Wd/;                    // Escaping Single NON word caharacter
// let regex = /\W+d/;                   // Escaping Multiple NON word caharacter
// let regex = /boy \d9/;                // Escaping Single digit character.
// let regex = /boy \d+9/;               // Escaping Multiple digit character.
// let regex = /\D9/;                    // Escaping Single NON digit character.
// let regex = /\D+9/;                   // Escaping Multiple NON digit character.
// let regex = /\s is a/;                // Escaping Single White Space(Double Space) character/characters.
// let regex = /\s+ is a/;               // Escaping Multiple White Space(More than two spaces) character/characters.
// let regex = /\S is a/;                // Escaping Single NON White Space character/characters.
// let regex = /\S+ is a/;               // Escaping Multiple NON White Space character/characters.
// let regex = /i9\b/;                   // Matches if word break happens at said index.
// let regex = /v(?=i)/;                   // Matches if 'v' is followed by 'i' at the said index.
let regex = /v(?!i)/;                   // Matches if 'v' is NOT followed by 'i' at the said index.

let s = 'virr        is a $#@$d boy 99hji9.';  

let result = regex.exec(s);
console.log(result);


