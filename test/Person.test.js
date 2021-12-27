const Person = require('../src/Person');
const expect = require('expect');

describe('Person Address', function () {
	it('should add address for a person', function () {
		
		// Arrange
		let person1 = new Person('John');

		// Act
		person1.addAddress('1111 King St, Toronto');

		// Assert
		expect(person1.address).toBe('1111 King St, Toronto');

	});

	it('should give name and address of person', function () {

		// Arrange
		let person1 = new Person('Nita');
		person1.addAddress('2222 Queen St, Toronto');
		
		// Act
		const details = person1.getDetails();

		// Assert
		expect(details).toBe('Name is Nita, Address is: 2222 Queen St, Toronto');

	});
});