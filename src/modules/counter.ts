import { ActionType, createAction, createReducer } from 'typesafe-actions';
/*
  액션 타입을 선언.
  뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
  action.type이 string으로 추론되지 않고, 'counter/INCREASE'와 같이
  실제 문자열 값으로 추론 되도록 한다.
*/
// const INCREASE = 'counter/INCREASE'
// const DECREASE = 'counter/DECREASE'
// const INCREASE_BY = 'counter/INCREASE_BY'

// 액션 생성 함수
export const increase = createAction('counter/INCREASE')()
export const decrease = createAction('counter/DECREASE')()
export const increaseBy = createAction('counter/INCREASE_BY')<number>() // payload 타입을 Generics로 설정해주세요.

const actions = { increase, decrease, increaseBy } // 모든 액션 생성함수들을 actions 객체에 넣는다.
type CounterAction = ActionType<typeof actions> // ActionType을 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있다.

/*
  모든 액션 객체에 대한 타입을 준비한다.
  ReturnType<typeof ___>는 특정 함수의 반환값을 추론한다.
  상단부에서 액션타입을 선언할 때, as const를 하지 않으면 제대로 작동하지 않는다.
*/

// 리덕스 모듈에서 관리할 상태 타입을 선언한다.
type CounterState = {
  count: number;
}

// 초기 상태를 선언한다.
const initialState: CounterState = {
  count: 0
}

/*
  리듀서를 작성한다.
  리듀서에서는 state와 함수의 반환값이 일치하도록 작성한다.
  액션에서는 우리가 방금 만든 CounterAction을 타입으로 설정한다.
  creaseReducer는 리듀서를 쉽게 만들수 있게 해주는 함수이다.
  Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리할 모든 액션 객체들의 타입을 넣어야한다.
*/
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({ count: state.count + action.payload }))

export default counter;