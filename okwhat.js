function ok(stackSize =  1) {
  console.log(stackSize);
  return ok(stackSize + 1);
}


ok();
