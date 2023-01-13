const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, `text/xml`);
const studentNode = xmlDOM.querySelectorAll(`student`);

let studentList = [];

studentNode.forEach((item) => {
  const nameNode = item.querySelector(`name`);
  studentList.push({
    name: `${item.querySelector(`first`).textContent} ${
      item.querySelector(`second`).textContent
    }`,
    age: Number(item.querySelector(`age`).textContent),
    prof: item.querySelector(`prof`).textContent,
    lang: nameNode.getAttribute(`lang`),
  });
});

const result = {
  list: studentList,
};

console.log(result);
