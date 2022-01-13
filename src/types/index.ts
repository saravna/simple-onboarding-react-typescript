import form from "../form.json";

export type ValueOf<T> = T[keyof T];

export type FormValueType = ValueOf<typeof form>;

export type CardSelectOption = {
  title: string;
  description: string;
  key: string;
  value: string;
}
