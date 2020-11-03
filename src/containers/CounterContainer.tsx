import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules'
import { decrease, increase, increaseBy } from '../modules/counter';

const CounterContainer = () => {
  // 상태를 조회한다. 상태를 조회할 때에는 state의 타입을 RootState로 지정해야 한다.
  const count = useSelector((state: RootState) => state.counter.count)
  // 디스패치 함수를 가져온다.
  const dispatch = useDispatch()

  // 각 액션들을 디스패치 하는 함수를 만들어준다.
  const onIncrease = () => {
    dispatch(increase())
  }
  const onDecrease = () => {
    dispatch(decrease())
  }
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff))
  }

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  )
}

export default CounterContainer;