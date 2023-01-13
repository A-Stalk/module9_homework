const btnNode = document.querySelector(`.btn`);
const resultNode = document.querySelector(`.result`);

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, url, true);
  xhr.onload = function () {
    const result = JSON.parse(xhr.response);
    if (callback) {
      callback(result);
    }
  };
  xhr.send();
}

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

btnNode.addEventListener(`click`, () => {
  const inputNode = Number(document.querySelector("input").value);
  const picUrl = `https://picsum.photos/v2/list?limit=${inputNode}`;
  if (inputNode >= 1 && inputNode <= 10) {
    useRequest(picUrl, displayResult);
  } else {
    resultNode.innerHTML = `Число вне диапазона от 1 до 10`;
  }
});
