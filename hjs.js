
let Libs = function () {

	let self = {
		copy_obj: function (obj) {
			let copy = Object.create(Object.getPrototypeOf(obj));
			Object.getOwnPropertyNames(obj).forEach(function (item) {
				let desc = Object.getOwnPropertyDescriptor(obj, item);
				Object.defineProperty(copy, item, desc);
			});
			return copy;
		},
		get_all_proper: function get_all_proper(obj) {
			let props = [];
			while (obj) {
				Object.getOwnPropertyNames(obj).forEach(function (prop) {
					props.push(prop);
				});
				obj = Object.getPrototypeOf(obj);
			}
			return props;
		},

		getJSONfromUrl: function (url) {
			return new Promise(function (resolve, reject) {
				$.ajax({
					url: url, type: "GET", dataType: "jsonp", jsonp: "callback",
					success: function (data) { resolve(data); },
					error: function () { reject(new Error('ajax get error')); },
				});
			});
		},


	}

	return self;
}();


var iLibs = {
	//////////////////////////////////////////////////////////   
	println(...args) {
		let newp = $("<P>");
		let outs = `(${println['count']?println['count']+=1:println['count']=1}) `;
		if (args.length > 1) {
			outs += String(args[0]) + ": ";
			for (var i = 1; i < args.length - 1; i++) {
				outs += String(args[i]) + " , ";
			}
			outs += String(args[args.length - 1]);
		} else if (args.length == 1) {
			outs += String(args[0])
		}
		iType();
		$("#container").append(newp.html(outs));
	},

	///////////////////////////

	iType(obj) {
		if (obj == null) return "null";
		var st = typeof obj,
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




	////////////////////
	TDATA: function() {
		let str =
			`mcx,15911078760;
			lbx,18676735935;
			tjx,18688836568;
			hzf,18965128957;
			kqt,18624931267;
			vaf,13622051016;
			tqr,13823665045;
			ayq,18965128957;
			zmr,18624931267;
			faa,18503055249;
			bas,15989331600;
			heb,15989315511;
			qrz,13725588052;
			tqx,15852936398;
			vba,15019209653;
			fae,13480988069;
			nqr,15914099917;
			zxq,13392107763;
			mrq,15986836957;
			plo,15989895504;
			xcf,15889649458;
			ert,18675570085;
			asc,13163765266;
			afr,13510834141;
			gas,18681588178`,
			num_ar = str.match(/\d+/g);
		return { str, num_ar };
	}(),

	/////////////////////////////////

	flattenArray(arr) {
		return arr.reduce(
			(acc, val) => acc.concat(
				Array.isArray(val) ? flattenArray(val) : val
			),
			[]
		);
	}
}
///////////////////////////////////////
//////inits//////////////////////
window.moveTo(1, 1);


/////////////////////envents
function setClickEvent(eleId, eFn) {
	$(eleId).click(eFn);
}

function btn1Click(eFn) {
	setClickEvent("#btn1", eFn);
}
function btn2Click(eFn) {
	setClickEvent("#btn2", eFn);
}

//////////////choice exports itmes
let { println, TDATA, iType, flattenArray } = iLibs;