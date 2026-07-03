import { DayPicker } from "@daypicker/react";
import "../style.scss"

export function CustomDayPicker({ handleChange, selectedDate }: { handleChange: (date: Date) => void; selectedDate: Date }) {
    return (
        <DayPicker
            className="customDayPicker"
            animate
            id="date"
            required
            mode="single"
            onSelect={handleChange}
            selected={selectedDate}
        />
    )
}