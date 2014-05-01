# Web Audio API Talk Ideas

## About Me
 - Interested in programming, synthsizers, math, electronics
 - JavaScript, PHP, etc.
 - Consulting, design and implementation of web applications

## About You
 - Who has used the Web Audio API?

## Web Audio API Overview
 - Modular Routing
 - Sample-accurate scheduled playback
 - Low latency
 - Parameter automation
 - Process audio from audio or video elements
 - Process live audio acquired using getUserMedia()
 - Oscillators
 - Biquad filter
 - Convolution engine for reverb effects
 - Audio processing in JavaScript
 - Dynamics processor
 - Spatialized audio for 3D effects
 - Time-domain and frequency-domain analysis
 - WebRTC integration: sending and receiving audio

## Browser Support
 - Chrome: Y
 - Firefox: Y
 - Safari: Y
 - Opera: Y
 - iOS Safari: Y
 - Android Chrome: Y
 - Firefox Chrome: Y

## AudioContext Interface
 - Creates AudioNodes
 - Contains the routing graph

## Context Clock
 - is a float
 - starts at zero on context creation
 - increases in real-time
 - cannot be stopped or paused
 - all audio events are relative to this clock

## AudioNode Interface
 - Parent class for all input/output and processing nodes
 - belongs to AudioContext
 - has inputs and outputs
    - multiple nodes can be connected as input
    - an output can fan-out to multiple nodes
 - connect()
 - disconnect()
 - audio data is processed as blocks of 128 samples

## OscillatorNode Interface
 - type: sine, square, sawtooth, triangle, custom
 - start()

## Example: Oscillator
 - setup AudioContext
 - AudioContext.createOscillator()
 - frequency control

## Audio Parameters
 - Affect aspects of an AudioNode's processing
 - Value changes can be immediate
 - Value changes can be automated
 - a-rate parameter: value is sampled on a per-sample basis
 - k-rate parameter: value is sample on a per-block basis

## AudioParam Interface
 - SetValueAtTime(float value, double startTime)
 - linearRampToValueAtTime(float value, double endTime)
 - exponentialRampToValueAtTime(float value, double endTime)
 - setTargetAtTime(float target, double startTime, double timeConstant)
 - setValueCurveAtTime(Float32Array values, double startTime, double duration)
 - cancelScheduledValues(double startTime)

## GainNode Interface
 - add gain node
 - initialize parameters on trigger event

----------------------

## Important Terms
- Nyquist Frequency
- Phase
- dB

## Sample Player
- Sample Loading
- Typed Arrays and Buffers
- Loops

## Convolver Node
- Convolution
- Impulse Response

## ScriptProcessor

## Delay




## FM
http://www.taktech.org/takm/WebFMSynth/
http://greweb.me/2013/08/FM-audio-api/

## A Note on Oscillators and Bandwidth
 - simple apporach to a pwm oscillator
 - inverse fft
 - wave tables
 - impulse trains


## Timing
- AudioContext clock
- setTimeout, requestAnimationFrame vs. real time clock
- Scheduling audio events

## Links
- [https://github.com/WebKit/webkit/tree/master/Source/WebCore/Modules/webaudio](Webkit Web Audio API Implementation)
- [http://mathworld.wolfram.com/FourierSeriesSquareWave.html]
