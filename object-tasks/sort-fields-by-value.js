function sortFieldsByValue(obj) {
    const entries = Object.entries(obj);
  
    const numericEntries = entries.filter(([key, value]) => typeof value === 'number');
  
    numericEntries.sort((a, b) => b[1] - a[1]);
  
    return numericEntries.map(entry => entry[0]);
  }
  
  const obj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
  console.log(sortFieldsByValue(obj));
  