import { zeros } from 'mathjs'

export function standard({
  elasticity,
  inertia,
  area,
  long,
}: {
  elasticity: number
  inertia: number
  area: number
  long: number
}) {
  const local = zeros(6, 6).valueOf() as number[][]
  //   const elasticity = edge.elasticity
  //   const inertia = edge.inertia
  //   const long = edge.long

  const ea_l = (elasticity * area) / long

  const ei12_l3 = (12 * elasticity * inertia) / long ** 3

  const ei6_l2 = (6 * elasticity * inertia) / long ** 2

  const ei4_l = (4 * elasticity * inertia) / long

  const ei2_l = (2 * elasticity * inertia) / long

  local[0][0] = ea_l
  local[1][1] = ei12_l3
  local[1][2] = ei6_l2
  local[2][1] = ei6_l2
  local[2][2] = ei4_l

  local[0][3] = -ea_l
  local[1][4] = -ei12_l3
  local[1][5] = ei6_l2
  local[2][4] = -ei6_l2
  local[2][5] = ei2_l

  local[3][0] = -ea_l
  local[4][1] = -ei12_l3
  local[4][2] = -ei6_l2
  local[5][1] = ei6_l2
  local[5][2] = ei2_l

  local[3][3] = ea_l
  local[4][4] = ei12_l3
  local[4][5] = -ei6_l2
  local[5][4] = -ei6_l2
  local[5][5] = ei4_l
  return local
}

export function placa(
  elasticidad: number,
  inercia: number,
  area: number,
  longitud: number,
  alpha: number
) {
  const s1 = (elasticidad * area) / longitud
  const s2 = (12 * elasticidad * inercia) / ((1 + alpha) * longitud ** 3)
  const s3 = (6 * elasticidad * inercia) / ((1 + alpha) * longitud ** 2)
  const s4 = ((4 + alpha) * elasticidad * inercia) / ((1 + alpha) * longitud)
  const s5 = ((2 - alpha) * elasticidad * inercia) / ((1 + alpha) * longitud)

  const local = zeros(6, 6).valueOf() as number[][]
  //bloque superior izquierdo
  local[0][0] = s1

  local[1][1] = s2
  local[1][2] = s3
  local[2][1] = s3
  local[2][2] = s4

  // bloque superior derecho
  local[0][3] = -s1

  local[1][4] = -s2
  local[1][5] = s3
  local[2][4] = -s3
  local[2][5] = s5
  //bloque inferior izquierdo
  local[3][0] = -s1

  local[4][1] = -s2
  local[4][2] = -s3
  local[5][1] = s3
  local[5][2] = s5
  // bloque inferior derecho
  local[3][3] = s1

  local[4][4] = s2
  local[4][5] = -s3
  local[5][4] = -s3
  local[5][5] = s4
  return local
}
