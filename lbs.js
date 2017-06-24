
let { println,
	iType,
	flattenArray,
	copy_obj,
	get_all_proper,
	getJSONfromUrl} = (function () {
		let _iLibs = {
			//////////////////////////////////////////////////////////   
			println(...args) {
				let newp = $("<P>");
				let outs = `(${println['count'] ? println['count'] += 1 : println['count'] = 1}) `;
				if (args.length > 1) {
					outs += String(args[0]) + ": ";
					for (let i = 1; i < args.length - 1; i++) {
						outs += String(args[i]) + " , ";
					}
					outs += String(args[args.length - 1]);
				} else if (args.length == 1) {
					outs += String(args[0])
				}
				$("#container").append(newp.html(outs));
			},
			///////////////////////////

			iType(obj) {
				if (obj == null) return "null";
				let st = typeof obj,
					obj_p = obj;
				switch (st) {
					case "number":
					case "boolean":
					case "string":
					case "undefined":
						return st;
					case "object":
						obj_p = obj_p.constructor;
					case "function":
						return obj_p.name || obj_p.toString().match(/function\s*([^(]*)\(/)[1];
				}
			},

			/////////////////////////////////

			flattenArray(arr) {
				return arr.reduce(
					(acc, val) => acc.concat(
						Array.isArray(val) ? flattenArray(val) : val
					),
					[]
				);
			},
			copy_obj(obj) {
				let copy = Object.create(Object.getPrototypeOf(obj));
				Object.getOwnPropertyNames(obj).forEach(function (item) {
					let desc = Object.getOwnPropertyDescriptor(obj, item);
					Object.defineProperty(copy, item, desc);
				});
				return copy;
			},
			get_all_proper(obj) {
				let props = [];
				while (obj) {
					Object.getOwnPropertyNames(obj).forEach(function (prop) {
						props.push(prop);
					});
					obj = Object.getPrototypeOf(obj);
				}
				return props;
			},

			getJSONfromUrl(url) {
				return new Promise(function (resolve, reject) {
					$.ajax({
						url: url, type: "GET", dataType: "jsonp", jsonp: "callback",
						success: function (data) { resolve(data); },
						error: function () { reject(new Error('ajax get error')); },
					});
				});
			}

		}

		return _iLibs
	})();

