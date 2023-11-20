

const Container =({children, myValue}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <h3>o valor e {myValue}</h3>
    </div>
  )
}

export default Container;