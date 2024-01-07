const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll(".select-container select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const result = document.querySelector(".msg p");
// const image=document.querySelectorAll(".select-container img");
// console.log(image);
// console.log(dropdowns);
const button = document.querySelector("button");
for (select of dropdowns) {
    for (currCode in countryList) {

        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.name == "from" && currCode == "INR") {
            newOption.selected = "selected";
        }
        else if (select.name == "to" && currCode == "NPR") {
            newOption.selected = "selected";
        }
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);

    });

}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    element.parentElement.querySelector("img").src = newSrc;

}

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtVal = amount.value;
    if (amtVal == "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;

    }
    //  console.log(fromCurr.value,toCurr.value);
    //  console.log(amtVal);
    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let exchangeRate = data[toCurr.value.toLowerCase()];
    // console.log(exchangeRate);
    let finalAmount = amtVal * exchangeRate;
    result.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
});