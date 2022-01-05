import { FC } from 'react';
import { atom, useRecoilValue } from 'recoil';

interface Counter {
  count: number
}

const initialState: Counter = {
  count: 10
}

const layoutState = atom({
  key: 'counter',
  default: initialState
})

const Test: FC = () => {
  // The error occurs when recoil hooks are used.
  const counter = useRecoilValue(layoutState)
  return <div>Count is: {counter.count}</div>
}

export default Test
