import {
  Fragment,
  createContext,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react'
import { decrypt } from './utils/encrypt'
import Test from './compent/test'
import './App.css'
import { useBoolean, useDebounce, useSize } from 'ahooks'
import { produce } from 'immer'
import Route from './routes/routerOptions'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { setUsername } from './redux/Slice/user'

type GetstateFunType = typeof store.getState
type IRootState = ReturnType<GetstateFunType>

const baseState = [
  {
    todo: 'Learn immer',
    done: true
  },
  {
    todo: 'Use immer with React',
    done: false
  }
]

// 将所有类型变为 可传可不传
type baseStateType = Partial<{
  todo: string
  done: boolean
  value: string
  id: number
}>[]

const nextState = produce((draftState, value) => {
  draftState[1].done = value
})

console.log(nextState(baseState, 'hsahsa'))

const Chirin = forwardRef((props, ref) => {
  const iptRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => {
    return {
      value: iptRef.current && iptRef.current.value
    }
  })
  return (
    <div>
      <input ref={iptRef} type="text" defaultValue={123} />
    </div>
  )
})

export const MyContext = createContext(0)
export default function App() {
  // store
  const { username, id } = useSelector(
    (state: IRootState) => state.userReducer,
    shallowEqual
  )
  const dispatchs = useDispatch()

  const testR = useRef(null)
  const size = useSize(testR)
  const [state, { toggle }] = useBoolean(false)

  const [t, setT] = useState({ text: '' })

  useMemo(() => {
    console.log('组件渲染')
  }, [state])

  // immer使用方式

  // 方式一 方便直观的状态管理修改
  const updateState = (value: string) => {
    setT(
      // produce(state状态, 执行修改状态的回调函数)
      produce(t, (draft) => {
        draft.text = value
      })
    )
  }

  // 方式二 produce函数第一个参数不传 则produce函数调用后会返回一个函数，这个函数形参(state状态, ...agrs)
  // useReducer调用时会默认传2个参数给回调函数(state, action)
  const [list, dispatch] = useReducer(
    produce((state: baseStateType, action: 'bz' | 'dbd') => {
      switch (action) {
        case 'bz':
          return [...state, { value: '包子', id: state.length }]
        case 'dbd':
          return [...state, { value: '生煎包', id: state.length }]
      }
    }),
    baseState
  )
  const ret = useRef(0)
  const ipt = useRef<HTMLInputElement>(null)

  function reft() {
    ret.current++
    console.log(ret.current)
    dispatchs(setUsername(ret.current))
  }
  console.log(ipt.current && ipt.current.value);
  
  return (
    <Fragment>
      <MyContext.Provider value={123}>
        <p>{username}</p>
        <p ref={testR}>2233</p>
        <p>{size?.width}</p>
        <p>{size?.height}</p>
        <p>状态: {String(state)}</p>
        <button onClick={toggle}>切换</button>

        {state ? <Test /> : '无'}
        <div>
          <input type="text" onChange={(e) => updateState(e.target.value)} />
          <p>{t.text}</p>
        </div>
        <button onClick={() => dispatch('bz')}>
          {list[list.length - 1].value || 'start'}
        </button>
        <button onClick={reft}>ref</button>
      </MyContext.Provider>
      <p>路由</p>
      <Route />
      <Link to="/about">about</Link>
      <Link to="/home">home</Link>
      <Chirin ref={ipt} />
    </Fragment>
  )
}
