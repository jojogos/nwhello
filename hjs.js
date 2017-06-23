
///////localStore generator////////
(function () {
	// $.getJSON('jsons/td.json', (jsonObj)=>store.set('DDList',jsonObj));
	// let numar = TDATA.num_ar.map(v => v.replace(/0*/, ""))
	// store.set('numbers',
	//     numar.reduce((acc, val) => {
	//         let topThree = val.slice(0, 3),
	//             finded = acc.find(v => topThree == v.topThree);
	//         finded ? finded.numbers.push(val)
	//             : acc.push({ topThree: topThree, numbers: [val] });
	//         return acc;
	//     }, [])
	// );
	// let TSD = TDATA.str.split(';');
	// TSD.forEach((v, i, ar) => {
	//     let item = v.trim().split(',');
	//     ar[i] = { name: item[0], phone: item[1] };
	// });
	// store.set('comunications', TSD);

})();

TDATA = (function () {
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
})();
//////////////events/////////////////////////////////////////////////////////////
let { findInComunications,
	getRelinVal, es
     } = function () {
		function setClickEvent(eleId, realFn) {
			$(eleId).click(realFn);
		}

		function btn1Click(eFn) {
			setClickEvent("#btn1", eFn);
		}
		function btn2Click(eFn) {
			setClickEvent("#btn2", eFn);
		}
		function getRelinVal() {
			return $("#relin").val();
		}

		return _rel = {
			findInComunications(fn) {
				let dbs = store.get('comunications');
				return dbs.find(fn);
			},
			es: {
				relinPressed(eFn, k_code = 13) {
					$("#relin").keypress(e => {
						if (e.keyCode == k_code || k_code == 'any') {
							eFn(getRelinVal());
							return false;
						}

					})
				},
				doneClick(eFn) {
					btn1Click(function () {
						eFn(getRelinVal());
					});
				}
			}
		};
	}();

