const userInputNumOnly = process.argv.splice(2).filter(n => n > 0);

for (let num of userInputNumOnly) {
  setTimeout(() => {
    process.stdout.write('\u0007');
  }, num * 1000);
}

// pair with @ScottRoberts0