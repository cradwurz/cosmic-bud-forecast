
export interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  progress: number;
  angle: number;
  active: boolean;
  duration: number;
}

export interface Constellation {
  stars: { x: number; y: number; size: number }[];
  lines: [number, number][];
  sign: string;
}

export interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
}
