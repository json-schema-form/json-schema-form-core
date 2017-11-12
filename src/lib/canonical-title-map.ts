/**
 * I take a titleMap in enum, array or object format and return it
 * in the array titleMap format.
 *
 * @param {Array<any>} titleMap
 * @param {*} originalEnum
 */
export default function(titleMap: Array<any>, originalEnum?: any) {
  if (!Array.isArray(titleMap)) {
    const canonical: Array<any> = [];
    if (originalEnum) {
      originalEnum.forEach((value: string) => {
        canonical.push({ name: titleMap[value], value });
      });
    }
    else {
      Object.keys(titleMap).forEach((value: string) => {
        canonical.push({ name: titleMap[value], value });
      });
    }
    return canonical;
  }
  return titleMap;
}
