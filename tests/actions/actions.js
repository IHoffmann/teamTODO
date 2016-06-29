/**
 * Created by ihoffmann on 6/28/16.
 */

import * as exampleActions from 'actions/actions';

describe('Actions', () => {
    describe('addTodo action', () => {
        it('should create an action to add a new Todo', () => {
            expect(exampleActions.addTodo('Isaac', 'TEST')).toEqual({
                type:'ADD_TODO',
                id:3,
                text:'TEST',
                userName:'Isaac'
            });
        })
    });
    describe('addUser action', () => {

    });
    describe('setVisibilityFilter action', () => {

    });
    describe('toggleTodo action', () => {

    });
});