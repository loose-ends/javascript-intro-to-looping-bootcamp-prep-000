function forLoop(testArray) {
  for (i = 0; i < 25; i++) {
    if (i=1) {testArray.push("I am 1 strange loop.")}
    else {testArray.push("I am ${i} strange loops." )}
  }
  return testArray
}
