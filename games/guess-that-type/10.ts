type Point = [number, number];
interface Shape {
  center: Point
}
interface Square extends Shape {
  corners: [Point,Point,Point,Point]
}
interface Circle extends Shape {
  radius: number
}

function drawShape<S extends Shape>(shapes: S[]): S[] {
  shapes.forEach(s => {
    s
    // ^? - Something more interesting than "S"
  })
  return shapes;
}
