const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }

    // Get backwards test
    const reverseWord = word.split('').reverse().join('');

    const verticalWords = function(matrix) {
        const inputRows = matrix.length;
        const inputColumns = matrix[0].length;
        
        const wordArray = [];
        
        for(let row = 0; row < inputColumns; row++){
            let verticalWord = '';
            for(let col = 0; col < inputRows; col++) {
            verticalWord += matrix[col][row];
            }
            wordArray.push(verticalWord);
        }
        
        return wordArray;
    };
    
    const diagonalWords = function(matrix) {
        const inputRows = matrix.length;
        const inputColumns = matrix[0].length;
        
        const wordArray = [];

        for(let n = 0; n < inputColumns + inputRows - 1; n++) {
            let diagonalWordTop = '';
            let row = n;
            let col = 0;
            
            let diagonalWordBottom = '';
            let bRow = inputRows - 1 - n;

            while (row >= 0 && col < inputColumns) {
                if (row < inputRows) {
                    diagonalWordTop += matrix[row][col];
                }
                if (bRow >= 0) {
                    diagonalWordBottom += matrix[bRow][col];
                }

                row--;
                col++;
                bRow++;
            }
            wordArray.push(diagonalWordTop);
            wordArray.push(diagonalWordBottom);
        }
        
        return wordArray;
    };

    // Add horizontal words
    const possibleWords = letters.map(ls => ls.join(''))

    // Add Vertical Words
    possibleWords.push(...verticalWords(letters));

    // Add Diagonal Words
    possibleWords.push(...diagonalWords(letters));

    // Test for word in possible words
    for (l of possibleWords) {
        if (l.includes(word) || l.includes(reverseWord)) return true
    }
    
    return false;
}


module.exports = wordSearch