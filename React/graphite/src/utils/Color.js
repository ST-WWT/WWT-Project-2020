class Color {
    constructor(hex) {
        this.hex = hex;
    }
    get rgba() {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
        this.r = this.r || parseInt(result[1], 16);
        this.g = this.g || parseInt(result[2], 16);
        this.b = this.b || parseInt(result[3], 16);
        this.a = this.a || 1.0;
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}

export default Color;