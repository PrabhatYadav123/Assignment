import React from 'react'


function LoginPage(props) {
    const { search, onInputChange, onSearchClick } = props;
    return (
        <div className="bg-light p-4">
            <h1 className="text-center"> Here Photos From Unsplash</h1>
            <div className="mb-3 w-50 mx-auto">
                <label className="form-label">Name</label>
                <input type="email" className="form-control"  placeholder="Enter-Your-Name" />
            </div>
            <div className="mb-5 w-50 mx-auto">
                <label className="form-label">Email</label>
                <input type="email" className="form-control  "  placeholder="Enter Your Email ID" />
            </div>
            <div className="input-group mb-3 w-25 mx-auto">
                <input type="text" className="form-control" placeholder="Search Your Photos" value={search} onChange={onInputChange}/>
                <button className="btn btn-dark" onClick={onSearchClick}><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default LoginPage
