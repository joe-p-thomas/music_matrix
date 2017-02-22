class Sound {
  constructor(context, freq) {
    let osc = context.createOscillator(); // instantiate an oscillator
    let gain = context.createGain();
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(1, context.currentTime + 10 / 1000);
    gain.gain.linearRampToValueAtTime(0, context.currentTime + 500 / 1000);

    osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
    osc.frequency.value = freq; // Hz
    osc.connect(gain); // connect it to the destination
    osc.start(0); // start the oscillator
    osc.stop(context.currentTime + .5);
  }
}

export default Sound;
