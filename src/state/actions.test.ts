import * as actions from './actions';
import * as mockData from '../mockData';

describe('actions', () => {
  test('should set is Authenticated', () => {
    const type = 'SET_IS_AUTHENTICATED';
    const expectedAction = { type };
    expect(actions.set_is_authenticated()).toEqual(expectedAction);
  });
  test('should set is Authenticated to false', () => {
    const type = 'SET_NOT_AUTHENTICATED';
    const expectedAction = { type };
    expect(actions.set_not_authenticated()).toEqual(expectedAction);
  });
  test('should logout user', () => {
    const type = 'LOGOUT_USER';
    const expectedAction = { type };
    expect(actions.logout_user()).toEqual(expectedAction);
  });
  test('should set username', () => {
    const type = 'SET_USERNAME';
    const payload = 'Dr.DoofenSchmirtz';
    const expectedAction = { type, payload };
    expect(actions.set_username('Dr.DoofenSchmirtz')).toEqual(expectedAction);
  });

  test('should rewrite store', () => {
    const type = 'REWRITE_STORE';
    const payload = mockData.mockRecipeStore;
    const expectedAction = { type, payload };
    expect(actions.rewrite_store(mockData.mockRecipeStore)).toEqual(
      expectedAction,
    );
  });
  test('should add recipe to store', () => {
    const type = 'ADD_ITEM';
    const payload = mockData.mockRecipe;
    const expectedAction = { type, payload };
    expect(actions.add_item(mockData.mockRecipe)).toEqual(expectedAction);
  });
  test('should delete recipe to store', () => {
    const type = 'DELETE_ITEM';
    const payload = 'mockId';
    const expectedAction = { type, payload };
    expect(actions.delete_item('mockId')).toEqual(expectedAction);
  });
  test('should change recipe name', () => {
    const type = 'CHANGE_NAME';
    const payload = { id: 'mockId', name: 'mockRamen' };
    const expectedAction = { type, payload };
    expect(actions.change_name('mockId', 'mockRamen')).toEqual(expectedAction);
  });
  test('should add note to recipe', () => {
    const type = 'ADD_NOTE';
    const payload = { id: 'mockId', note: 'mockRamen is delish' };
    const expectedAction = { type, payload };
    expect(actions.add_note('mockId', 'mockRamen is delish')).toEqual(
      expectedAction,
    );
  });
  test('should delete note from a recipe', () => {
    const type = 'DELETE_NOTE';
    const payload = { recipeId: 'mockId', noteId: 'mockNoteId' };
    const expectedAction = { type, payload };
    expect(actions.delete_note('mockId', 'mockNoteId')).toEqual(expectedAction);
  });
});
