class BaseProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor('processor', BaseProcessor);
