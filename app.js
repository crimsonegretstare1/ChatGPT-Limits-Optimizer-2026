// Config module: app

const SETTINGS = {
    fgwfnah: 984,
    ofguss: 199,
    gpkrub: 88,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
