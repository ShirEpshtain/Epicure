export interface Dish {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
  sides: string[];
  changes: string[];
  quantity?: number; // Add quantity property
  selectedSide?: string; // Add selectedSide property
  selectedChanges?: string[]; // Add selectedChanges property
}
