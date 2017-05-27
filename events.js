function onClickFillSeatsButton() {
    var seatsElement = document.getElementById("seats");
    var seats = seatsElement.value;

    if (!seats || seats > getTotalSeats(seatsConfig) || seats < 0) {
        alert("Invalid Number of Seats.");
        return;
    }

    seatsConfig = [
        [3, 2],
        [4, 1],
        [3, 4]
    ]

    clearAll();
    seats = fillSeats(seatsConfig, seats);

    seats.forEach(function(seat) {
        console.log(seat);

        seatElement = document.getElementById("seat-" + seat.block + "-" + seat.x + "-" + seat.y);

        seatElement.innerHTML = seat.seat;
    });
}

// Clear all boxes
function clearAll() {
    for (i = 0; i < seatsConfig.length; i++) {
        block = seatsConfig[i];
        for (j = 0; j < block[0]; j++) {
            for (k = 0; k < block[1]; k++) {
                seatElement = document.getElementById("seat-" + i + "-" + j + "-" + k);
                seatElement.innerHTML = "";
            }
        }
    }
}