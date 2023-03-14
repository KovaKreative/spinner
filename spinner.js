const spinner = function(fps, revolutions = 20) {
  const ticks = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  const animFrames = ticks.length;
  const delay = Math.round(1000 / fps); //milliseconds
  let currentFrame = 0;
  const spin = () => {
    if(revolutions > 0) {
      if(currentFrame >= animFrames){
        currentFrame = 0;
        revolutions--;
      }
      process.stdout.write(ticks[currentFrame++]);
      setTimeout(spin, delay);

    } else {
      process.stdout.write('\n');
    }
  };
  return spin;
};

const startSpin = spinner(6, 5);
startSpin();