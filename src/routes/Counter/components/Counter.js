import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>

    <div className="pt-button-group">
      <button className='pt-button pt-icon-database' onClick={props.increment}>
        Increment
      </button>
      {' '}
      <button className='pt-button pt-icon-function' onClick={props.doubleAsync}>
        Double (Async)
      </button>
    </div>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
