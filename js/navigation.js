$(window).on('load', function() {




	$('.page-template-home #menu-item-23 a').click(function(e){
		e.preventDefault();
	});


	function setCookie (name, value, expires, path, domain, secure) {
		document.cookie = name + "=" + escape(value) +
			((expires) ? "; expires=" + expires : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	}
	function getCookie(name) {
		var cookie = " " + document.cookie;
		var search = " " + name + "=";
		var setStr = null;
		var offset = 0;
		var end = 0;
		if (cookie.length > 0) {
			offset = cookie.indexOf(search);
			if (offset != -1) {
				offset += search.length;
				end = cookie.indexOf(";", offset)
				if (end == -1) {
					end = cookie.length;
				}
				setStr = unescape(cookie.substring(offset, end));
			}
		}
		return(setStr);
	}

	$('#yesold').click(function(e){
		e.preventDefault();
		// $('.how-old').removeClass('active');
		document.location.reload(true);
		setCookie("old", "1", "Mon, 01-Jan-2050 00:00:00 GMT", "/");
	});
	$('#noold').click(function(e){
		e.preventDefault();
		if($(this).attr('href')){
			window.location.href=$(this).attr('href');
		}else{
			window.open('','_self').close();
		}
	});


	$('.filter__col  select').change(function(){
		if($('body').hasClass('home')){
			var type='home'
			var perpage=15;
		}else{
			var type='black'
			var perpage=6;
		}
		$('#true_loadmoreblack').attr('data-sort',$("#sort").val());
		$('#true_loadmoreblack').attr('data-game_providers',$("#game_providers").val());
		$('#true_loadmoreblack').attr('data-payment_method',$("#payment_method").val());
		$('#true_loadmoreblack').attr('data-casino_bonuses',$("#casino_bonuses").val());
		$('#true_loadmoreblack').attr('data-casino_licenses',$("#casino_licenses").val());
		$('#true_loadmoreblack').attr('data-current_page',1);
		$("#true_loadmoreblack").removeClass('hidden');
		current_page=0;
		var sort=$(this).val();
		var casino_bonuses=$('#casino_bonuses').val();
		var payment_method=$('#payment_method').val();
		var game_providers=$('#game_providers').val();
		var casino_licenses=$('#casino_licenses').val();
		var data = {
			'action': 'loadmoreblack',
			'query': true_posts,
			'page' : current_page,
			'casino_bonuses' : casino_bonuses,
			'payment_method' : payment_method,
			'game_providers' : game_providers,
			'casino_licenses' : casino_licenses,
			'type' : type,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.listcasino').html(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					if ($('.js-scroll-product').length) {
						$(".js-scroll-product").mCustomScrollbar({
							axis: "y",
							theme: "dark-thin",
							autoExpandScrollbar: true,
							scrollButtons: {
								enable: true
							},
							advanced: {
								autoExpandHorizontalScroll: true
							}
						});
					};
					// if(parseInt($('#count_post').text())<=perpage){
					//     $('#true_loadmoreblack').addClass('hidden');
					// }
					current_page++; // увеличиваем номер страницы на единицу
					$('#true_loadmoreblack').attr('data-current_page',current_page);
					if (current_page == max_pages) $('#true_loadmoreblack').addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmoreblack').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});


	});



	$('#true_loadmoreblack').click(function(e){
		e.preventDefault();
		if($('body').hasClass('home')){
			var type='home'
			var perpage=15;
		}else{
			var type='black'
			var perpage=6;
		}
		current_page=$(this).attr('data-current_page');
		sort=$(this).attr('data-sort');
		game_providers=$(this).attr('data-game_providers');
		payment_method=$(this).attr('data-payment_method');
		casino_bonuses=$(this).attr('data-casino_bonuses');
		casino_licenses=$(this).attr('data-casino_licenses');
		var data = {
			'action': 'loadmoreblack',
			'query': true_posts,
			'page' : current_page,
			'casino_bonuses' : casino_bonuses,
			'payment_method' : payment_method,
			'game_providers' : game_providers,
			'casino_licenses' : casino_licenses,
			'type' : type,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.listcasino').append(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					$('#true_loadmoreblack').attr('data-current_page',current_page);
					if (current_page == max_pages) $('#true_loadmoreblack').addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmoreblack').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});








	$('.labelreviews  input').change(function(){
		$('#true_loadmorereviews').attr('data-sort',$(this).val());
		$('#true_loadmorereviews').attr('data-current_page',1);
		$("#true_loadmorereviews").removeClass('hidden')
		current_page=0;
		sort=$(this).val();
		var data = {
			'action': 'loadmorereviews',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.reviews-list').html(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmorereviews").addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmorereviews').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});


	});



	$('#true_loadmorereviews').click(function(e){
		e.preventDefault();
		current_page=$(this).attr('data-current_page');
		sort=$(this).attr('data-sort');
		var data = {
			'action': 'loadmorereviews',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.reviews-list').append(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					$('#true_loadmorereviews').attr('data-current_page',current_page);
					if (current_page == max_pages) $('#true_loadmorereviews').addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmorereviews').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});




	$('.removecomparison').click(function(e) {
		e.preventDefault();
		var data = {
			'action': 'remivecomparison',
			'id': $(this).attr('data-id'),
		};
		$(this).closest('.compare-table__col').remove();
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
			}
		});
	});
	$('.js-remove-all').click(function(e) {
		e.preventDefault();
		var data = {
			'action': 'remivecomparison',
			'id': 'ALL',
		};
		$('.compare-table__main-cols .compare-table__col').remove();
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
			}
		});
	});




	$('body').on('click','.video-list__item',function(){
		var data = {
			'action': 'viewsvideo',
			'id': $(this).attr('data-id'),
		};

		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
			}
		});
	});



	$('#true_loadmorebonus').click(function(e){
		e.preventDefault();
		var data = {
			'action': 'loadmorebonuse',
			'query': true_posts,
			'page' : current_page
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.bonuse-list').append(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmorebonus").remove(); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmorebonus').remove(); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});






	$('.labelvideo input').change(function(){
		$('#true_loadmorevideo').attr('data-sort',$(this).val());
		$('#true_loadmorevideo').attr('data-current_page',1);
		$("#true_loadmorevideo").removeClass('hidden');
		current_page=0;
		sort=$(this).val();
		var data = {
			'action': 'loadmorevideo',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort,
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.video-list').html(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmorevideo").addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmorevideo').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});


	});


	$('#true_loadmorevideo').click(function(e){
		e.preventDefault();
		current_page=$(this).attr('data-current_page');
		sort=$(this).attr('data-sort');
		author=$(this).attr('data-author');
		var data = {
			'action': 'loadmorevideo',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort,
			'author' : author
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.video-list').append(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					$('#true_loadmorevideo').attr('data-current_page',current_page);
					if (current_page == max_pages) $('#true_loadmorevideo').addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmorevideo').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});



	$('.js-with-drop>a').click(function() {
		$(this).parent().toggleClass('show-drop')
		return false;
	});






	$('.labelnews  input').change(function(){
		$('#true_loadmore').attr('data-sort',$(this).val());
		$('#true_loadmore').attr('data-current_page',1);
		$("#true_loadmore").removeClass('hidden')
		current_page=0;
		sort=$(this).val();
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.blog-list_post').html(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmore").addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmore').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});


	});

	$('#true_loadmore').click(function(e){
		e.preventDefault();
		current_page=$(this).attr('data-current_page');
		sort=$(this).attr('data-sort');
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page,
			'sort' : sort
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.blog-list_post').append(data); // вставляем новые посты
					if ($('.js-img').length) {
						var jsImg = $(".js-img");
						new LazyLoad(jsImg, {
							root: null,
							rootMargin: "0px",
							threshold: 0
						});
					};
					current_page++; // увеличиваем номер страницы на единицу
					$('#true_loadmore').attr('data-current_page',current_page);
					if (current_page == max_pages) $('#true_loadmore').addClass('hidden'); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmore').addClass('hidden'); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});




	$('body').on('click','.linklike',function(e){
		e.preventDefault();
		var data = {
			'action': 'like',
			'like' : $(this).attr('data-id')
		};
		var obj=$(this);
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					obj.find('span').text(data);
				}
			}
		});
	});

	$('body').on('click','.answer-link',function(){
		$('html').animate({
				scrollTop: $('#addreview').offset().top // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
		);
		$('#wpmtst_parent').val($(this).attr('data-id'));
	});

	$('#loadcomments').click(function(e){
		e.preventDefault();
		$(this).remove();
		var data = {
			'action': 'loadcomments',
			'page' : $(this).attr('data-id')
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.comment-list').append(data); // вставляем новые посты
				}
			}
		});
	});

	$('#loadcommentscasino').click(function(e){
		e.preventDefault();
		$(this).remove();
		var data = {
			'action': 'loadcommentscasino',
			'page' : $(this).attr('data-id')
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) {
					$('.comment-list').append(data); // вставляем новые посты
				}
			}
		});
	});
	jQuery('#wpmtst_email').closest('.box-field__input').addClass('lastinput');
	$('body').on('click','.addcompare',function(e){
		e.preventDefault();
		var data = {
			'action': 'addcomparison',
			'id' : $(this).attr('data-id')
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data!=1 ) {
					window.location='/sravnenie/';
				}else{
					alert('Для сравнения добавьте еще казино');
				}
			}
		});
	});

	$('body').on('click','.addlike',function(e){
		e.preventDefault();
		var data = {
			'action': 'addlike',
			'id' : $(this).attr('data-id')
		};
		var obj=$(this);
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if(data=='add'){
					obj.addClass('active');
				}else{
					obj.removeClass('active');
				}
			}
		});
	});



});