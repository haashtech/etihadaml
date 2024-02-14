function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }
  function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    $("."+sliceID).css({
      "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    $("."+sliceID+" span").css({
      "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var sliceID = "s"+dataCount+"-"+sliceCount;
    var maxSize = 179;
    if(sliceSize<=maxSize) {
      addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(maxSize, pieElement, offset, sliceID, color);
      iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
      listTotal += listData[i];
    }
    var offset = 0;
    var color = [
      "#FF5428", 
      "black", 
    ];
    for(var i=0; i<listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(size, pieElement, offset, i, 0, color[i]);
      $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
      offset += size;
    }
  }
  createPie(".pieID.legend", ".pieID.pie");
  

// Dropdown

$("ul.nav li.dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
  }
);

// document.addEventListener('DOMContentLoaded', function () {
//   var dashboardBtn = document.getElementById('dashboardBtn');

//   dashboardBtn.addEventListener('click', function() {
//     // Toggle 'clicked' class to change text color and background color
//     dashboardBtn.style.color='black';
//     dashboardBtn.style.background='white';
//     dashboardBtn.classList.toggle('clicked');
//   });
// });




// step_wizard_start
var current = 0;
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

    

   
var current = 0;
var tabs = $(".tab");
var tabsPill = $(".tab-pills");

loadFormData(current);

function loadFormData(n) {
  const nextButton = $("#next_button");
  const backButton = $("#back1_button");
  const cardHeader = $("#card-header");
  

  $(tabsPill[n]).addClass("active").addClass("completed");
  $(tabs[n]).removeClass("d-none");
  // $("#back_button").attr("disabled", n === 0 ? true : false);

  if (n+2 === tabs.length) {
    // Change text to "SEND REQUEST" without changing the background color
    nextButton.text("SEND REQUEST").css("background-color", "var(--submit)")
    // Remove hover effect when it's the final step
    // nextButton.off('mouseenter mouseleave').css("background-color", "var(--submit)");
  }else if(tabs.length===n+1){
    nextButton.css("display", "none")
    backButton.css("display", "none")
    cardHeader.css("display", "none")

  }
  else {
    // Reset the text to "CONTINUE" and keep the background color
    nextButton.text("CONTINUE").css("background-color", "var(--orange)").attr("type", "button").attr("onclick", "next()");
    // nextButton.css("display", "inline")
    
    // Add hover effect
    if(nextButton.text=="CONTINUE"){
      nextButton.hover(
        function () {
          // Mouseenter (hover in) - Change background color on hover
          $(this).css("background-color", "#ee4801");
        },
        function () {
          // Mouseleave (hover out) - Change background color back to original
          $(this).css("background-color", "var(--orange)");
        }
      );
    }
  }
}

// Assuming you call the function at some point
loadFormData(current);

function next() {
  $(tabs[current]).addClass("d-none");
  $(tabsPill[current]).removeClass("active");
  
    var individualCheckbox = $("#flexCheckDefault");
    var corporateCheckbox = $("#flexCheckChecked");

    // Check which checkbox is selected
    if (individualCheckbox.prop("checked")) {
      $("#individualContent").removeClass("d-none");
      $("#corporateContent").addClass("d-none");
      $("#individualContent1").removeClass("d-none");
      $("#corporateContent1").addClass("d-none");
      $("#individualContent2").removeClass("d-none");
      $("#corporateContent2").addClass("d-none");
      $("#individualContent3").removeClass("d-none");
      $("#corporateContent3").addClass("d-none");
    } else if (corporateCheckbox.prop("checked")) {
      $("#corporateContent").removeClass("d-none");
      $("#individualContent").addClass("d-none");
      $("#corporateContent1").removeClass("d-none");
      $("#individualContent1").addClass("d-none");
      $("#corporateContent2").removeClass("d-none");
      $("#individualContent2").addClass("d-none");
      $("#corporateContent3").removeClass("d-none");
      $("#individualContent3").addClass("d-none");
   
    
    // Move to the next tab
    // current++;
    // loadFormData(current);
  }
  current++;
  loadFormData(current);
}

function back() {
  if (current > 0) {
    $(tabs[current]).addClass("d-none");
    $(tabsPill[current]).removeClass("active");

    // Remove completed class from the current tab
    $(tabsPill[current]).removeClass("completed");

    current--;

    // Add completed class to the previous tab
    $(tabsPill[current]).addClass("completed");

    loadFormData(current);
  }

  // Disable the back button if the current tab is 0
  // $("#back_button").attr("disabled", current === 0);
}


// end





document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const hideButtonTabs = document.querySelectorAll('.meeem'); // Adjust the selector based on your actual HTML structure
    const hideButtonTab = document.querySelector('.btnremove');

    hideButtonTab.addEventListener('click', function() {
        button.style.display = 'none';
    });
   

    button.addEventListener('click', function() {
      button.style.display = 'none';
  });

    hideButtonTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            button.style.display = 'block';
        });
    });
    hideButtonTab.forEach(tab => {
      hideButtonTab.addEventListener('click', function() {
          button.style.display = 'none';
      });
  });
});





  // individual_corporate check

  document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.form-check-input4');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Uncheck other checkboxes
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            } else {
                // Prevent unchecking if no other checkbox is checked
                const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                if (!atLeastOneChecked) {
                    this.checked = true;
                }
            }
        });
    });
});


// ranger start



document.addEventListener('DOMContentLoaded', function() {
  var documentElement = document;
  var selector = '[data-rangeslider]';
  var element = document.querySelector(selector);
  var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

  function valueOutput(element) {
    var value = element.value;
    var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
    output[textContent] = value;
  }

  documentElement.addEventListener('input', function(e) {
    var target = e.target;
    if (target.matches('input[type="range"]') || target.matches(selector)) {
      valueOutput(target);
    }
  });

  var rangesliderElement = document.querySelector('input[type="range"]');
  rangesliderElement.rangeslider({
    polyfill: false,
    onInit: function() {
      valueOutput(rangesliderElement);
    },
    onSlide: function(position, value) {
      console.log('onSlide');
      console.log('position: ' + position, 'value: ' + value);
    },
    onSlideEnd: function(position, value) {
      console.log('onSlideEnd');
      console.log('position: ' + position, 'value: ' + value);
    }
  });

  var rangesliderInput = document.querySelector('input[type="range"]');
  rangesliderInput.rangeslider({
    polyfill: false,
    onInit: function() {
      this.output = document.createElement('div');
      this.output.classList.add('range-output');
      this.$range.parentNode.insertBefore(this.output, this.$range.nextSibling);
      this.output.innerHTML = this.$element.value;
    },
    onSlide: function(position, value) {
      this.output.innerHTML = value;
    }
  });
});





var dropdown = document.getElementById("myDropdown");
var input = document.getElementById("dropdownInput");

document.addEventListener("click", function(event) {
  if (!event.target.closest('.dropdown-container')) {
    dropdown.style.display = 'none';
  }
});


input.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});


var dropdown1 = document.getElementById("myDropdown1");
var input1 = document.getElementById("dropdownInput1");

document.addEventListener("click", function(event) {
  if (!event.target.closest('.dropdown-container')) {
    dropdown1.style.display = 'none';
  }
});

input1.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdown1.style.display = (dropdown1.style.display === 'block') ? 'none' : 'block';
});


$(document).ready(function () {
  $('#datepicker1').datepicker({
    format: 'mm/dd/yy',
    
    autoclose: true,
  });
});
$(document).ready(function () {
  $('#datepicker2').datepicker({
      format: 'yyyy',
      viewMode: "years",
      minViewMode: "years"
  });
});





document.getElementById('myButton').addEventListener('click', function() {
  // Trigger a click event on the button to open the associated tab
  document.getElementById('myButton').click();
  
});



function filterTable(filterValue) {
  // Add your filter logic here
  var table, tr, td, i, txtValue;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  var matchesFound = false; // Flag to check if any matches are found

  for (i = 0; i < tr.length; i++) {
      var found = false; // Flag to check if the filter value is found in any column
      for (var j = 0; j < tr[i].cells.length; j++) {
          td = tr[i].cells[j];
          if (td) {
              txtValue = td.textContent || td.innerText;
              // Check if the filter value matches the text content
              if (filterValue === 'All' || txtValue.toUpperCase().indexOf(filterValue.toUpperCase()) > -1) {
                  found = true;
                  matchesFound = true;
                  break; // Stop checking other cells in the row if a match is found
              }
          }
      }
      if (found) {
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
  }

  // Display a message when no matches are found or the filter is empty
  var emptyMessage = document.getElementById("emptyMessage");
  if (!matchesFound || filterValue.trim() === '') {
      emptyMessage.style.display = "block";
  } else {
      emptyMessage.style.display = "none";
  }
}

  

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // Change the index to match the column you want to search
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
});




// collapse start 



var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
    collapseEl.addEventListener('hidden.bs.collapse', function () {
        let children = this.querySelectorAll('.collapse.show');
        children.forEach((c)=>{
            var collapse = bootstrap.Collapse.getInstance(c)
            collapse.hide()
        })
    })
})



// newCheck button start--

function switchToTab(tabId) {
  var tabs = document.querySelectorAll('.nav-link');
  tabs.forEach(function (tab) {
      if (tab.getAttribute('data-bs-target') === '#' + tabId) {
          tab.classList.add('active');
          
      } else {
          tab.classList.remove('active');
      }
  });

  var tabContent = document.querySelectorAll('.tab-pane');
  tabContent.forEach(function (content) {
      if (content.getAttribute('id') === tabId) {
          content.classList.add('show', 'active');

      } else {
          content.classList.remove('show', 'active');
      }
  });
}




document.getElementById('back_button').addEventListener('click', function() {
  // Reload the page
  window.location.reload();
});
document.getElementById('logout').addEventListener('click', function() {
  // Reload the page
  window.location.reload();
});




document.addEventListener('DOMContentLoaded', function() {
  const radioButtons = document.querySelectorAll('.form-check-input1');
  const rangeSelector = document.querySelector('input[name="progress_value[]"]');
  const outputaa = document.getElementById('outputaa');

  radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', function() {
          handleMatchTypeChange(this);
      });
  });

  function handleMatchTypeChange(radio) {
      if (radio.id === 'flexRadioDefault1') {
          rangeSelector.disabled = true;
          abc = rangeSelector.value = 100;
          outputaa.innerHTML = abc;
      } else {
          rangeSelector.disabled = false;
          dfg = rangeSelector.value = 80;
          outputaa.innerHTML = dfg;
      }
  }
});

function handleMatchTypeChange1(radio) {
  var rangeSelector1 = document.querySelector('input[name="progress_value1[]"]');
  var outputaa1 = document.getElementById('outputaa1');
  if (radio.id === 'flexRadioDefault3') {
    rangeSelector1.disabled = true;
    aaa=rangeSelector1.value = 100;
    outputaa1.innerHTML=aaa
  } else {
    rangeSelector1.disabled = false;
    ccc=rangeSelector1.value = 80;
    outputaa1.innerHTML=ccc

  }
}


