function Header(props) {
  return (
      <header>
        <h1 key={props.name}>{props.name}</h1>
      </header>
  )
}

export default Header