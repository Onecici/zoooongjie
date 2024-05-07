export type ItemType = {
  id: string;
  title: string;
};

export type ItemFnT = (obj: {
  item: ItemType;
  onPress: () => void;
  style: {backgroundColor: string};
}) => React.JSX.Element;
