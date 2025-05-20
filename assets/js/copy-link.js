function copyToClipboard(id) {
    const fullUrl = window.location.origin + window.location.pathname + id;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fullUrl)
            .then(() => {
                alert('Link copied: ' + fullUrl);
            })
            .catch(() => {
                alert('Failed to copy link to clipboard.');
            });
    } else {
        alert('Clipboard API not available.');
    }
}
