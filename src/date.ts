import { format } from "date-fns";

const formatDueDate = (date) => {
    if (date == "Invalid Date") {
        return ""
    } else {
        const currentYear = new Date().getFullYear();
        const formatStr = date.getFullYear() !== currentYear ? "d MMM yyyy" : "d MMM";

        return format(date, formatStr);
    }
};

const isPastDue = (date) => {
    const currentDate = new Date();

    if (date < currentDate) {
        return true;
    } else {
        return false;
    }
};

// Update text color to display whether a date is selected or not
const updateDateInput = (dateInput) => {
    dateInput.classList.toggle("text-neutral-500", dateInput.value === "");
};

export { formatDueDate, isPastDue, updateDateInput }
