var request = require('supertest');


describe('API', function(){

	var server;

	beforeEach(function() {
		server = require('../src/server.js');
	});

	afterEach(function(){
    	server.close();
  	});

	it('/Should return hello: world', function testHealth(done){

		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {Hello : "World"}, done);

	});

	it('/status Should return healthy:true', function testHealth(done){

		request(server)
			.get('/api/status ')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {healthy : true}, done);

	});
});
