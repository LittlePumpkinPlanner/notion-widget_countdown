function showDateTimePicker() {
    document.getElementById('date-time-picker').classList.remove('hidden');
}

function setCountdown() {
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;

    if (!eventDate || !eventTime) {
        alert('Please set both date and time.');
        return;
    }

    const eventDateTime = new Date(`${eventDate}T${eventTime}`);
    startCountdown(eventDateTime);
    document.getElementById('date-time-picker').classList.add('hidden');
}

function startCountdown(eventDateTime) {
    const countdownDisplay = document.getElementById('countdown-display');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDateTime - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownDisplay.innerHTML = "Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
