var app = require('./helpers/app');

var should = require('should');
var supertest = require('supertest');

describe('flights', function () {

	it('should return valid data for flight 1', function (done) {
		supertest(app)
		.get('/flight/1')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

	it('should return an error for an invalid flight', function (done) {
		supertest(app)
		.get('/flight/9999')
		.expect(404)
		.end(function (err, res) {
			res.status.should.equal(404);
			done();
		});
	});

	it('should mark flight as arrived', function (done) {
		supertest(app)
		.put('flight/2/arrived')
		.expect(200)
		.end(function (err, res) {
			
			res.status.should.equal(200);
			//res.body.status.should.equal(done);

			done();

			// supertest(app)
			// .get('/flight/2')
			// .expect(200)
			// .end(function (err, res) {
			// 	res.status.should.equal(200);
			// 	res.body.actualArrival.should.not.equal(undefined);
			// 	done();
			// });
		});
	});

});