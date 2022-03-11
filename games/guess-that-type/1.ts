const values = [3, '14', [21]];

for (let _v in values) {
     /// ^?
}
for (let _v of values) {
     /// ^?
}
