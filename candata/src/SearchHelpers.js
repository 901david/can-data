export const nameSort = (data) => {
        return data.sort((a, b) => {
            if(+a.name < +b.name) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };

export const serialSort = (data) => {
    return data.sort((a, b) => {
        if(+a.serial < +b.serial) {
            return -1;
        }
        else {
            return 1;
        }
    });
}
export const  sizeSort = (data) => {
    return data.sort((a, b) => {
        if(+a.size < +b.size) {
            return -1;
        }
        else {
            return 1;
        }
    });
}
export const createdSort = (data) => {
    return data.sort((a, b) => {
        if(new Date(a.location.createdDate).getTime() < new Date(b.location.createdDate).getTime()) {
            return -1;
        }
        else {
            return 1;
        }
    });
}
export const modifiedSort = (data) => {
    return data.sort((a, b) => {
        if(new Date(a.modifiedDate).getTime() < new Date(b.modifiedDate).getTime()) {
            return -1;
        }
        else {
            return 1;
        }
    });
}
export const convertDate = (date) => {
    Date.fromISO = (s) => new Date(s);
    const dateToConvert = Date.fromISO(date).toString().split(' ');
    const timeArray = dateToConvert[4].split(':');
    if (parseInt(timeArray[0]) === 12) {
        return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${timeArray[0]}:${timeArray[1]}:${timeArray[2]} p.m.`;
    }
    if (parseInt(timeArray[0]) === 0) {
        return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at 12:${timeArray[1]}:${timeArray[2]} a.m.`;
    }
    if (parseInt(timeArray[0]) < 13) {
        return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${timeArray[0]}:${timeArray[1]}:${timeArray[2]} a.m.`;
    }
    if (parseInt(timeArray[0]) > 12) {
        const newTime = parseInt(timeArray[0]) - 12;
        return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${newTime}:${timeArray[1]}:${timeArray[2]} p.m.`;

    }
}


