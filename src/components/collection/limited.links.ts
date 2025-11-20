export function limitedLinks(rawElements: string[], limit: number) {
  const uniqueElements = [...new Set(rawElements.flat())].sort();

  const a = (array: string[], item: string) => {
    return array.filter((b: string) => b == item).length;
  };
  
  const allElementsObject = uniqueElements.map(element => {
    return {
      'name': element,
      'count': (a(rawElements, element)),
    }
  });
  
  const countSortedElements = allElementsObject.sort(({count:a}, {count:b}) => b-a);
  const limitedElements = countSortedElements.slice(0, limit);
  
  return limitedElements.sort(function (a, b) {
    var textA = a.name;
    var textB = b.name;
  
    return textA.localeCompare(textB);
  });
}