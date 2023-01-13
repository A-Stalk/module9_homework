const btnNode = document.querySelector(`.btn`);
const resultNode = document.querySelector(`.result`);

btnNode.addEventListener(`click`, () => {
  const inputNode1 = Number(document.querySelector(".inp1").value);
  const inputNode2 = Number(document.querySelector(".inp2").value);
  const picUrl = `https://picsum.photos/${inputNode1}/${inputNode2}`;

  if (
    inputNode1 >= 100 &&
    inputNode1 <= 300 &&
    inputNode2 >= 100 &&
    inputNode2 <= 300
  ) {
    return fetch(picUrl)
      .then((response) => {
        let result = response.url;
        return result;
      })
      .then((data) => {
        resultNode.innerHTML = `<img
        src="${data}" 
        class="card-image2"/>`;
      });
  } else {
    resultNode.innerHTML = `одно из чисел вне диапазона от 100 до 300`;
  }
});
