var x1, y1, x2, y2, k, x, y, b;

x1 = 2;
y1 = 3;
x2 = 1;
y2 = 4;

k = (y1 - y2) / (x1 - x2);
b = y2 - k * x2;

alert('y = ' + k + 'x + ' + b); 
