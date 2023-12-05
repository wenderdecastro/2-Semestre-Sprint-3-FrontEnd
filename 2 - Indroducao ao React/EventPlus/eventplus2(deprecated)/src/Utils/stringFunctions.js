export const dateFormatDbToView = date => {
    return new Date(date).toLocaleDateString();
}

export default function xpto(date) {
    return new Date(date).toJSON();
}