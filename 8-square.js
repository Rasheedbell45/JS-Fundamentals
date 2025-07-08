const size = Number(process.argv[2]);

if (Number.isInteger(size)) {
  const row = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
} else {
  console.log("Missing size");
}
