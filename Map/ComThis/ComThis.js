const laranja = {
	price: 2,
};

const maca = {
	price: 1.5,
};

function mapComThis() {
	return array.map(function (item) {
		return item * this.price;
	}, maca);
}

const array = [1, 2, 3, 4, 5];

console.log('this -> maçã', mapComThis(array, maca));

console.log('this -> laranja', mapComThis(array, laranja));