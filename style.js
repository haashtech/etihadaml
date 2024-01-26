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
  $(tabsPill[n]).addClass("active").addClass("completed");
  $(tabs[n]).removeClass("d-none");
  $("#back_button").attr("disabled", n === 0 ? true : false);
  n === tabs.length 
    ? $("#next_button").text("Submit").removeAttr("onclick")
    : $("#next_button")
        .attr("type", "button")
        .text("Next")
        .attr("onclick", "next()");
}

function next() {
  $(tabs[current]).addClass("d-none");
  $(tabsPill[current]).removeClass("active");

  current++;
  loadFormData(current);
}

function back() {
  $(tabs[current]).addClass("d-none");
  $(tabsPill[current]).removeClass("active");

  current--;
  loadFormData(current);
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


  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#myButton');
    const lists = document.querySelectorAll('.myList');
    let buttonHidden = false;

    // Add click event listener to each list
    lists.forEach(function(list) {
      list.addEventListener('click', function(event) {
        // Hide the button only if it's not already hidden
        if (!buttonHidden) {
          buttons.forEach(function(button) {
            button.style.display = 'none';
          });
          buttonHidden = true;
        }
        // Stop the event from propagating to the document
        event.stopPropagation();
      });
    });

    // Add click event listener to the document
    document.addEventListener('click', function() {
      // Show the button only if it's currently hidden
      if (buttonHidden) {
        buttons.forEach(function(button) {
          button.style.display = 'block';
        });
        buttonHidden = false;
      }
    });
  });``