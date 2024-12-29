import './APPSumma.css'

function App() {

  return (
    <div>
      <form>
      <label for="name">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" id="name"/><br/>
      <label for="nickname"><br/>Nick Name</label>
      <input type="text" id="nickname"/><br/>
      <label><br/>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="date" id="dob"/><br/>
      <label for="gender"><br/>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="radio" id="gender" name="your_gender" value="Male"/>
      <label for="gender">Male</label>
      <input type="radio" id="gender" name="your_gender" value="Female"/>
      <label for="gender">Female<br /><br /></label>
      <label for="address">Address</label>
      <typearea rows="5" cols="40" name="Description" spellcheck="false" />
      <input type="textarea"/><br /><br />
      <button>Submit</button>
      </form>
    </div>
  )
}
export default App