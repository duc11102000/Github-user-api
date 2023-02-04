function Logout() {
  function handleClick() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="logout-button">
        <button onClick={handleClick}>Logout</button>
    </div>
  ) 
}

export default Logout;
