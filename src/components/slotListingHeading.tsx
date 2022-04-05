import React from 'react'

export default function SlotListingHeading() {
    return (
        <div className="appointmentDetailsBar">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <p>Slot Timing</p>
                    </div>
                    <div className="col-md-4">
                        <p>Seating Capacity</p>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end">
                        <p>Manage</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
