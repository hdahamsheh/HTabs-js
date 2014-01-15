(function( $ ) {
 
    $.fn.HTabs = function(options) {
		var settings = $.extend({
            // These are the defaults.
            slideSpeed: 300,
            hoverClass: "htabs-default-hover",
			tabClass : "htabs-default",
			selectedTabClass : "htabs-selected",
			contentFixedHeight : false,
			contentHeight : '200px'
        }, options );
		
		//Container object -- (JQuery collection if containers as in the selectors)
		var ContainerDiv = this;
		$(this).find('.htabs-cont').css('display','none');
		$(this).find('.htabs-cont').removeClass('htabs-selec-cont');
		
		if(settings.contentFixedHeight){
			$(this).find('.htabs-container').addClass('htabs-cont-fixed');
			$(this).find('.htabs-container').css('height',settings.contentHeight);
		}
		
        return this.children('ul').each(function() {
			//this is UL
            $(this).addClass('htabs-ul');
			
			$(this).find('li a').click(function(obj){$.fn.HTabs.htabsTabClicked(this,obj,ContainerDiv, settings)});
			var selectedCont = $(ContainerDiv).find($(this).find('li a.htabs-selec').attr('href'));
			$(selectedCont).css('display','block');
			$(selectedCont).addClass('htabs-selec-cont');
			$(this).children('li').each(function(){
				//this is LI
				
			});
			
			$.fn.HTabs.htabsRenderCustomClass(this, settings);
        });
    };
	
	$.fn.HTabs.htabsTabClicked = function(sender, event, containerDiv, options){
		var currentTab = containerDiv.find('li a.htabs-selec');
		var targetTab = $(event.target);
		var currentCont = $(containerDiv).find(currentTab.attr('href'));
		var targetCont = $(containerDiv).find(targetTab.attr('href'));
		
		if (currentCont != targetCont) {
			$(currentCont).slideUp(options.slideSpeed,
				function () {
					$(targetCont).slideDown(options.slideSpeed);
					
					currentTab.removeClass('htabs-selec');
					targetTab.addClass('htabs-selec');
					
					$.fn.HTabs.htabsRenderCustomClass(containerDiv.children('ul'), options);
				}
			);
		}
	};
	
	$.fn.HTabs.htabsRenderCustomClass = function (tabsContainer_ul, options){
		$(tabsContainer_ul).children('li').children('a').removeClass(options.selectedTabClass);
		
		$(tabsContainer_ul).children('li').children('a').hover(
			  function () {
				$(this).addClass(options.hoverClass);
			  }, 
			  function () {
				$(this).removeClass(options.hoverClass);
			  }
		);
		
		$(tabsContainer_ul).children('li').children('a').addClass(options.tabClass);
		$(tabsContainer_ul).children('li').children('a.htabs-selec').addClass(options.selectedTabClass);
	}
 
}( jQuery ));


/*********************** Options explanation 
	slideSpeed			: content div slide down/up speed -- slow, fast, or a number(milliseconds)
	hoverClass			: style class for tabs when mouse hover it
	tabClass 			: style class for tabs by default
	selectedTabClass	: style class for selected tab
	contentFixedHeight 	: to have fixed height for content divs and scroll if needed or not
	contentHeight 		: height for the content divs if it was fixed height
*/