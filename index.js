module.exports = [
	{
		value: true,
		name: 'true',
		isBoolean: true
	},{
		value: false,
		name: 'false',
		isBoolean: true
	},{
		value: null,
		name: 'null',
		isNull: true
	},{
		value: undefined,
		name: 'undefined',
		isUndefined: true
	},{
		value: 1,
		name: '1',
		isNumber: true,
		isPositive: true,
		isStrictlyPositive: true
	},{
		value: -1,
		name: '-1',
		isNumber: true,
		isNegative: true,
		isStrictlyNegative: true
	},{
		value: 0,
		name: '0',
		isNumber: true,
		isPositive: true
	},{
		value: -0,
		name: '-0',
		isNumber: true,
		isNegative: true,
	},{
		value: +Infinity,
		name: '+Infinity',
		isNumber: true,
		isInfinity: true,
		isPositive: true,
		isStrictlyPositive: true
	},{
		value: -Infinity,
		name: '-Infinity',
		isNumber: true,
		isInfinity: true,
		isNegative: true,
		isStrictlyNegative: true
	},{
		value: NaN,
		name: 'NaN',
		isNan: true
	},{
		value: function() {},
		name: 'function() {}',
		isFunction: true
	},{
		value: {},
		name: '{}',
		isObject: true
	},{
		value: new Date(),
		name: 'new Date()',
		isDate: true
	},{
		value: /regexp/,
		name: '/regexp/',
		isRegExp: true
	},{
		value: [],
		name: '[]',
		isArray: true
	},{
		value: '',
		name: "''",
		isString: true
	},{
		value: 'string',
		name: "'string'",
		isString: true
	}
]
