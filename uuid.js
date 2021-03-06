let uuid = {
    uuidGenerator: function () {
        let d = Date.now();
        if (typeof performance !== "undefined" && typeof performance.now === "function"){
            d += performance.now(); //use high-precision timer if available
        }
        return "id_xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
