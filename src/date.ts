import { format, isValid, parseISO } from "date-fns";

const formatDueDate = (date: Date | string | null) => {
    if (!date) return "";

    const dateObj = typeof date === "string" ? parseISO(date) : date;

    if (!isValid(dateObj)) return "";

    const currentYear = new Date().getFullYear();
    const formatStr = dateObj.getFullYear() !== currentYear ? "d MMM yyyy" : "d MMM";
  
    return format(dateObj, formatStr);
};

const isPastDue = (date: Date | string | null) => {
    if (!date) return false;

    const dateObj = typeof date === "string" ? parseISO(date) : date;

    if (!isValid(dateObj)) return false;

    return dateObj < new Date();
};

// Update text color to display whether a date is selected or not
const updateDateInput = (dateInput: HTMLInputElement) => {
    dateInput.classList.toggle("text-neutral-500", dateInput.value === "");
};

export { formatDueDate, isPastDue, updateDateInput }
