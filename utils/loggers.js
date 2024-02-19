function writeDay(data) {
  let total = 0;
  data.forEach((element) => {
    console.log(`(${element.hours}h) ${element.activity}`);
    total += +element.hours;
  });
  console.log(`${total}h TOTAL`);
}

module.exports.writeDay = writeDay;
