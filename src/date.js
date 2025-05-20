import { format } from "date-fns";

const formatDueDate = (date) => {
    console.log(date);
    const currentYear = new Date().getFullYear();
    const formatStr = date.getFullYear() !== currentYear ? "d MMM yyyy" : "d MMM";

    return format(date, formatStr);
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
