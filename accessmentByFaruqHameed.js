const dataArr = [2, 3, 5, 6, 8, 'Jack', 'Queen', 'King'];

const printSorted =() => {
    const newData = ['Jack', 'Queen', 'King'];
    const results =[...dataArr]
    results.push(...newData)
    console.log(results);
}

//printing the data insort order seperated by commas
printSorted(dataArr.join(','));