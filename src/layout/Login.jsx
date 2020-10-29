import react from 'react'

export default function Login(){
  return(
    <div className="Login">
      <form>
          <p>Username</p>
          <input type="text" name="username" id="">
          <p>Password</p>
          <input type="password" name="password" id="">
          <br>
          <button type="submit">Log In</button>
          <button type="reset">Reset</button>
      </form>
    </div>
  )
}
