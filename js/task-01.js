//part1
const catList = document.getElementById('categories');
const catItems = catList.querySelectorAll('li.item');
console.log(`Number of categories: ${catItems.length}`); 

//part2
catItems.forEach(item => {

    const catTitle = item.querySelector('h2').textContent;
    const catEl = item.querySelectorAll('li');

    console.log(`Category: ${catTitle}`);
    console.log(`Elements: ${catEl.length}`);
  });