export type AppointmentList = {
        date: string,
        slots: Array<SlotDetails>
    }

    export type SlotDetails = {
        slotStartTiming: string,
        slotEndTiming: string,
        seatingCapacity: number
    }