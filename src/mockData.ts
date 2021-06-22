import { IRecipe } from './interfaces';

export const mockRecipe: IRecipe = {
  _id: '60d20d2ecd08a332200578f0',
  author: 'Adrianne',
  image:
    'https://sweetcaramelsunday.com/wp-content/uploads/2019/06/Hash-Brown-Grilled-Cheese-19.jpg',
  keywords: ['grilled cheese', ' hash brown', ' vegetarian grilled cheese'],
  name: 'Hash Brown Grilled Cheese',
  notes: [],
  origin: 'asdf',
  recipeIngredient: [
    '4 slices rye sourdough',
    '40 grams butter  (Note 1 )',
    '2  hash browns',
  ],
  recipeInstructions: [],
  recipeYield: '',
  url: 'https://sweetcaramelsunday.com/hash-brown-grilled-cheese/',
};

export const mockRecipeStore: IRecipe[] = new Array(5).fill(mockRecipe);
