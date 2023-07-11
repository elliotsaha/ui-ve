export const isObject = (potentialObj: unknown): boolean =>
  typeof potentialObj === "object" && potentialObj !== null && !Array.isArray(potentialObj);

type SimpleObj = Record<string | number, unknown>;

export const flattenObj = <T = string>(obj: SimpleObj, parentKey?: string): Record<string, T> => {
  let result: Record<string, T> = {};

  const keys: Array<keyof SimpleObj> = Object.keys(obj);

  keys.forEach((key: keyof SimpleObj) => {
    const val = obj[key];
    const _key = parentKey ? `${parentKey}.${key}` : key;

    if (isObject(val)) {
      // recursively accesses deepest node and append children keys to _key var
      result = { ...result, ...flattenObj(val as SimpleObj, _key as string) };
    } else {
      result[_key] = val as T;
    }
  });

  return result;
};
