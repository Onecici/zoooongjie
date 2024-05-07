import { memo, useContext } from 'react'
import { MyContext } from '../App'
import { useUnmount } from 'ahooks';

function test() {
  const context = useContext(MyContext)
  console.log('子组件');

  useUnmount(() => {
    console.log('卸载了');
    
  })
  
  return <div>{context}</div>
}

export default memo(test)
