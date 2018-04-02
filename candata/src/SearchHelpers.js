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


