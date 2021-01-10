function heute() {
    document.getElementById('beginn').value = new Date().toISOString().substring(0, 10);
    document.getElementById('beginn').min = new Date().toISOString().substring(0, 10);
    document.getElementById('ende').value = new Date().toISOString().substring(0, 10);
    document.getElementById('ende').min = new Date().toISOString().substring(0, 10);
}
