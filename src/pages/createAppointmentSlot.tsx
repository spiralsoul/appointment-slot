import React, { useEffect, useState } from 'react'
import BreadcrumHeader from '../components/breadcrumHeader';
import ProfileHeader from '../components/profileHeader';
import SideMenu from '../components/sideMenu';
import Tabs from '../components/tabs';
import Calendar from '../components/datePicker';
import { createAppointmentSlot } from '../libs/constants/constant';
import { AppointmentList, SlotDetails } from '../libs/types/appointmentSlot';
import useAppState from '../libs/hooks/useAppState';
import { getFormattedDate } from '../libs/services/appointmentServiceHelper';
import { useNavigate  } from "react-router-dom";

const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
const minutes = ['00', '15', '30', '45']

export default function CreateAppointmentSlot() {

  const { state, setState } = useAppState();
  const [date, setDate] = useState<Date>(new Date());
  const [isDateError, setIsDateError] = useState<boolean>(false);
  const [isTimeError, setIsTimeError] = useState<boolean>(false);
  const [startHour, setStartHour] = useState<string>('00');
  const [startMinute, setStartMinute] = useState<string>('00');
  const [endHour, setEndHour] = useState<string>('00');
  const [endMinute, setEndMinute] = useState<string>('00');
  const [minSlots, setMinSlots] = useState<number>(0);
  const [slots, setSlots] = useState<number>(0)
  const navigate = useNavigate();

  useEffect(() => {
    if (date.getUTCDate() < new Date().getUTCDate() || date.getUTCMonth() < new Date().getUTCMonth() || date.getUTCFullYear() < new Date().getUTCFullYear()) setIsDateError(true)
    else setIsDateError(false)
  }, [date])

  useEffect(() => {
    if (parseInt(startHour) > parseInt(endHour)) setIsTimeError(true)
    else if (parseInt(startHour) === parseInt(endHour) && parseInt(startMinute) > parseInt(endMinute)) setIsTimeError(true)
    else {
      setIsTimeError(false);
      let startTime = (parseInt(startHour) * 60) + parseInt(startMinute);
      let endTime = (parseInt(endHour) * 60) + parseInt(endMinute);
      let time = endTime - startTime;
      setMinSlots((time / 15) + 1);
    }
  }, [startHour, startMinute, endHour, endMinute])


  const onDateChange = (event: Date) => {
    setDate(event)
  }

  const onSubmit = async () => {

    let slotsList: Array<SlotDetails> = [];

    let slotStartHour = parseInt(startHour)
    let slotStartMinute = startMinute
    let slotEndHour = parseInt(startHour)
    let slotEndMinute = startMinute
    let distributedSlots = Math.floor(slots / minSlots)
   await Array(minSlots).fill(0).map((item, index) => {

      slotStartMinute = index === 0 ? slotStartMinute : parseInt(slotStartMinute) === 45 ? '00' : JSON.stringify(parseInt(slotStartMinute) + 15)
      slotStartHour = index === 0 ? slotStartHour : slotStartMinute === '00' ? slotStartHour + 1 : slotStartHour


      slotEndMinute = index === 0 && parseInt(slotEndMinute) === 45 ? '00' : index === 0 ? JSON.stringify(parseInt(slotEndMinute) + 15) : parseInt(slotEndMinute) === 45 ? '00' : JSON.stringify(parseInt(slotEndMinute) + 15)
      slotEndHour = slotEndMinute === "00" ? slotEndHour + 1 : slotEndHour

      slotsList.push({
        slotStartTiming: `${slotStartHour}:${slotStartMinute}`,   // '10:00'
        slotEndTiming: `${slotEndHour}:${slotEndMinute}`,//'10:15',
        seatingCapacity: distributedSlots
      })
    })

    if (slots > minSlots) {
      let diffrence = slots - (distributedSlots * minSlots)
      let extraSlotAddition = 1
       await slotsList.reverse().map((slot) => {
          if (extraSlotAddition <= diffrence) {
            slot.seatingCapacity = slot.seatingCapacity + 1
          }
          extraSlotAddition = extraSlotAddition + 1
        })
    }
    let currentAppointment: AppointmentList = {
      date: getFormattedDate(date),
      slots: slotsList.reverse()
    }
    let slotList: Array<AppointmentList> = state.slotList;
    await slotList.push(currentAppointment);
    await setState({ ...state, slotList });
    await navigate('/list');
        }

  return (<>
    <div id="main">
      <div className="sideMenuContainer">
        <SideMenu />
      </div>
      <div className="App">
        <ProfileHeader />
        <hr />
        <BreadcrumHeader title={createAppointmentSlot} />
        <hr />
        <Tabs />
        <section className="appointment w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-4 calenderContainer">
                <h5>1. SELECT Date of Appointment *</h5>
                <p>Please select the dates that you'd like to open up slots.</p>
                <Calendar date={date} onDateChange={onDateChange} className={isDateError ? '' : 'mb-4'} />
                {isDateError && <div style={{ color: 'red', marginTop: 6, fontSize: 12 }}>Please Select future date for Appointment</div>}
              </div>
              <div className="col-md-4 hoursContainer">
                <h5>2. SELECT The Hours *</h5>
                <p>Please select the Start and End Time.</p>
                <div className="row startTimingContainerOuter">
                  <div className="col-md-6 startTimingContainer">
                    <form action="">
                      <label htmlFor="hour" className="chooseTiming">Start Hour</label>
                      <select name="hour" id="hour" value={startHour} onChange={(event) => setStartHour(event.target.value)} >
                        {hours.map(hour => {
                          return <option value={hour}>{hour}</option>
                        })}
                      </select>
                    </form>
                    <form action=''>
                      <label htmlFor="minute" className="chooseTiming">Minute</label>
                      <select name="minute" id="hour" value={startMinute} onChange={(event) => setStartMinute(event.target.value)}>
                        {minutes.map(minute => {
                          return <option value={minute}>{minute}</option>
                        })}
                      </select>
                    </form>
                  </div>
                  <div className="col-md-6 startTimingContainer">
                    <form action="">
                      <label htmlFor="hour" className="chooseTiming">End Hour</label>
                      <select name="hour" id="hour" value={endHour} onChange={(event) => setEndHour(event.target.value)}>
                        {hours.map(hour => {
                          return <option value={hour}>{hour}</option>
                        })}
                      </select>
                    </form>
                    <form action=''>
                      <label htmlFor="minute" className="chooseTiming">Minute</label>
                      <select name="minute" id="hour" value={endMinute} onChange={(event) => setEndMinute(event.target.value)}>
                        {minutes.map(minute => {
                          return <option value={minute}>{minute}</option>
                        })}
                      </select>
                    </form>
                  </div>
                </div>
                {isTimeError && <div style={{ color: 'red', marginTop: 6, fontSize: 12 }}>Start time must be greater that end time</div>}
              </div>
              <div className="col-md-4 capacityOuter">
                <h5>3. Choose Seating Capacity *</h5>
                <p>Please enter total Seating Capacity.</p>
                <input type="number" className="form-control formControl" value={slots} onChange={(event) => setSlots(parseInt(event.target.value))} />
                {minSlots > slots && <div style={{ color: 'red', marginTop: 6, fontSize: 12 }}>minimum slots according to time are {minSlots}</div>}
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-2">
              <a href="/" className="btn btn-primary btn-lg cancelBtn">
                Cancel
              </a>
            </div>
            <div className="col-md-2 paddingLeft">
              <button className="btn btn-primary btn-lg createBtn" disabled={isDateError || isTimeError || minSlots > slots} onClick={onSubmit}>
                Create Slots
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
