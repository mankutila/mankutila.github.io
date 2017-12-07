let icons = document.querySelectorAll('.socials svg');
let colorValues = getColors();
console.log('colors: ', colorValues);
document.body.style.backgroundColor = hex(colorValues[0]);
document.body.style.color = hex(colorValues[1]);
icons.forEach(function(icon) {
    icon.style.fill = hex(colorValues[1]);
});
function getColors() {
    let colorArray1 = [], colorArray2 = [], ratio = 0;
    while (ratio < 3) {
        colorArray1 = generateRandomColor();
        colorArray2 = generateRandomColor();
        ratio = contrast(colorArray1, colorArray2);
    }
    console.log(ratio);
    return [colorArray1,colorArray2];
}
function luminanace(r, g, b) {
    let a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    return (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05)
        / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);
}
function hex(colorArray) {
    let color = colorArray
        .map(function(x)  {
            let hex = x.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        })
        .join('');
    console.log('HEX: ', color );
    return '#' + color;
}
function generateRandomColor() {
    let color = [];
    for(let i =0; i < 3 ; i++){
        color.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    return color;
}