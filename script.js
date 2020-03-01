$(document).ready(function(){

	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#products");
		var classNames = $(this).attr('class').split(' ');
		
		var gridthumb = "images/products/grid-default-thumb.png";
		var listthumb = "images/products/list-default-thumb.png";
		
		if($(this).hasClass("active")) {
			
			return false;
		} else {

  			if(theid == "gridview") {
				$(this).addClass("active");
				$("#listview").removeClass("active");
			    theproducts.removeClass("list");
				theproducts.addClass("grid");
		        $("img.thumb").attr("src",gridthumb);
			}
			
			else if(theid == "listview") {
				$(this).addClass("active");
				$("#gridview").removeClass("active");
				theproducts.removeClass("grid")
				theproducts.addClass("list");
				$("img.thumb").attr("src",listthumb);
			} 
		}

	});
});