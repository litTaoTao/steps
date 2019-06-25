
$(function(){
	init()
})
function init(){
	getDate("data/testing.json", "#wizard", function(seletor) {
		steps(seletor);
		$('.steps').prepend(`<div style="line-height:14px;height:14px">调查进度<div>`);
		$("input").checkboxradio();
	});
}
//get
function getDate(url, seletor, callBack) {
	return $.ajax({
		type: "get",
		url: url,
		success: function(data) {
			let contentHtml = '';
			data.data.map((item, index) => {
				contentHtml += `<h2></h2>`;
				contentHtml += `<section>`;
				contentHtml += `<form action="" method="">`;
				contentHtml += `<div class="ques">${item.question}</div>`;
				contentHtml += `<ul>`;
				item.content.map((it, idx) => {
					let inputName = item.type === "radio" ? index : idx;
					let num=item.type === "radio"?String.fromCharCode(idx+65):"";
					contentHtml += `<li>`;
					contentHtml += `<label for=${index+1}-${idx+1}>${num} ${it.answer}</label>`;
					contentHtml += `<input type=${item.type} name=bandId id=${index+1}-${idx+1}>`;
					contentHtml += `</li>`;
				});
				contentHtml += `<ul>`;
				contentHtml += `</form>`;
				contentHtml += `</section>`;
			});
			$(seletor).html(contentHtml);
			callBack(seletor);
		}
	})
};
//step
function steps(seletor) {
	$(seletor).steps({
		headerTag: "h2",
		bodyTag: "section",
		transitionEffect: 'slideLeft',
		titleTemplate: '<span class="number"></span>#title#',
		iconType: "bullets",
		forceMoveForward: true, //防止跳转到上一页
		labels: {
			next: "下一步",
			finish: "完成"
		},
		onInit: function(event, currentIndex) {
			changeInput(this, currentIndex);
		},
		onStepChanging: function(event, currentIndex, newIndex) {
			if (currentIndex > newIndex) {
				return true;
			};
			return isAdopt(this, currentIndex);
		},
		onStepChanged: function(event, currentIndex, newIndex) {
			changeInput(this, currentIndex);
		},
		onFinishing: function(event, currentIndex) {
			return isAdopt(this, currentIndex);
		},
		onFinished: function() {
			$('#content').load("./pages/assessment.html");
		}
	});
}
//changeInput
function changeInput(that, currentIndex) {
	var currentId = `#${that.id}-p-${currentIndex}`;
	if (!$(currentId + " input:checked").length) {
		$(".actions li").addClass("disabled");
	}
	$(currentId + " input").on("change", function() {
		if ($(currentId + " input:checked").length) {
			$(".actions li").removeClass("disabled");
		} else {
			$(".actions li").addClass("disabled");
		}
	});
};
//isAdopt
function isAdopt(that, currentIndex) {
	var currentId = `#${that.id}-p-${currentIndex}`;
	if (!$(currentId + " input:checked").length) return !1;
	return !0
}
