/**
 * Description placeholder
 * @date 05/04/2024 - 08:44:50
 *
 * @export
 * @async
 * @param {HTMLElement} element
 */
export async function writePosition(element) {
    try {
        const [position, timestamp] = await getLocation();
        logPosition(position, timestamp);
        showPosition(element, position, timestamp);
    } catch (err) {
        console.error(err.message);
    }
}

/**
 * Get Location Asynchronously
 * @date 27/03/2024 - 10:25:45
 *
 * @returns {Promise<[GeolocationCoordinates, number]>}
 */
function getLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            const geolocation = navigator.geolocation;

            geolocation.getCurrentPosition(
                (pos) => {
                    resolve([pos.coords, pos.timestamp]);
                },
                (err) => {
                    reject(err);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: 5000,
                },
            );
        } else {
            reject(new Error("ERROR: Geolocation not supported!"));
        }
    });
}

/**
 * Log Position
 * @date 27/03/2024 - 09:52:07
 *
 * @param {GeolocationCoordinates} pos
 * @param {Number} time
 */
function logPosition(pos, time) {
    console.log(`Latitude - ${pos.latitude}`);
    console.log(`Longitude - ${pos.longitude}`);
    console.log(`Altitude - ${pos.altitude}`);
    console.log(`Timestamp - ${time}`);
}

/**
 * Description placeholder
 * @date 28/03/2024 - 19:21:52
 *
 * @param {HTMLElement} element
 * @param {GeolocationCoordinates} pos
 * @param {Number} time
 */
function showPosition(element, pos, time) {
    element.innerHTML = `Timestamp - ${time}, Latitude - ${pos.latitude}, Longitude - ${pos.longitude}, Altitude - ${pos.altitude}`;
}
