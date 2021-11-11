import React from 'react'

export default function Register(){
  return(
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-7">
            <div className="card px-5 py-4" id="form1">
                <div className="form-data" v-if="!submitted">
                    <div className="text-center mb-4">
                        <h4>Register Now</h4>
                    </div>
                    <div className="forms-inputs mb-4"> <span>Email</span> <input type="text"/>
                        <div className="invalid-feedback">A valid email is required!</div>
                    </div>
                    <div className="forms-inputs mb-4"> <span>Username</span> <input type="text"/>
                        <div className="invalid-feedback">A valid username is required!</div>
                    </div>
                    <div className="forms-inputs mb-4"> <span>Phone</span> <input type="text"/>
                        <div className="invalid-feedback">A valid phone is required!</div>
                    </div>
                    <div className="forms-inputs mb-4"> <span>Password</span> <input type="password"/>
                        <div className="invalid-feedback">Password must be 8 character!</div>
                    </div>
                    <div className="mb-3"> <button className="btn btn-dark w-100">Register</button> </div>
                </div>
                <div className="success-data" v-else>
                    <div className="text-center d-flex flex-column"> <i className='bx bxs-badge-check'></i> <span className="text-center fs-3">Create an account <br/>to play</span> </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}