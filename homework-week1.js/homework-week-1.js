
function difference(array, itemsToExclude) {
	return array.reduce((acc, el) => {
		if (!~itemsToExclude.indexOf(el)) {
			acc.push(el);
			return acc;
		}
		return acc;
	}, [])
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
			if (i === (array.length - 1)) {
				resultArray.push(acc);
			}
  			return acc;  			
  		}

  		resultArray.push(acc);
  		acc = [];
  		acc.push(el);

	  	if (i === (array.length - 1)) {
			resultArray.push(acc);
		}
		
  		arrSizeCount = size*2;
  		return acc; 
	}, [])

	return resultArray;
} //  не получилось избавится от повторяющихся блоков if 

console.log(difference([2, 1, 5], [2, 3]))

console.log(groupBy([{ gender: 'male', name: 'Max'}, 
	{ gender: 'male', name: 'Fred'}, 
	{ gender: 'female', name: 'Jane'}], 'gender'))

console.log(flatten([1, [2, [3, [4]], 5]]))

console.log(uniq([2, 1, 2]))

console.log(chunk(['a', 'b', 'c', 'd','e'], 4))
