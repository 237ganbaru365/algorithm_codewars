//左右の数字を配列に格納
const nums = [];

//左辺の数字の引数にどの計算がくるか条件分岐
let calc = function() {
  if (func = times) {
    return times(nums);
  } else if (func = minus) {
    return minus(nums);
  } else if (func = plus) {
    return plus(nums);
  } else if (func = dividedBy) {
    return dividedBy(nums);
  }
}

const zero = function(func) {
  if (func === undefined) {
    return nums.push(0);
  }
  nums.unshift(0);
  return calc();
}

const one = function(func) {
  if (func === undefined) {
    return nums.push(1);
  }
  nums.unshift(1);
  return calc();
}

const two = function(func) {
  if (func === undefined) {
    return nums.push(2);
  }
  nums.unshift(2);
  return calc();
}

const three = function(func) {
  if (func === undefined) {
    return nums.push(3);
  }
  nums.unshift(3);
  return calc();
}

const four = function(func) {
  if (func === undefined) {
    return nums.push(4);
  }
  nums.unshift(4);
  return calc();
}

const five = function(func) {
  if (func === undefined) {
    return nums.push(5);
  }
  nums.unshift(5);
  return calc();
}

const six = function(func) {
  if (func === undefined) {
    return nums.push(6);
  }
  nums.unshift(6);
  return calc();
}

const seven = function(func) {
  if (func === undefined) {
    return nums.push(7);
  }
  nums.unshift(7);
  return calc();
}

const eight = function(func) {
  if (func === undefined) {
    return nums.push(8);
  }
  nums.unshift(8);
  return calc();
}

const nine = function(func) {
  if (func === undefined) {
    return nums.push(9);
  }
  nums.unshift(9);
  return calc();
}

const plus = function(nums) {
  return nums[0] + nums[1];
}

const minus = function(nums) {
  return nums[0] - nums[1];
}

const times = function(nums) {
  return nums[0] * nums[1];
}

const dividedBy = function(nums) {
  return Math.floor(nums[0] / nums[1]);
}