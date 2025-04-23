import {useState} from 'react'
// ADD USERS AS A NESTED ROUTE HERE

function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <h1>Learning State using Click Counter</h1>
        <p>You have clicked the button: {count} times ♻️</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Counter