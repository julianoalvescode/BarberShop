import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
    format,
    subDays,
    addDays,
    setHours,
    setMinutes,
    setSeconds,
    isBefore,
    isEqual,
    parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import en from 'date-fns/locale/en-US';
import { Helmet } from 'react-helmet';
import { Container, Time } from './styles';
import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(
        () => format(date, "MMMM ' ' d'th'", { locale: en }),
        [date]
    );

    useEffect(() => {
        async function loadSchedule() {
            const response = await api.get('schedule', {
                params: { date },
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const data = range.map((hour) => {
                const checkDate = setSeconds(
                    setMinutes(setHours(date, hour), 0),
                    0
                );
                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareDate, new Date()),
                    appointment: response.data.find((a) =>
                        isEqual(parseISO(a.date), compareDate)
                    ),
                };
            });

            setSchedule(data);
        }

        loadSchedule();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <>
            <Helmet>
                <title>Barbershop - Dashboard</title>
            </Helmet>
            <Container>
                <header>
                    <button type="button" onClick={handlePrevDay}>
                        <MdChevronLeft size={36} color="#fff" />
                    </button>
                    <strong>{dateFormatted}</strong>
                    <button type="button" onClick={handleNextDay}>
                        <MdChevronRight size={36} color="#fff" />
                    </button>
                </header>

                <ul>
                    {schedule.map((time) => (
                        <Time
                            key={time.time}
                            past={time.past}
                            available={!time.appointment}
                        >
                            <strong>{time.time}</strong>
                            <span>
                                {time.appointment
                                    ? time.appointment.user.name
                                    : 'Open'}
                            </span>
                        </Time>
                    ))}
                    <Time>
                        <strong>9:00h</strong>
                        <span>Juliano Alves</span>
                    </Time>
                    <Time>
                        <strong>12:00h</strong>
                        <span>Juliano Alves</span>
                    </Time>
                    <Time>
                        <strong>14:00h</strong>
                        <span>Juliano Alves</span>
                    </Time>
                    <Time>
                        <strong>16:00h</strong>
                        <span>Juliano Alves</span>
                    </Time>
                </ul>
            </Container>
        </>
    );
}
