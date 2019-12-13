/**
 * 显示可读的目标时间到当前时间的差值，如“3天前”“10秒后”
 */
const getTimeDiff = (timestamp: number | string | Date): string => {
    const t = timestamp instanceof Date ? timestamp : new Date(timestamp);
    const diff = Date.now() - t.valueOf();

    const seconds = diff / 1000;
    if (seconds < 60 && seconds >= 0) return __('time_diff.moment_ago');
    else if (seconds > -60 && seconds < -1)
        return __('time_diff.seconds_after', {
            second: '' + Math.floor(seconds)
        });
    else if (seconds >= -1 && seconds < 0)
        return __('time_diff.second_after', {
            second: '' + Math.floor(seconds)
        });

    const minutes = seconds / 60;
    if (minutes < 60 && minutes > 1)
        return __('time_diff.minutes_before', {
            minute: '' + Math.ceil(minutes)
        });
    else if (minutes <= 1 && minutes >= 0)
        return __('time_diff.minute_before', {
            minute: '' + Math.ceil(minutes)
        });
    else if (minutes > -60 && minutes < -1)
        return __('time_diff.minutes_after', {
            minute: '' + Math.floor(minutes)
        });
    else if (minutes >= -1 && minutes < 0)
        return __('time_diff.minute_after', {
            minute: '' + Math.floor(minutes)
        });

    const hours = minutes / 60;
    if (hours < 24 && hours > 1)
        return __('time_diff.hours_before', {
            hour: '' + Math.ceil(hours)
        });
    else if (hours <= 1 && hours >= 0)
        return __('time_diff.hour_before', {
            hour: '' + Math.ceil(hours)
        });
    else if (hours > -24 && hours < -1)
        return __('time_diff.hours_after', {
            hour: '' + Math.floor(hours)
        });
    else if (hours >= -1 && hours < 0)
        return __('time_diff.hour_after', {
            hour: '' + Math.floor(hours)
        });

    const days = hours / 24;
    if (days > 1)
        return __('time_diff.days_before', {
            day: '' + Math.ceil(days)
        });
    else if (days <= 1 && days >= 0)
        return __('time_diff.day_before', {
            day: '' + Math.ceil(days)
        });
    else if (days < -1)
        return __('time_diff.days_after', {
            day: '' + Math.floor(days)
        });
    else if (days >= -1 && days < 0)
        return __('time_diff.day_after', {
            day: '' + Math.floor(days)
        });

    return '' + diff;
};

export default getTimeDiff;
