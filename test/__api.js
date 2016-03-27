var request = require('supertest');

describe('API', function(){

	var server ;

	beforeEach(function() {
		server = require('../js/server.js');
	});

	afterEach(function() {
		server.close();
	});

	it('Should return hello: world', function testHealth(done){

		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {Hello : "World"}, done)


		
	});
});
