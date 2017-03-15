(function() {
	

function Login() {
	$('.mask').css({
		display:'block'
	})
}
function CloseLogin() {
	$('.mask').css({
		display:'none'
	})
}

$('.logina').on('click',Login);

// 关闭登录页面
$('.closea').on('click',CloseLogin);


$('#loginDrag').on('mousedown',function (e) {
	
	// 获取事件源
	var eEvent=e||event;
	// 获取事件源对象
	// var eObj=eEvent.target||eEvent.srcElement;
	

	var X=eEvent.pageX-$('#login-div').offset().left;
	var Y=eEvent.pageY-$('#login-div').offset().top;
	
		$(document).on('mousemove',function(e) {
			var x=e.pageX+256-X;
			var y=e.pageY+140-Y;
			$('#login-div').css({
				left:x+'px',
				top:y+'px'
			});
		});
});
// 鼠标抬起事件
$('#loginDrag').on('mouseup',function (e) {
	$(document).unbind('mousemove');
})

}());