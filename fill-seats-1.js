// ==============================
// Fill Seats
// ==============================

function fillSeats(seatsConfig, numberOfSeats) {
    var pl = [];

    seatNo = 0;
    maximumRows = maxRows(seatsConfig);


    // Fill the isles
    for (i = 0; i < maximumRows; i++) {
        // i = row
        blockNo = seatsConfig.length - 1;
        if (seatsConfig[seatsConfig.length - 1][0] > i) {
            pl = addSeat(pl, seatNo + 1, blockNo, i, 0)
            seatNo = seatNo + 1;
            if (seatNo >= numberOfSeats) {
                return pl
            }
        }


        for (j = seatsConfig.length - 2; j >= 1; j--) {
            block = seatsConfig[j];
            blockNo = j;

            if (block[0] > i) {

                // row - block - fill last seat
                pl = addSeat(pl, seatNo + 1, blockNo, i, block[1] - 1);
                seatNo = seatNo + 1;
                if (seatNo >= numberOfSeats) {
                    return pl
                }

                // row - block - fill first seat
                pl = addSeat(pl, seatNo + 1, blockNo, i, 0);
                seatNo = seatNo + 1;
                if (seatNo >= numberOfSeats) {
                    return pl
                }
            }
        }

        blockNo = 0;
        if (seatsConfig[0][0] > i) {
            pl = addSeat(pl, seatNo + 1, blockNo, i, seatsConfig[0][1] - 1)
            seatNo = seatNo + 1;
            if (seatNo >= numberOfSeats) {
                return pl
            }
        }
    }

    // Fill the window seats
    for (i = 0; i < maximumRows; i++) {

        if (seatsConfig[seatsConfig.length - 1][0] > i) {
            var last_block = seatsConfig[seatsConfig.length - 1];
            blockNo = seatsConfig.length - 1;

            pl = addSeat(pl, seatNo + 1, blockNo, i, last_block[1] - 1)
            seatNo = seatNo + 1;
            if (seatNo >= numberOfSeats) {
                return pl
            }
        }

        if (seatsConfig[0][0] > i) {
            var first_block = seatsConfig[0];
            blockNo = 0;

            pl = addSeat(pl, seatNo + 1, blockNo, i, 0)
            seatNo = seatNo + 1;
            if (seatNo >= numberOfSeats) {
                return pl
            }
        }

    }

    // Fill the center seats
    for (i = 0; i < maximumRows; i++) {
        for (j = seatsConfig.length - 1; j >= 0; j--) {

            block = seatsConfig[j];
            blockNo = j;

            if (block[0] > i && block[1] > 2) {
                for (k = block[1] - 2; k >= 1; k--) {
                    pl = addSeat(pl, seatNo + 1, blockNo, i, k)
                    seatNo = seatNo + 1;
                    if (seatNo >= numberOfSeats) {
                        return pl
                    }
                }
            }
        }
    }

    return pl;
}

// ==============================
// ADD SEAT
// ==============================

function addSeat(pl, seatNo, blockNo, x, y) {
    pl[pl.length] = {
        seat: seatNo,
        block: blockNo,
        x: x,
        y: y
    }
    return pl
}

// ==============================
// MAX ROWS
// ==============================

function maxRows(seatsConfig) {
    var maxRows = 0;

    for (i = 0; i < seatsConfig.length; i++) {
        if (seatsConfig[i][0] > maxRows) {
            maxRows = seatsConfig[i][0];
        }
    }

    return maxRows;
}
// ==============================
// GET POSITION
// ==============================

function getPosition(seats, seatNo) {
    for (i = 0; i < seats.length; i++) {
        if (seats[i].seat == seatNo) {
            return seats[i];
        }
    }
}


// ==============================
// Get Total Seats
// ==============================

function getTotalSeats(seatsConfig) {
    totalSeats = 0;

    seatsConfig.forEach(function(block) {
        totalSeats = totalSeats + block[0] * block[1];
    });

    return totalSeats;
}

// ==============================
// Call the function
// ==============================

seatsConfig = [
    [3, 2],
    [4, 5],
    [2, 3],
    [3, 4]
];

totalSeats = getTotalSeats(seatsConfig);

fillSeats(seatsConfig, 10);