import "./ResetButton.css"

const ResetButton = (props) => {
  return (
    <button className="btn" onClick={props.reset}>Resetovat na 0</button>
  )
}

export default ResetButton