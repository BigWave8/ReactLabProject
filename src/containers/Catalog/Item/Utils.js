export const findPriceTag = (item) => {
    if (item.price < 100) {
        return "Price lower 100";
    } else if (item.price < 500) {
        return "Price over 100";
    }   else if (item.price < 2000) {
        return "Price over 500";
    } else {
        return "Price over 2000";
    }
};

export const findTargetAgeTag = (item) => {
    if (item.targetAge < 8) {
        return "Target Age lower 8";
    } else if (item.targetAge < 18) {
        return "Target Age lower 18";
    } else if (item.targetAge < 30) {
        return "Target Age over 18";
    } else if (item.targetAge < 65) {
        return "Target Age over 30";
    } else {
        return "Target Age over 65";
    }
};

export const findProducerTag = (item) => {
    if (item.producer === "Ukraine") {
        return "Made in Ukraine";
    } else if (item.producer === "USA") {
        return "Made in USA";
    } else if (item.producer === "Poland") {
        return "Made in Poland";
    } else if (item.producer === "Spanish") {
        return "Made in Spanish";
    } else if (item.producer === "Japan") {
        return "Made in Japan";
    } else if (item.producer === "China") {
        return "Made in China";
    }
    return "";
};

const priceOfOptions = {
    cover: 10,
    sequins: 20,
    gold: 1000,
    diamond: 5000,
    pen: 15,
    default: 0,
};

export const calculateAdditionPrice = (addition, penNumber) => {
    let optionPrice = 0;
    if (addition.includes("cover")) {
        optionPrice += priceOfOptions["cover"];
    }
    if (addition.includes("sequins")) {
        optionPrice += priceOfOptions["sequins"];
    }
    if (addition.includes("gold")) {
        optionPrice += priceOfOptions["gold"];
    }
    if (addition.includes("diamond")) {
        optionPrice += priceOfOptions["diamond"];
    }
    optionPrice += priceOfOptions["pen"] * penNumber;
    return optionPrice;
};