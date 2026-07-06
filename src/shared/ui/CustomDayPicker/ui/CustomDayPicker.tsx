import { DayPicker } from "@daypicker/react";
import "../style.scss"

export function CustomDayPicker({ handleChange, selectedDate }: { handleChange: (date: Date | undefined) => void; selectedDate: Date | undefined }) {
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