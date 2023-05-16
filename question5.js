function reverseHollowTrianglePattern(rows) {
    let pattern = '';
    for (let i = rows; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        if (i === 1 || i === rows || j === 1 || j === i) {
          pattern += '*';
        } else {
          pattern += ' ';
        }
      }
      pattern += '\n';
    }
    return pattern;
  }
  
  // Test the function
  const numberOfRows = 6;
  const result = reverseHollowTrianglePattern(numberOfRows);
  console.log(result);
