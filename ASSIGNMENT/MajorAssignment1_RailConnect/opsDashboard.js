const bookings = require("./bookings");

const getOccupancySummary = (bookings) => {
    const confirmed = bookings.filter(
        (booking) => booking.status === "Confirmed"
    ).length;

    const waitlisted = bookings.filter(
        (booking) => booking.status === "WL"
    ).length;

    const rac = bookings.filter(
        (booking) => booking.status === "RAC"
    ).length;

    const totalPassengers = bookings.length;

    const occupancyRate = (confirmed / totalPassengers) * 100;

    return {
        confirmed,
        waitlisted,
        rac,
        totalPassengers,
        occupancyRate: occupancyRate.toFixed(2) + "%"
    };
};


const getRevenueBreakdown = (bookings) => {
    const totalRevenue = bookings.reduce(
        (total, booking) => total + booking.fare,
        0
    );

    const byCoachClass = bookings.reduce((result, booking) => {
        if (!result[booking.coachClass]) {
            result[booking.coachClass] = 0;
        }

        result[booking.coachClass] += booking.fare;

        return result;
    }, {});

    const byStatus = bookings.reduce((result, booking) => {
        if (!result[booking.status]) {
            result[booking.status] = 0;
        }

        result[booking.status] += booking.fare;

        return result;
    }, {});

    return {
        totalRevenue,
        byCoachClass,
        byStatus
    };
};


const getStationLoad = (bookings) => {
    return bookings.reduce((result, booking) => {
        const station = booking.boardingStation;

        if (!result[station]) {
            result[station] = 0;
        }

        result[station]++;

        return result;
    }, {});
};


// 4. Vulnerable Passengers
const getVulnerablePassengers = (bookings) => {
    return bookings
        .filter(
            (booking) =>
                booking.status === "Confirmed" &&
                (booking.age < 12 || booking.age >= 60)
        )
        .map((booking) => ({
            name: booking.passengerName,
            age: booking.age,
            coach: booking.coachClass,
            seat: booking.seatNo
        }));
};


const getWaitlistClearancePlan = (bookings) => {
    return bookings
        .filter((booking) => booking.status === "WL")
        .sort((a, b) => a.pnr - b.pnr)
        .map((booking, index) => ({
            pnr: booking.pnr,
            passengerName: booking.passengerName,
            clearanceRank: index + 1
        }));
};


const generateFullDashboard = (bookings) => {
    return {
        occupancySummary: getOccupancySummary(bookings),
        revenueBreakdown: getRevenueBreakdown(bookings),
        stationLoad: getStationLoad(bookings),
        vulnerablePassengers: getVulnerablePassengers(bookings),
        waitlistClearancePlan: getWaitlistClearancePlan(bookings)
    };
};

const dashboard = generateFullDashboard(bookings);

console.log(dashboard);