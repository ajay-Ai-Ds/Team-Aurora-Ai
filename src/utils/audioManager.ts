"use client";

type AudioSource = "hero" | "floating" | "journey";

type AudioListener = (activeSource: AudioSource | null) => void;

const listeners = new Set<AudioListener>();
let activeAudioSource: AudioSource | null = null;

export const playAudioSource = (source: AudioSource) => {
  activeAudioSource = source;
  listeners.forEach((listener) => listener(source));
};

export const stopAllAudioSources = () => {
  activeAudioSource = null;
  listeners.forEach((listener) => listener(null));
};

export const subscribeAudioSource = (listener: AudioListener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
