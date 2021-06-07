// 虚拟归属比例（影响 归属日历内容）
var global_scale = 0.1;

// 自定义股票数据
var data = {"当前股价":-1, 			// -1则使用页面上显示的价格
			"待归属期权股数":5558,
            "可行权期权股数":46772,
			"已行权待出售股数":0,
			"可出售股数":0,
			"人民币税后比例":0.8*0.83, // 始终生效
			};

// 全局开关(决定自定义股票数据是否生效)
var global_switch = true;
// 显示附加标签
var display_append_label = true;


Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

// 修改整数部分
function modify_int(s, scale) {
	s = s.replaceAll(",","");
	var num = parseInt(s.replace(/[^0-9]/ig,""));
  	//console.log(num)
	var result = s.replace(num, (num*scale).format());
	return result;
}

// 设置整数部分
function modify_set(s, value) {
	s = s.replaceAll(",","");
	var num = parseInt(s.replace(/[^0-9]/ig,""));
	//var result = s.replace(num, (value).format());
	var result;
	if (typeof value === 'number') {
		result = (value).format();
	} else {
		result = value;
	}

	// console.log("modify_set ", s, num, value, result);
	return result;
}

function mark_i(i) {
  return "[myesop_"+i+"]";
}

function modify_str(src, f, scale=1.0) {

  //var src = 'sss 123,444好 66666'; -> "sss 12,344好 6,667"
  //var s = modify_int(src);
  var num_arr = src.match(/[\d,]+/g);
  if (num_arr == null) {
    return src;
  }
  // 先设置占位符
  var src2 = src;
  for (var i=0; i<num_arr.length; i++) {
    src2 = src2.replace(num_arr[i], mark_i(i))
  }
  // console.log(src2)
  // 遍历
  for (var i=0; i<num_arr.length; i++) {
      var result = f(num_arr[i], scale)
      //console.log(num_arr[i], result)
      // 替换字符串
      src2 = src2.replace(mark_i(i), result)
  }
  // console.log('哈哈哈');
  
  return src2;
}

// 修改目标内的金钱或股数
function modify_obj_int(obj, scale) {
	var s = obj.innerHTML;
	obj.innerHTML = modify_str(s, modify_int, scale);
}

// 设置目标内的金钱或股数
function modify_obj_set(obj, value) {
	if (obj) {
		var s = obj.innerHTML;
		$(obj).html(modify_str(s, function(){
			return modify_set(s, value);
		}));
	}
}

function get_number(src) {
	var num_arr = src.match(/[\d,]+/g);
	if (num_arr == null) {
		return src;
	}

	return parseInt(num_arr[0].replaceAll(',',''));
}

