function has_restricted_stock() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(2) > div.rsu-tag > span");
}

// 预估总价值
function total_value() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-left > div > div.summary-item.total > div.summary-total_value > span > span.value-integer");
	}
	console.log("total_value: error");
}

// 预估限制性股票总价值
function estimated_total_stock_value() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(2) > div.summary-item.total > div.summary-total_value > span > span.value-integer");
	}
	console.log("estimated_total_stock_value: error");
}

// 预估期权总价值
function estimated_total_option_value() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div.summary-item.total > div.summary-total_value > span > span.value-integer");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div.summary-item.total > div.summary-total_value > span > span.value-integer");
}

// 待归属期权价值
function vested_option_value() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.pending-option > div.d-ib > span > span.value-integer");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.pending-option > div:nth-child(2) > span > span.value-integer");
}

// 待归属股数
function vested_option_number() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.pending-option > div.stock-num");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.pending-option > div.stock-num");
}

// 可行权期权价值
function exercisable_option_value() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.pending-exercise > div.d-ib > span > span.value-integer");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.pending-exercise > div:nth-child(2) > span > span.value-integer");
}

// 可行权股数
function exercisable_option_number() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.pending-exercise > div.stock-num");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.pending-exercise > div.stock-num");
}

// 已行权待出售价值
function value_of_exercise_for_sale() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.usable-position-option > div.d-ib > span > span.value-integer");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.usable-position-option > div:nth-child(2) > span > span.value-integer");
}

// 已行权待出售股数
function number_of_exercise_for_sale() {
	if (has_restricted_stock()) {
		return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div:nth-child(3) > div.summary-item.usable-position-option > div.stock-num");
	}
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div.summary-item.usable-position-option > div.stock-num");
}

/* 右下角窗口 */
// 可行权价值
function exercisable_option_value2() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(3) > div.layout-cell.layout-cell--right > div:nth-child(2) > div > div.div-table.exercisse-matrix > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span > span.value-integer");
}

// 可行权股数
function exercisable_option_number2() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(3) > div.layout-cell.layout-cell--right > div:nth-child(2) > div > div.div-table.exercisse-matrix > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span > span");
}

// 可出售股票
function marketable_stock_number() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(3) > div.layout-cell.layout-cell--right > div:nth-child(2) > div > div.div-table.exercisse-matrix > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span > span");
}

// 可出售价值
function marketable_stock_value() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(3) > div.layout-cell.layout-cell--right > div:nth-child(2) > div > div.div-table.exercisse-matrix > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span > span.value-integer");
}

function yes_price() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.header-wrapper.pc-view > div.container > div > span:nth-child(2) > span");
}

function is_appended() {

	var obj = document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary.option-rsu-both > div.summary-right > div:nth-child(1) > div.summary-item.total > div:nth-child(4) > div.summary-title");
	return obj != null;
}

function modify_all() {

	if (exercisable_option_value() == null) {
		console.log('[esop] 没找到可用标签!');
		return;
	}
	
	var modify_func = function(){

		// console.log((data["待归属期权股数"] + data["可行权期权股数"] + data["已行权待出售股数"]) * data["当前股价"]);
   
		// 修正股价
		//console.log("yes_price", parseFloat(price));
		var real_price;
		if (data["当前股价"] == -1) {
			var m = yes_price().innerHTML.match(/[\d.]+/g);
			if (m != null) {
				real_price = parseFloat(m[0]);
				data["当前股价"] = real_price;
			} else {
				return;
			}
		}

		if (global_switch) {

			console.log("[esop] modify ...");

			// 修改价值
			modify_obj_set(estimated_total_option_value(), 
				(data["待归属期权股数"] + data["可行权期权股数"] + data["已行权待出售股数"]) * data["当前股价"]);

			modify_obj_set(vested_option_value(), data["待归属期权股数"]*data["当前股价"]);
			modify_obj_set(exercisable_option_value(), data["可行权期权股数"]*data["当前股价"]);
			modify_obj_set(value_of_exercise_for_sale(), data["已行权待出售股数"]*data["当前股价"]);

			// // 修改股数
			modify_obj_set(vested_option_number(), data["待归属期权股数"]);
			modify_obj_set(exercisable_option_number(), data["可行权期权股数"]);
			modify_obj_set(number_of_exercise_for_sale(), data["已行权待出售股数"]);

			// 右下角菜单
			modify_obj_set(exercisable_option_number2(), data["可行权期权股数"]);
			modify_obj_set(exercisable_option_value2(), data["可行权期权股数"]*data["当前股价"]);

			modify_obj_set(marketable_stock_number(), data["可出售股数"]);
			modify_obj_set(marketable_stock_value(), data["可出售股数"]*data["当前股价"]);

			// 预估总价值
			modify_obj_set(total_value(), get_number(estimated_total_option_value().innerHTML) + get_number(estimated_total_stock_value().innerHTML));

			// 修改自定义内容
			if (display_append_label && !is_appended()) {
				// modify_obj_set(now_money_value(), data["可行权期权股数"]*data["当前股价"]*0.8*0.83);
				append_element("可行权期权价值 (CNY)", data["可行权期权股数"]*data["当前股价"]*data["人民币税后比例"]);
			}

			// 修改归属日历内容
			$(".vest").each(function(){
				var data = $(this).find("div").get(2);
				modify_obj_int(data, global_scale);
			});
		} else {
			var real_options = get_number(exercisable_option_number().innerHTML);
			// console.log(real_options);
			
			// 修改自定义内容
			if (display_append_label && !is_appended()) {
				// modify_obj_set(now_money_value(), data["可行权期权股数"]*data["当前股价"]*0.8*0.83);
				append_element("可行权期权价值 (CNY)", real_options*real_price*data["人民币税后比例"]);
			}
		}
   };

   // 当前昨日价格标签重新刷新后，触发所有标签的二次修改
	$(yes_price()).one("DOMSubtreeModified", function(){
		console.log('[esop] refresh by price update!');
		modify_func();
	});

	// 暂时隐藏图表内的真实数据显示
	var table = document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-left > div > div");
	$(table).on('DOMSubtreeModified',function(){

		// 图表中的：待归属期权价值 和 已归属期权价值 都是一个标签
		var table_vested_option_value = document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-left > div > div > div:nth-child(2)");

		if (table_vested_option_value == null) return;

		$(table).off('DOMSubtreeModified');

		function aaa(){
			$(table_vested_option_value).html("");
			$(table_vested_option_value).one('DOMSubtreeModified', aaa);
		}

		// alert(table_vested_option_value.innerHTML);
		$(table_vested_option_value).one('DOMSubtreeModified', aaa);
	});

	// 当该元素值被修改时，触发全部修改
	$(exercisable_option_value2()).one('DOMSubtreeModified', modify_func);
}

function log_element(str) {

	var kwai = document.querySelector(str);
	console.log("fuck100", kwai);
}

function append_element(title, value) {
	var int_part = modify_str(parseInt(value).toString(), modify_int);
	// console.log(parseInt(value).toString(), int_part);
	var float_part = parseInt((value - parseInt(value))*100);
	var line_div = document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2)");
	line_div.innerHTML = line_div.innerHTML + '<div></div><div data-v-6f39f7ee="" class="summary-item pending-exercise">\
	<div data-v-6f39f7ee class="summary-title">'+title+'\
        <span data-v-6f39f7ee class="tax-tag">税后</span> <div data-v-5d3399f0="" data-v-6f39f7ee="" class="ui-notice tips-wrapper"><span data-v-5d3399f0="" class="ui-notice-trigger"><i data-v-5d3399f0="" class="ui-icon icon-trigger icon-tips"></i></span> <div data-v-5d3399f0="" class="ui-notice-mask" style="display: none;"></div> <div data-v-5d3399f0="" class="ui-notice-wrapper" style="left: 20px; top: 20px;"><div data-v-5d3399f0="" class="ui-notice-content"><i data-v-5d3399f0="" class="ui-icon icon-close ui-notice-close"></i> <div data-v-5d3399f0="" class="ui-notice-text"><p data-v-6f39f7ee="" data-v-5d3399f0="" class="tips-item">已行权待出售价值=行权后获得且未卖出的股票数量*上个交易日收盘价</p></div></div></div></div></div>\
		<div data-v-6f39f7ee class=""><span data-v-6f39f7ee="" class="exact-value"><span data-v-6f39f7ee="" class="value-integer">'+int_part+'</span><span data-v-6f39f7ee="" class="value-dot">.</span><span data-v-6f39f7ee="" class="value-float">'+float_part+'</span></span></div>\
	</div>';
}

function now_money_value() {
	return document.querySelector("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary > div.summary-right > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(2)");
}

// 暂不使用这个方法
function hub_ready() {

	// 拦截菊花 (可能闪现真实数值)
	var hub = document.querySelector("body > div.js-toast-container > div.ui-toast-box._u-modal-box");
	if (hub !== undefined) {
		console.log("[esop] 添加监听!");
		// 这个页面加载过迟，到这里数据已经刷新
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
			if (mutation.attributeName === "class") {
				var attributeValue = $(mutation.target).prop(mutation.attributeName);
				//console.log("Class attribute changed to:", attributeValue);
				console.log("[esop] 菊花动画出现，准备修改数据.");
				modify_all();
			}
			});
		});
		observer.observe(hub, {
			attributes: true
		});
	} else {
		console.log("[esop] 没找到hub菊花!");
	}
}

function esop_old() {

	var body = document.querySelector("body");
	$(body).on("DOMSubtreeModified", function(){

		// append_element();
		// test: 打印元素是否生效
		// log_element("body");
		// log_element("body > div:nth-child(3)");
		// log_element("body > div:nth-child(3) > div");
		// log_element("body > div:nth-child(3) > div > div.page-main");
		// log_element("body > div:nth-child(3) > div > div.page-main > div.content-wrapper");
		// log_element("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div");
		// log_element("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2)");
		// log_element("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div");
		// log_element("body > div:nth-child(3) > div > div.page-main > div.content-wrapper > div > div:nth-child(2) > div > div.summary");

		// 预估期权总价值标签修改后，尝试触发数值修改
		var b = estimated_total_option_value();
		if (b != null) {
			$(b).one("DOMSubtreeModified", function(){
				// console.log("fuck", estimated_total_option_value());
				modify_all();
			});
			$(body).off('DOMSubtreeModified');
		} else {
			console.log("body内容未加载");
		}
		
	});
}


