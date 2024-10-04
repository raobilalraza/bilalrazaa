function countWords() {
   
    const sentence = prompt("Please enter a sentence:");
    
    
    const trimmedSentence = sentence.trim();
    
    
    let wordCount = 0;

    
    let inWord = false;

   
    for (let i = 0; i < trimmedSentence.length; i++) {
        const char = trimmedSentence[i];

        
        if (char === ' ') {
            inWord = false; 
        } else {
           
            if (!inWord) {
                wordCount++;
                inWord = true; 
            }
        }
    }

    
    alert(`Total number of words: ${wordCount}`);
}
countWords();
