# Web Audio API Talk Ideas

## About
- Interested in programming, synthsizers, math, electronics
- JavaScript, PHP
- Consulting, implementation


## Basic Features
 - Modular Routing
 - Sample-accurate scheduled playback
 - Low latency
 - Parameter automation
 - Process audio from audio or video elements
 - Process live audio acquired using getUserMedia()
 - Oscillators
 - Biquad filter
 - Audio processing in JavaScript
 - Convolution engine for reverb effects
 - Dynamics processor
 - Waveshaping
 - Spatialized audio for 3D effects
 - Time-domain and frequency-domain analysis
 - WebRTC integration: sending and receiving audio
 - Channel splitting/merging

## Browser Support

## AudioContext Interface

## AudioNode Interface

## Example Synthesizer

### Oscillator
 - setup AudioContext
 - add oscillator
 - frequency control

### Envelope
 - add gain node
 - initialize parameters on trigger event

### Filter
 - add filter node

### LFO
 - add oscillator node
 - connect oscillator

### Filter Modulation

### Oscillator Modulation

## A Note on Oscillators and Bandwidth
 - phase
 - simple apporach to a pwm oscillator
 - inverse fft
 - wave tables
 - impulse trains


## Timing
- AudioContext clock
- setTimeout, requestAnimationFrame vs. real time clock
- Scheduling audio events

