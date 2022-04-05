import { createContext, useContext, useEffect, useState } from 'react';
import { AppointmentList } from '../types/appointmentSlot';

export type State = {
  slotList: Array<AppointmentList>;
};

export const DEFAULT_STATE: State = {
  slotList: [
    {
      date: '2022-04-05',
      slots: [{
        slotStartTiming: '10:00',
        slotEndTiming: '10:15',
        seatingCapacity: 1
      },
      {
        slotStartTiming: '10:15',
        slotEndTiming: '10:30',
        seatingCapacity: 1
      },
      {
        slotStartTiming: '10:30',
        slotEndTiming: '10:45',
        seatingCapacity: 1
      },
      {
        slotStartTiming: '10:45',
        slotEndTiming: '11:00',
        seatingCapacity: 1
      },
      {
        slotStartTiming: '11:00',
        slotEndTiming: '11:15',
        seatingCapacity: 2
      },
      {
        slotStartTiming: '11:15',
        slotEndTiming: '11:30',
        seatingCapacity: 2
      }]
    }
  ]
};

// let LAST_APP_STATE = DEFAULT_STATE;

const getStateFromStorage = (): State => JSON.parse(window.localStorage.getItem('STATE') as string);

const useAppState = (): { state: State; setState: (state: State) => void } => {
  const [value, setValue] = useState<State>(() => {
    try {
      return getStateFromStorage() ? getStateFromStorage() : DEFAULT_STATE;
    } catch (error) {
      return DEFAULT_STATE;
    }
  });

  const Context = createContext<{ state: State; setState: (state: State) => void }>({
    state: value,
    setState: (item: State) => setValue({ ...DEFAULT_STATE, ...item }),
  });

  useEffect(() => {
    if (!value) return;
    window.localStorage.setItem('STATE', JSON.stringify(value));
    // LAST_APP_STATE = value;
  }, [value]);

  return useContext(Context);
};

export const getState = (): State => (getStateFromStorage() ? getStateFromStorage() : DEFAULT_STATE);

export default useAppState;
