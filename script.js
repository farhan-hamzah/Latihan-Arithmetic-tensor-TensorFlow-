a = tf.range(1,6,1)
b = tf.range(1,6,1)

console.log('---Tensor A---')
a.print()
console.log('---Tensor B---')
b.print()
console.log('---Penjumlahan Tensor A dan B---')
tf.addN([a,b]).print()
console.log('---Perkalian Tensor A dan B--')
perkalian = tf.mul(a,b)
perkalian.print()
console.log('---Perkalian Matriks---')
const a_2d = a.reshape([1, 5])
const b_2d = b.reshape([5, 1])
tf.matMul(a_2d, b_2d).print()

//model 
y1 = tf.scalar(2)
y2 = tf.scalar(1)
model = tf.mul(a, y1)
tf.add(model, y2).print()


