import react from 'react'

export default function Register(){
  return(
      <div className="Register container">
          <form>
              <div className="form-row">
                  <div className="form-group col-md-6">
                      <label for="inputFname">First Name</label>
                      <input type="text" className="form-control" placeholder="First name"/>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="inputLname">Last Name</label>
                      <input type="text" className="form-control" placeholder="Last name"/>
                  </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail">Email</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="email@domain.com"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPasword">Password</label>
                  <input type="password" className="form-control" id="inputPasword" placeholder="p4ssw0rd!@#"/>
                  <small id="passwordHelpBlock" className="form-text text-muted">
                      Password must be 8 characters minimum, contain letters, numbers, and must not contain spaces, special characters, or emoji.
                    </small>
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Additional Address</label>
                <input type="text" className="form-control" id="inputAddressAddition" placeholder="Apartment, studio, or floor"/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Register</button>
            </form>
      </div>
  )
}
