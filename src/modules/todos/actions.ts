import { createAction } from 'typesafe-actions';
import { Todo } from './types';

// 리듀서에서 사용할 수 있도록 타입을 방출한다.
export const ADD_TODO = 'todos/ADD_TODO'
export const REMOVE_TODO = 'todos/REMOVE_TODO'
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextId = 1

// 액션 생성 함수
// 이 액션 생성 함수 같은 경우에는 파라미터를 기반하여, 커스터마이징된 payload를 설정해주므로, createAction 함수 사용.
// 여기서 action은 액션 객체를 만드는 함수이다.
export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text
}))<Todo> ()
export const removeTodo = createAction(REMOVE_TODO)<number>()
export const toggleTodo = createAction(TOGGLE_TODO)<number>()