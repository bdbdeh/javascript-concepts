async function tet() {
  for (let i = 0; i < 4; i++) {
    const ans = await new Promise((r) => {
      console.log("inside promise ")
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          console.log(i);
        }, 2000);
      }
    });
  }

  console.log("test", 4994);
}
// tet();

// console.log("tes333333333t", 4994666);
