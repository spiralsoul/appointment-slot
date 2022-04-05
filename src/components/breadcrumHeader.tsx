import React from 'react'
import { appointmentSlots, createAppointmentSlot, groups } from '../libs/constants/constant';

type props = {
  title:string;
}

export default function BreadcrumHeader({title}:props) {
  return (
    <div className="topHeader">
            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex appointmentSlotsContainer">
                  <div className="circleContainer">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                  <h4>{title}</h4>
                </div>
                <div className="col-md-8 ml-auto d-flex">
                  <ul className="navBar">
                    <li>
                      <a href="/"> <i className="fa fa-home" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/"> <i className="arrowForward" aria-hidden="true"></i>
                        {groups} </a>
                    </li>
                    <li>
                      <a href="/"> <i className="arrowForward" aria-hidden="true"></i>
                        {appointmentSlots} </a>
                    </li>
                    <li>
                      <a href="/" className="active"> <i className="arrowForward" aria-hidden="true"></i>
                        {title} </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  )
}
