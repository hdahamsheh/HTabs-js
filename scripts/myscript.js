//Hdahamsheh 25/9/2013
$(function(){
	$(document).ready(function(){	
		$('#tabDiv').HTabs({
							slideSpeed: 600,
							hoverClass: "htabs-default-hoverTest",
							tabClass : "htabs-defaultTest",
							selectedTabClass : "htabs-selectedTest",
							contentFixedHeight : true,
							contentHeight : '150px'
					});
		$('#tabDivDefault').HTabs();
	})
});