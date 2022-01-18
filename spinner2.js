let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let time = 100;
for (const frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, time += 200);
}