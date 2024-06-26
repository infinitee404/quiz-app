import 'boxicons'

const Navbar = ({ handleChange, isChecked }) => {
  const darkStyle = "#232323"
  const lightStyle = "#f1f1f1" 

  const handleKeyPress = (event, category) => {
    if (event.keyCode === 13) {
      handleChange()
    }
  }

  return (
    <nav className="navbar">
        <box-icon name="sun" type="solid" color={isChecked ? darkStyle : lightStyle } />
        <div 
          className="toggle-space" 
          tabIndex="0"
          onKeyDown={(e) => handleKeyPress(e)}
        >
          <input 
            type="checkbox" 
            id="mode-toggle" 
            className="mode-checkbox"
            onChange={handleChange}
            checked={isChecked}
            hidden
          />
          <label 
            htmlFor="mode-toggle" 
            className="toggle-button" 
          />
        </div>
        <box-icon name="moon" type="solid" flip="horizontal" color={isChecked ? darkStyle : lightStyle } />
    </nav>
  )
}

export default Navbar