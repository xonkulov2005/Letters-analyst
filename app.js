const textarea = document.querySelector("textarea");
const list = document.querySelector("#list");

textarea.addEventListener("input", () => {
  const elementsCounter = [];
  const elements = textarea.value.split("");

  elements.forEach((el) => {
    const item = elementsCounter.find((e) => Object.keys(e)[0] == el);
    if (item) {
      item[el] += 1;
    } else {
      elementsCounter.push({ [el]: 1 });
    }
  });

  list.textContent = "";

  elementsCounter.forEach((el) => {
    const length = textarea.value.length;
    const key = Object.keys(el)[0];
    const percentage = ((el[key] / length) * 100).toFixed(2);

    const item = document.createElement("li");
    const wrapper = document.createElement("div");
    const proccess = document.createElement("div");
    const result = document.createElement("div");
    const spanChar = document.createElement("span");
    const spanCount = document.createElement("span");
    const spanPercent = document.createElement("span");

    wrapper.classList.add("wrapper");
    proccess.classList.add("proccess");
    proccess.style.width = `${percentage}%`;
    wrapper.appendChild(proccess);

    spanChar.textContent = key;
    spanCount.textContent = el[key];
    spanPercent.textContent = `(${percentage}%)`;

    result.classList.add("result");
    result.append(spanChar, spanCount, spanPercent);

    item.append(spanChar, wrapper, result);
    list.appendChild(item);
  });
});
