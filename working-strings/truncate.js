// truncate.js
export function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    
    let truncated = str.slice(0, maxLength);
    let lastSpace = truncated.lastIndexOf(' ');
    let lastPunctuation = truncated.search(/[,.!?:;)](?!.*[,.!?:;)])/);
    
    let cutIndex = Math.max(lastSpace, lastPunctuation);
    if (cutIndex > 0) truncated = truncated.slice(0, cutIndex);
    
    return truncated + '...';
}
