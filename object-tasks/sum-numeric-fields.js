function sumNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'number') { 
        sum += obj[key];
      }
    }
    return sum;
  }
  
  const obj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
  console.log(sumNumericFields(obj));
  