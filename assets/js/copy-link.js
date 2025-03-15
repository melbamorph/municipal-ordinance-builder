function copyToClipboard(id) {
    const fullUrl = window.location.origin + window.location.pathname + id;
    navigator.clipboard.writeText(fullUrl).then(() => {
        alert('Link copied: ' + fullUrl);
    });
}
