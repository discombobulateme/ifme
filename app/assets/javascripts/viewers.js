var onReadyViewers = function() {
  if (newOrEdit(["moments", "strategies"])) {
  	$("#viewers_all").click(function() {
  		$("#viewers_list :checkbox").prop("checked", $(this).prop("checked"));
  	});
	}
};

$(document).on("turbolinks:load", onReadyViewers);
