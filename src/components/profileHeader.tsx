import React from 'react'
import Avatar from '../images/avatar.webp';

export default function ProfileHeader() {
  return (
    <div className="topBar w-100">
            <div className="container">
              <div className="row w-100">
                <div className="col-md-9">
                  <div className="search d-flex"> <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder="Search anything" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="avatarContainer d-flex">
                    <img src={Avatar} alt='profile Icon' width={40} height={40} />
                    <div className="aboutAvatar">
                      <p className="name">Mr Luis</p>
                      <p className="about">Patient</p>
                      <span className="iconDown"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
