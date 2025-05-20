import { format } from "date-fns";

const formatDueDate = (date) => {
    if (date == "Invalid Date") {
        return ""
    } else {
        const currentYear = new Date().getFullYear();
        const formatStr = date.getFullYear() !== currentYear ? "d MMM yyyy" : "d MMM";

        return format(date, formatStr);
    }
}

const isPastDue = (date) => {
    const currentDate = new Date();

    if (date < currentDate) {
        return true;
    } else {
        return false;
    }
}

export { formatDueDate, isPastDue }
