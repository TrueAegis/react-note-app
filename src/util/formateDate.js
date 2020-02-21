import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const formatDate = (date) => {
    if (date >= (Date.now() - 60 * 60 * 24 * 7 * 1000)) {
        return dayjs(date).fromNow();
    } else {
        return dayjs(date).format("h:mm a on M/D/YYYY");
    }
}

export default formatDate;