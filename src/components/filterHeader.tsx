import React from 'react'

type props = {
    date: string;
    onDateChange: (value: string) => void
}

export default function FilterHeader({ date, onDateChange }: props) {
    return (
        <div className="searchContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-outline">
                            <input id="search-input" type="search" className="form-control formControl form_control" placeholder="search" />
                            <i className="fa fa-search searchIcon"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <input type="date" value={date} onChange={(event) => onDateChange(event?.target.value)} className="formControl datePicker" />
                    </div>
                    <div className="col-md-2">
                        <a href="/" className="btn btn-primary btn-lg search_btn">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
