
function difference(arr, itemsToExclude) {
	const resultArr = [];
	arr.forEach(el => {
		if (!~itemsToExclude.indexOf(el)) resultArr.push(el);
	})
	return resultArr;
}

function groupBy(array, value) {
	return array.reduce((acc, obj) => {
		if (obj[value] in acc) {
			acc[obj[value]].push(obj);
			return acc;
		}

		acc[obj[value]] =[obj];
		return acc;
	}, {})
}

function flatten(array) {
	return array.reduce((acc, el) => {
		if (Array.isArray(el)) {
			el.map((el2) => {
				acc.push(el2);
				return acc;
			})
			return acc;
		}

		acc.push(el);
		return acc;
	}, [])
}

function uniq(array) {
  return array.reduce((acc, el) => {
  	if(!~acc.indexOf(el)) {
  		acc.push(el);
  		return acc;
  	}
  	return acc;
  }, [])

}

function chunk(array, size) {
	const resultArray = [];
	let arrSizeCount = size;
	array.reduce((acc, el, i) => {
  		if (i < arrSizeCount) {
  			acc.push(el);
  			if (i === array.length - 1) {
  				resultArray.push(acc);

  			}
  			return acc;
  		}
  		resultArray.push(acc);
  		acc = [];
  		acc.push(el);
  		arrSizeCount = size*2;
  		return acc;
	}, [])
	return resultArray;
}
