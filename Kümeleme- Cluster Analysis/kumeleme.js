/*
Veri Madenciliği Yöntemleri Dr.Yalçın Özkan

sayfa 216 8.1

Öklid, Manhattan, Minkowski Uzaklık Matrislerinin Elde edilmesi

Gozlem	x1	x2	x3
1	9	2	3
2	1	2	9
3	8	9	0
4	10	9	8
5	3	10	10


@mzuvin
*/


var gozlem = [[9, 2, 3], [1, 2, 9], [8, 9, 0], [10, 9, 8], [3, 10, 10], ];
//mutlak değer
function mtlk(x) {
    return Math.abs(x)
}
//üs alırken NaN hatası vermemesi için
function real(x, y) {
    if (x > 0) {
        return Math.pow(x, y);
    } else if (x < 0) {
        var x = Math.abs(x);
        var z = Math.pow(x, y);
        if (y % 2 == 0) {
            // console.log(z);
            return z;
        } else {
            //console.log(-z);
            return -z;
        }
    } else {
        return 0;
    }
}

function uc(x) {
    x = mtlk(x);
    return real(x, 3)
}

// 3 dereceden karekök alma
function minkowski(x) {
    return Math.pow(x, 1 / 3);
}

function us(x) {
    return Math.pow(x, 2);
}

console.log("-------OKLİD-------");
for (var i = 0; i < 5; i++) {
    for (var j = i; j < 5; j++) {
        var x = i;
        var y = j + 1;
        try {
            var sonuc = Math.sqrt(us(gozlem[x][0] - gozlem[y][0]) + us(gozlem[x][1] - gozlem[y][1]) + us(gozlem[x][2] - gozlem[y][2])).toFixed(2)
            console.log("d(" + parseInt(x + 1) + "," + parseInt(y + 1) + ") = √((" + gozlem[x][0] + "-" + gozlem[y][0] + ")² + (" + gozlem[x][1] + "-" + gozlem[y][1] + ")²+ (" + gozlem[x][2] + "-" + gozlem[y][2] + ")²)  = " + sonuc);
        } catch (err) {//pass
        }
    }
}
console.log("-------Manhattan-------");
for (var i = 0; i < 5; i++) {
    for (var j = i; j < 5; j++) {
        var x = i;
        var y = j + 1;
        try {
            var sonuc = mtlk(gozlem[x][0] - gozlem[y][0]) + mtlk(gozlem[x][1] - gozlem[y][1]) + mtlk(gozlem[x][2] - gozlem[y][2])
            console.log("d(" + parseInt(x + 1) + "," + parseInt(y + 1) + ") = ( |" + gozlem[x][0] + "-" + gozlem[y][0] + "| + |" + gozlem[x][1] + "-" + gozlem[y][1] + "| + |" + gozlem[x][2] + "-" + gozlem[y][2] + "| )  = " + sonuc);
        } catch (err) {//pass

        }
    }
}
console.log("-------MinKowski-------");
for (var i = 0; i < 5; i++) {
    for (var j = i; j < 5; j++) {
        var x = i;
        var y = j + 1;
        try {
            var hesap = uc(gozlem[x][0] - gozlem[y][0]) + uc(gozlem[x][1] - gozlem[y][1]) + uc(gozlem[x][2] - gozlem[y][2])
            var sonuc = minkowski(hesap)
            console.log("d(" + parseInt(x + 1) + "," + parseInt(y + 1) + ") = ( |" + gozlem[x][0] + "-" + gozlem[y][0] + "|³ + |" + gozlem[x][1] + "-" + gozlem[y][1] + "|³+ |" + gozlem[x][2] + "-" + gozlem[y][2] + "|³ )  = [" + hesap + "]^⅓  =  " + sonuc);
        } catch (err) {//pass

        }
    }
}