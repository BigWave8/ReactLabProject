let data = [];

export const comparator = (a, b, standard) => {
    switch (standard) {
        case "sortingTargetAgeAsc":
            if (a.targetAge > b.targetAge) return 1;
            else if (a.targetAge < b.targetAge) return -1;
            else return 0;
        case "sortingTargetAgeDesc":
            if (a.targetAge > b.targetAge) return -1;
            else if (a.targetAge < b.targetAge) return 1;
            else return 0;
        case "sortingPriceAsc":
            if (a.price > b.price) return 1;
            else if (a.price < b.price) return -1;
            else return 0;
        case "sortingPriceDesc":
            if (a.price > b.price) return -1;
            else if (a.price < b.price) return 1;
            else return 0;
    }
};

export const sortBy = (inputList, sortType) => {
    if (sortType === "default") {
        return [...data];
    }
    let result = inputList.sort((a, b) => comparator(a, b, sortType));
    return result;
};

export const filterByProducer = (inputList, filterProducer) => {
    if (filterProducer === "default") {
        return inputList;
    }
    let result = inputList.filter(
        (a) => a.producer === filterProducer
    );
    return result;
};

export const filterByTargetAge = (inputList, filterTargetAge) => {
    if (filterTargetAge === "default") {
        return inputList;
    }
    let result = inputList.filter(
        (a) => a.targetAge === filterTargetAge.toLowerCase().substr(9)
    );
    return result;
};

export const filterByPrice = (inputList, filterPrice) => {
    if (filterPrice === "default") {
        return inputList;
    }
    let result = [];
    console.log("filter price", result);
    return result;
};

export const executeFilters = (props, sourceList) => {
    data = sourceList;
    let inputList = [...data];
    inputList = sortBy(inputList, props.sortType);
    inputList = filterByProducer(inputList, props.filterProducer);
    inputList = filterByTargetAge(inputList, props.filterTargetAge);
    inputList = filterByPrice(inputList, props.filterPrice);
    return inputList;
};