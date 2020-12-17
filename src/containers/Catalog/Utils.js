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
      if (a.priceInHryvnia > b.priceInHryvnia) return 1;
      else if (a.priceInHryvnia < b.priceInHryvnia) return -1;
      else return 0;
    case "sortingPriceDesc":
      if (a.priceInHryvnia > b.priceInHryvnia) return -1;
      else if (a.priceInHryvnia < b.priceInHryvnia) return 1;
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
  if (filterProducer.size == 0) {
    return inputList;
  }
  let result = inputList.filter((a) => filterProducer.has(a.producer));
  return result;
};

export const executeFilters = (props, sourceList) => {
  data = sourceList;
  let inputList = [...data];
  inputList = sortBy(inputList, props.sortType);
  inputList = filterByProducer(inputList, props.filterProducer);
  return inputList;
};
