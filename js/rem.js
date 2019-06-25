// !(function(doc, win) {
// 	var docEl = doc.documentElement
// 	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
// 	var reCaculate = function() {
// 		var clientWidth = docEl.clientWidth
// 		if (!clientWidth) return
// 		docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
// 	}
// 	if (!doc.addEventListener) return
// 	win.addEventListener(resizeEvt, reCaculate, false)
// 	doc.addEventListener('DOMContentLoaded', reCaculate, false)
// })
// 