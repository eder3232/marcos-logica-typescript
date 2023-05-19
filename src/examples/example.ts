import { Edges } from '../models/Edges.ts'
import { Frame } from '../models/Frame.ts'
import { Vertices } from '../models/Vertices.ts'

const vertices = new Vertices()

vertices.add({
  name: 'v1',
  coordinates: { x: 0, y: 0 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: -0.005, y: -0.03, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: true, y: true, z: false },
  inputDOF: { x: 1, y: 2, z: 3 },
})

vertices.add({
  name: 'v2',
  coordinates: { x: 4, y: 0 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: true, y: true, z: false },
  inputDOF: { x: 4, y: 5, z: 6 },
})

vertices.add({
  name: 'v3',
  coordinates: { x: 0, y: 5 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 7, y: 8, z: 9 },
})

vertices.add({
  name: 'v4',
  coordinates: { x: 4, y: 5 },
  forces: { x: 0, y: 0, z: 0 }, //nodales
  displacements: { x: 0, y: 0, z: 0 },
  k: { x: 0, y: 0, z: 0 },
  isRestricted: { x: false, y: false, z: false },
  inputDOF: { x: 10, y: 11, z: 12 },
})

// console.log(vertices.getData());

const edges = new Edges(vertices.getData())

edges.add({
  name: 'e1',
  from: 'v1',
  to: 'v2',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 0, z: 0 },
    j: { x: 0, y: 0, z: 0 },
  },
})
edges.add({
  name: 'e2',
  from: 'v1',
  to: 'v3',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 40, z: 26.667 },
    j: { x: 0, y: 40, z: -26.667 },
  },
})
edges.add({
  name: 'e3',
  from: 'v2',
  to: 'v3',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 0, z: 0 },
    j: { x: 0, y: 0, z: 0 },
  },
})
edges.add({
  name: 'e3',
  from: 'v2',
  to: 'v3',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 0, z: 0 },
    j: { x: 0, y: 0, z: 0 },
  },
})
edges.add({
  name: 'e4',
  from: 'v2',
  to: 'v4',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 0, z: 0 },
    j: { x: 0, y: 0, z: 0 },
  },
})
edges.add({
  name: 'e5',
  from: 'v3',
  to: 'v4',
  elasticity: 2100000000,
  inertia: 0.000654,
  area: 0.0014,
  fixedEndMoments: {
    i: { x: 0, y: 50, z: 41.667 },
    j: { x: 0, y: 50, z: -41.667 },
  },
})

// console.log(edges.getData());

export const frame1 = new Frame(edges.getData())

frame1.generateLocals()
frame1.generateData()
frame1.generateOrderDOF({ isRestrictedAbove: false })
frame1.createDictionary()
frame1.buildGlobal()
frame1.buildForces()
frame1.buildForcesFixedEndMoments()
frame1.buildDisplacements()
frame1.splitGlobal()
frame1.splitFEM()
if (frame1.solveDisplacement().ok) {
  frame1.solveForces()
}
