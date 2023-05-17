import { Edges } from "./Edges.ts";
import { Vertices } from "./Vertices.ts";

const vertices = new Vertices();

vertices.add({
  name: "v1",
  coordinates: { x: 0, y: 0 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: -0.005, y: -0.03, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 1, y: 2, z: 3 },
});

vertices.add({
  name: "v2",
  coordinates: { x: 4, y: 0 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 4, y: 5, z: 6 },
});

vertices.add({
  name: "v3",
  coordinates: { x: 0, y: 5 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 7, y: 8, z: 9 },
});

vertices.add({
  name: "v4",
  coordinates: { x: 4, y: 5 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 10, y: 11, z: 12 },
});

// console.log(vertices.getData());

const edges = new Edges(vertices.getData());

edges.add({
  name: "e1",
  from: "v1",
  to: "v2",
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 0, z: 0 },
    j: { x: 0, y: 0, z: 0 },
  },
});
