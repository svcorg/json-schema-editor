export const plainify = (value: any) => {
  if (!value) return value;
  return JSON.parse(JSON.stringify(value));
};
