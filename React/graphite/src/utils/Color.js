class Color {
    constructor(hex) {
        this.hex = hex;
    }
    format() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a}`;
    }
    rgb() {
        if(!this.r || !this.g || !this.b) {
            var bigint = parseInt(this.hex, 16);
            this.r = (bigint >> 16) & 255;
            this.g = (bigint >> 8) & 255;
            this.b = bigint & 255;
        }
        this.a = 1.0;
        this.rgba = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a}`;
    }
}

export default Color;