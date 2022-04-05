import React, { useState } from 'react'
import BreadcrumHeader from '../components/breadcrumHeader'
import FilterHeader from '../components/filterHeader'
import ProfileHeader from '../components/profileHeader'
import SideMenu from '../components/sideMenu'
import SlotListingHeading from '../components/slotListingHeading'
import useAppState from '../libs/hooks/useAppState'
import { getFormattedDate } from '../libs/services/appointmentServiceHelper'

const cuttentDate = getFormattedDate(new Date());

export default function AppointmentSlotsListing() {
  const { state, setState } = useAppState();

  const [date, setDate] = useState(cuttentDate);

  const onDateChange = (changedDate: string) => setDate(changedDate);

  const noApointmentView = () => (<div className="mt-4">No Appointment found</div>)

  return (
    <div id="main">
      <div className="sideMenuContainer">
        <SideMenu />
      </div>
      <div className="App">
        <ProfileHeader />
        <hr />
        <BreadcrumHeader title="Appointment Slots" />
        <hr />
        <FilterHeader date={date} onDateChange={onDateChange} />
        <SlotListingHeading />

        {state.slotList.find(item => item.date === date)?.slots.map(slot => {
          return (
            <div className="container">
              <div className="row outerOfAppointmentDetail">
                <div className="col-md-2 d-flex justify-content-start">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="col-md-4 d-flex justify-content-start">
                  <p className="timingText">{slot.slotStartTiming} - {slot.slotEndTiming}</p>
                </div>
                <div className="col-md-2">
                  <p>{slot.seatingCapacity}</p>
                </div>
                <div className="col-md-4 iconsContainer d-flex justify-content-end">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          )
        })
        }
        {!state.slotList.find(item => item.date === date) && noApointmentView()}
      </div>
    </div>
  )
}
