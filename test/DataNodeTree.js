var test = require('./util/test');
var should = require('should'); // extends `Object` (!) with `.should`; creates `should()`
//var sinon = require('sinon');
//require('should-sinon'); // extends Object.should to make should-like asserts for sinon spies

module.exports = function() {
    test.constructorModule('DataNodeTree', function(DataNodeTree) {
        var KEY;
        beforeEach(function() {
            KEY = 'key';
            object = new DataNodeTree(KEY);
        });

        it('descends from `DataNodeGroup`', function() {
            object.should.be.an.instanceof(require('../js/DataNodeGroup'));
        });

        test.method('initialize', 1, function() {
            test.property('height', function() {
                it('is initialized to the number `0`', function() {
                    object.height.should.a.Number();
                    object.height.should.equal(0);
                });
            });
            test.property('expanded', function() {
                it('is initialized to boolean `true`', function() {
                    object.expanded.should.a.Boolean();
                    object.expanded.should.true();
                });
            });
        });

        test.method('toArray', 0);

        test.method('buildView', 1);

        test.method('computeHeight', 0);
    });
};
