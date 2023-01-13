const btnNode = document.querySelector(`.btn`);
const resultNode = document.querySelector(`.result`);

function displayResult(apiData) {
  let cards = "";
  apiData.forEach((item) => {
    const cardBlock = `<div class="card1">
          <img
            src="${item.download_url}"
            class="card-image1"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

const jsonLocal = localStorage.getItem(`jsonLocal`);
if (jsonLocal) {
  displayResult(JSON.parse(jsonLocal));
}

btnNode.addEventListener(`click`, () => {
  const inputNode1 = Number(document.querySelector(".inp1").value);
  const inputNode2 = Number(document.querySelector(".inp2").value);
  const picUrl = `https://picsum.photos/v2/list?page=${inputNode1}&limit=${inputNode2}`;
  const ruleInp1 = inputNode1 >= 1 && inputNode1 <= 10;
  const ruleInp2 = inputNode2 >= 1 && inputNode2 <= 10;

  if (ruleInp1 && ruleInp2) {
    return fetch(picUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        displayResult(data);
        localStorage.setItem("jsonLocal", JSON.stringify(data));
      });
  } else if (!ruleInp1 && !ruleInp2) {
    resultNode.innerHTML = `Номер страницы и лимит вне диапазона от 1 до 10`;
  } else if (!ruleInp1) {
    resultNode.innerHTML = `Номер страницы вне диапазона от 1 до 10`;
  } else if (!ruleInp2) {
    resultNode.innerHTML = `Лимит вне диапазона от 1 до 10`;
  }
});
