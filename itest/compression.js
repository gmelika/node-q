var nodeq = require("../index.js"),
	assert = require("assert-plus"),
	async = require("async"),
	os = require("os");

describe("syncreqres", function() {
	"use strict";
	var con;
	before(function(done) {
		nodeq.connect(os.hostname(), 5000, function(err, c) {
			if (err) { throw err; }
			con = c;
			done();
		});
	});
	after(function(done) {
		con.close(function() {
			con = undefined;
			done();
		});
	});
	it("uncompress result", function(done) {
		con.k("til 100000", function(err, res) {
			if (err) { throw err; }
			assert.equal(res.length, 100000, "res.length");
			done();
		});
	});
});
