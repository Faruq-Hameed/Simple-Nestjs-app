const dataArr = [2, 3, 5, 6, 8, 'Jack', 'Queen', 'King'];

const printData = (data) => {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
        
      console.log(data[i]); //Printing each element in the array
    }
  } else {
    console.log('Input is not an array');
  }
};

// printData(dataArr);//Each element in the array is printed

const newData = ['Jack', 'Queen', 'King'];

const finalPrintData = () => {
    dataArr.push(...newData);

    //sort the data
    dataArr.sort();
    printData(dataArr);
}

finalPrintData()