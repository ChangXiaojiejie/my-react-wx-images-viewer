let y,
  x,
  start = 0,
  end = 300,
  time = 147,
  distance = 1000,
  json = '[';

for (x = start; x < end;) {
  // y = x * Math.sqrt(distance) / Math.sqrt(time);
  y = x * x;
  const str = `[${x},${y}],\n`;
  json += str;
  x += 10;
}
json += ']';
console.info(json);
