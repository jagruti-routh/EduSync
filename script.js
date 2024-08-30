function toggleProfileDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.user-info img')) {
        var dropdowns = document.getElementsByClassName("profile-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

/*Notofication Panel*/
function toggleNotifications() {
    var panel = document.getElementById('notificationPanel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function toggleNotificationMenu() {
    var menu = document.getElementById('notificationMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Hide the notification panel and menu when clicking outside
document.addEventListener('click', function(event) {
    var notificationPanel = document.getElementById('notificationPanel');
    var notificationMenu = document.getElementById('notificationMenu');
    var notificationIcon = document.querySelector('.notifications i');

    if (!notificationPanel.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationPanel.style.display = 'none';
        notificationMenu.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Monthly Revenue Chart
    var options1 = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Revenue',
            data: [30, 40, 95, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        colors: ['#f39c12'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal', // or 'vertical'
                shadeIntensity: 0.5,
                gradientToColors: ['#e74c3c'], // Color at the end of the gradient
                inverseColors: false,
                opacityFrom: 1.85,
                opacityTo: 0.95,
                stops: [0, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: true
        }
    };


    var chart1 = new ApexCharts(document.querySelector("#monthlyRevenueChart"), options1);
    chart1.render();

    // Device Type Chart
    var options2 = {
        chart: {
            type: 'donut'
        },
        series: [44, 55, 41, 17, 15],
        labels: ['VS Code', 'Python IDE', 'Edge', 'File Manager','Others']
    };

    var chart2 = new ApexCharts(document.querySelector("#deviceTypeChart"), options2);
    chart2.render();

    // Total Clicks Chart
    var options3 = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'Speed',
            data: [30, 40, 55, 50, 59, 80, 70, 91, 125]
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        colors: ['#f39c12'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal', // or 'vertical'
                shadeIntensity: 0.5,
                gradientToColors: ['#e74c3c'], // Color at the end of the gradient
                inverseColors: false,
                opacityFrom: 1.85,
                opacityTo: 0.95,
                stops: [0, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: true
        }
    };

    var chart3 = new ApexCharts(document.querySelector("#totalClicksChart"), options3);
    chart3.render();
});


/*Application page*/
// JavaScript to handle search bar and filter functionality
document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#appTable tr');
    rows.forEach(row => {
        const appName = row.cells[2].textContent.toLowerCase();
        row.style.display = appName.includes(searchValue) ? '' : 'none';
    });
    document.getElementById('clear-button').style.display = searchValue ? 'block' : 'none';
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('search').value = '';
    document.getElementById('search').dispatchEvent(new Event('input'));
});

document.getElementById('filter').addEventListener('change', function() {
    const filterValue = this.value;
    const rows = document.querySelectorAll('#appTable tr');
    rows.forEach(row => {
        const status = row.dataset.status;
        row.style.display = filterValue === 'all' || status === filterValue ? '' : 'none';
    });
});

function viewSelectedUpdate() {
    const selectedRollNos = Array.from(document.querySelectorAll('.select-checkbox:checked'))
                                 .map(checkbox => checkbox.dataset.rollno);
    if (selectedRollNos.length > 0) {
        const rollNoParams = selectedRollNos.join(',');
        window.location.href = `student_history.html?rollNos=${rollNoParams}`;
    } else {
        alert('Please select at least one record to update.');
    }
}

function uninstallSelected() {
    const selectedCheckboxes = document.querySelectorAll('.select-checkbox:checked');
    if (selectedCheckboxes.length > 0) {
        selectedCheckboxes.forEach(checkbox => {
            checkbox.closest('tr').remove();
        });
    } else {
        alert('Please select at least one Application to uninstall.');
    }
}

function toggleProfileDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.user-info img')) {
        var dropdowns = document.getElementsByClassName("profile-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
/*FIle Upload panel & Button*/
function toggleFileUploadPanel() {
    var panel = document.getElementById('fileUploadPanel');
    if (panel.style.display === 'none' || panel.style.display === '') {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  }

  function handleFileUpload(event) {
    var file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      // Logic to display the uploaded file in the table or process it further
      addFileToTable(file);
    } else {
      console.log("No file selected or file upload cancelled.");
    }
  }

  function addFileToTable(file) {
    // Your logic to add the uploaded file to the table
    // For example, you can create a new row and add file details
    console.log("File added to the table:", file.name);
  }

  // Drag-and-Drop Handlers
  var fileUploadPanel = document.getElementById('fileUploadPanel');

  fileUploadPanel.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUploadPanel.style.borderColor = '#4CAF50'; // Highlight the panel
  });

  fileUploadPanel.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUploadPanel.style.borderColor = '#a0a0a0'; // Reset the border color
  });

  fileUploadPanel.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUploadPanel.style.borderColor = '#a0a0a0'; // Reset the border color

    var files = e.dataTransfer.files;
    if (files.length > 0) {
      var file = files[0];
      console.log("Dropped file:", file.name);
      handleFileUpload({ target: { files: files } }); // Pass the file to the upload handler
    }
  });



/*function addNewApplication() {
    // Logic to add a new application
    closeAddPanel();
}*/




/* PROFILE PAGE */
// Function to show edit profile form
function showEditProfile() {
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('editProfileSection').style.display = 'block';

    // Populate form fields with current about section values
    document.getElementById('firstNameInput').value = document.getElementById('fullName').innerText.split(' ')[0];
    document.getElementById('lastNameInput').value = document.getElementById('fullName').innerText.split(' ')[1];
    document.getElementById('phoneInput').value = document.getElementById('phone').innerText.trim();
    document.getElementById('emailInput').value = document.getElementById('email').innerText;
    document.getElementById('countryInput').value = document.getElementById('country').innerText;
}

// Function to update profile and show about section
function updateProfile() {
    // Update the about section with new values from form fields
    document.getElementById('fullName').innerText = document.getElementById('firstNameInput').value + ' ' + document.getElementById('lastNameInput').value;
    document.getElementById('phone').innerText = document.getElementById('phoneInput').value;
    document.getElementById('email').innerText = document.getElementById('emailInput').value;
    document.getElementById('country').innerText = document.getElementById('countryInput').value;

    // Hide edit form and show about section
    document.getElementById('aboutSection').style.display = 'block';
    document.getElementById('editProfileSection').style.display = 'none';
}

// Function to toggle profile dropdown visibility
function toggleProfileDropdown() {
    var dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
