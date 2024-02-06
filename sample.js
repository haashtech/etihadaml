var current = 1;
    var tabs = $(".tab");
    var tabsPill = $(".tab-pills");

    loadFormData(current);

    function loadFormData(n) {
      tabs.hide();
      $("#tab-" + n).removeClass("d-none");
    }

    function showTab(tabNumber) {
      current = tabNumber;
      loadFormData(current);
    }

    function showNextTabContent(tabNumber) {
      var individualCheckbox = $("#flexCheckDefault1");
      var corporateCheckbox = $("#flexCheckChecked1");

      // Check which checkbox is selected
      if (individualCheckbox.prop("checked")) {
        $("#individualContent").removeClass("d-none");
        $("#corporateContent").addClass("d-none");
      } else if (corporateCheckbox.prop("checked")) {
        $("#corporateContent").removeClass("d-none");
        $("#individualContent").addClass("d-none");
      }
      
      // Move to the next tab
      current++;
      loadFormData(current);
    }