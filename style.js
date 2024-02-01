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
  const nextButton = $("#next_button");

  $(tabsPill[n]).addClass("active").addClass("completed");
  $(tabs[n]).removeClass("d-none");
  $("#back_button").attr("disabled", n === 0 ? true : false);

  if (n + 1 === tabs.length) {
    // Change text to "SEND REQUEST" without changing the background color
    nextButton.text("SEND REQUEST").css("background-color", "var(--submit)").removeAttr("onclick");
    // Remove hover effect when it's the final step
    nextButton.off('mouseenter mouseleave').css("background-color", "var(--submit)");
  } else {
    // Reset the text to "CONTINUE" and keep the background color
    nextButton.text("CONTINUE").css("background-color", "var(--orange)").attr("type", "button").attr("onclick", "next()");

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
  $("#back_button").attr("disabled", current === 0);
}


// end






  // document.addEventListener('DOMContentLoaded', function() {
  //   // const button = document.getElementById('myButton');
  //   const button = document.querySelectorAll('#myButton');
  //   // const list = document.getElementById('myList');
  //   const list = document.querySelectorAll('.myList');
  //   let buttonHidden = false;

  //   // Add click event listener to the list
  //   list.addEventListener('click', function(event) {
  //     // Hide the button only if it's not already hidden
  //     if (!buttonHidden) {
  //       button.style.display = 'none';
  //       buttonHidden = true;
  //     }
  //     // Stop the event from propagating to the document
  //     event.stopPropagation();
  //   });

  //   // Add click event listener to the document
  //   document.addEventListener('click', function() {
  //     // Show the button only if it's currently hidden
  //     if (buttonHidden) {
  //       button.style.display = 'block';
  //       buttonHidden = false;
  //     }
  //   });
  // });


  // document.addEventListener('DOMContentLoaded', function() {
  //   const buttons = document.querySelectorAll('#myButton');
  //   const lists = document.querySelectorAll('.myList');
  //   let buttonHidden = false;

  //   // Add click event listener to each list
  //   lists.forEach(function(list) {
  //     list.addEventListener('click', function(event) {
  //       // Hide the button only if it's not already hidden
  //       if (!buttonHidden) {
  //         buttons.forEach(function(button) {
  //           button.style.display = 'none';
  //         });
  //         buttonHidden = true;
  //       }
  //       // Stop the event from propagating to the document
  //       event.stopPropagation();
  //     });
  //   });

  //   // Add click event listener to the document
  //   document.addEventListener('click', function() {
  //     // Show the button only if it's currently hidden
  //     if (buttonHidden) {
  //       buttons.forEach(function(button) {
  //         button.style.display = 'block';
  //       });
  //       buttonHidden = false;
  //     }
  //   });
  // });

  

  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const hideButtonTab = document.getElementById('hide_btn_tab');
    const listButtonTab1 = document.getElementById('list_btn_tab1');
    const listButtonTab2 = document.getElementById('list_btn_tab2');
    const tab2 = document.getElementById('btn_dashboard_tab');
    const tab3 = document.getElementById('btn_profile_tab');

    // Initially hide the button
    // button.style.display = 'block';

    // Variable to track the current active tab
    let currentActiveTab = null;

    // Add click event listener to Hide Button Tab
    hideButtonTab.addEventListener('click', function(event) {
      // Hide the button when in Hide Button Tab
      button.style.display = 'none';
      // Stop the event from propagating to the body click event
      event.stopPropagation();
      // Update the current active tab
      currentActiveTab = hideButtonTab;
    });

    // Add click event listener to Tab 2
    tab2.addEventListener('click', function() {
      // Show the button when in Tab 2 and not in Hide Button Tab
      if (currentActiveTab !== hideButtonTab) {
        button.style.display = 'block';
      }
      // Update the current active tab
      currentActiveTab = tab2;
    });

    tab3.addEventListener('click', function() {
      // Show the button when in Tab 2 and not in Hide Button Tab
      if (currentActiveTab !== hideButtonTab) {
        button.style.display = 'block';
      }
      // Update the current active tab
      currentActiveTab = tab2;
    });

    listButtonTab1.addEventListener('click', function() {
      // Show the button when in Tab 2 and not in Hide Button Tab
      if (currentActiveTab !== hideButtonTab) {
        button.style.display = 'block';
      }
      // Update the current active tab
      currentActiveTab = tab2;
    });

    listButtonTab2.addEventListener('click', function() {
      // Show the button when in Tab 2 and not in Hide Button Tab
      if (currentActiveTab !== hideButtonTab) {
        button.style.display = 'block';
      }
      // Update the current active tab
      currentActiveTab = tab2;
    });

    // Add click event listener to the body
    document.body.addEventListener('click', function(event) {
      // Show the button when clicking anywhere else and not in Hide Button Tab
      if (event.target !== hideButtonTab && currentActiveTab !== hideButtonTab) {
        button.style.display = 'block';
      } 
      // Update the current active tab
      // currentActiveTab = null;
    });
  });



  // individual_corporate check

  
        const checkboxes = document.querySelectorAll('.form-check-input');
      
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', function () {
            checkboxes.forEach((otherCheckbox) => {
              if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
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



// const range = document.querySelector('#range');
// range.addEventListener('input', function () {
//     const bg = getComputedStyle(this).getPropertyValue('--white');
//     const slider = getComputedStyle(this).getPropertyValue('--slider');
//     range.setAttribute(
//         'style',
//         `background:linear-gradient(to right,${slider},${slider} ${this.value}%,${bg} ${this.value}%) `
//     )
// })



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

$(document).ready(function () {
  $('#datepicker1').datepicker({
    format: 'mm/dd',
    viewMode: "days",
    minViewMode: "days",
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
