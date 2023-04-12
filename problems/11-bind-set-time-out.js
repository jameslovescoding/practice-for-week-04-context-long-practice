function boundFuncTimer(obj, func, delay) {
  // Your code here

  let cb = func.bind(obj);

  setTimeout(cb, delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;