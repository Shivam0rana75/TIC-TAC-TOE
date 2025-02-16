export const winningConditions = [
    // Rows
    [{ row: 0, column: 0 }, { row: 0, column: 1 }, { row: 0, column: 2 }],
    [{ row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 }],
    [{ row: 2, column: 0 }, { row: 2, column: 1 }, { row: 2, column: 2 }],
  
    // Columns
    [{ row: 0, column: 0 }, { row: 1, column: 0 }, { row: 2, column: 0 }],
    [{ row: 0, column: 1 }, { row: 1, column: 1 }, { row: 2, column: 1 }],
    [{ row: 0, column: 2 }, { row: 1, column: 2 }, { row: 2, column: 2 }],
  
    // Diagonals
    [{ row: 0, column: 0 }, { row: 1, column: 1 }, { row: 2, column: 2 }],
    [{ row: 0, column: 2 }, { row: 1, column: 1 }, { row: 2, column: 0 }]
  ];
  
  console.log(winningConditions);
  