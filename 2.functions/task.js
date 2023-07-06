function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}


		if (arr[i] > max) {
			max = arr[i];
		}

		sum = sum + arr[i];
	}

	let avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: parseFloat(avg.toFixed(2), 10)
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	return arr.reduce(function(sum, item) {
		return sum + item;
	}, 0);

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const obj = getArrayParams(...arr);
	return obj.max - obj.min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}

	}
	return sumEvenElement / countEvenElement;


}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let max = func(...arrOfArr[i]);
		if (max > maxWorkerResult) {
			maxWorkerResult = max
		}
	}

	return maxWorkerResult;
}