
let Libs = function () {

	let self = {

		ins_obj: function (obj) {
			if (typeof obj === "object") {
				return obj.keys.map(function (item) {
					let v = obj[item];
					return [item, v, typeof v];
				});
			}
		},
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


let iLibs = (function (window) {

	//////////////////////////////////////////////////////////   
	function println(...args) {
		let newp = $("<P>");
		println.count++;
		let outs = `(${println.count}) `;
		if (args.length > 1) {
			outs += String(args[0]) + ": ";
			for (var i = 1; i < args.length - 1; i++) {
				outs += String(args[i]) + " , ";
			}
			outs += String(args[args.length - 1]);
		} else if (args.length == 1) {
			outs += String(args[0])
		}
		$("#container").append(newp.text(outs));
	}
	println.count = 0;
	///////////////////////////

	function iType(obj) {
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
	}




	////////////////////
	var ostr = `015911078760�� ���ڣ�ʯ����������������վ�绰18676735935
֣�ݣ�������־18688836569������������18965128957���ź���18624931267������013622051016��֣��ֵ��ǩ����������ϵ 13823665045��
ʮ�ߣ�����������18965128957���ź���018624931267��
��ͨ�������ź���18503055249�����з���15989331600������������15989315511������13725588052������15852936398����
����������ʷ����15019209653��
���ڣ����͹� 13480988069��
�麣 ����������15914099917������������13392107763������÷ΰ15986836957���Ź�Ⱥ15989895504 ���̹���15889649458���κ���18675570085����¡ƽ13163765266��
��Ӫ����ΰ��13510834141����˼��18681588178��`,
		TDATA = {
			str: ostr,
			num_ar: ostr.match(/\d+/g),
		};

		/////////////////////////////////

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
	

	let innerExports = {
		println: println,
		TDATA: TDATA,
		iType: iType,
		es: {
			doneClick: btn1Click,
			actionClick: btn2Click,
		}
	};

	return innerExports;
}(this));

var { println, TDATA, iType } = iLibs;
