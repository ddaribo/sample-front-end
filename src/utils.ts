export const camelToSnakeCase = (key: string) => key.replace(
    /([A-Z])/g,
    (letter) => `_${letter.toLowerCase()}`
  );
