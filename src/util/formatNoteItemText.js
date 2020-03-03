
export default function formatNoteItemText(text) {

    const formattedText = formatText(text);

    return truncate(formattedText);
}

function truncate(text) {
        if (text.length > 200 && text.trim() !== "") {
            return `${text.substring(0, 200)}...`;
        } else if (text.length <= 200 && text.trim() !== "") {
            return text;
        } else {
            return "No note text";
        }
    }

    function formatText(text){
        
        if(text === null || text === undefined){
            text = "";
        }
        return text.trim().replace(/\n\s*\n/g, ' - ').replace(/\n/g,' - ');
    }