{ // Navigation
// Planet dropdown
const planetDropdownBox = document.querySelector("nav div");
const nav = document.querySelector("nav");
const navButton = document.getElementById("stickButton");
let isDropdownOpen = false;
let isNavOpen = true;

// Alternate between opening and closing dropdown
function planetDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
        planetDropdownBox.style.height = "240px";
    } else {
        planetDropdownBox.style.height = "0px";
    }
    sessionStorage.setItem("planetButtonState", isDropdownOpen);
}

// Open and close navigation bar
function navSwitch() {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        nav.style.right = "15px";
    } else {
        nav.style.right = "-160px";
    }
}

// If the dropdown and/or nav is left open, keep it open if the page changes
window.addEventListener("load", () => {
    // Need to come up with a better name
    const PLACEHOLDERNAME = sessionStorage.getItem("planetButtonState");
    planetDropdownBox.style.transition = "none";
    if (PLACEHOLDERNAME == "true") {
        planetDropdown();
    }
    window.setTimeout(() => {
        planetDropdownBox.style.transition = "height 0.5s";
    }, 100);
});
}

{ // Plotly
function bubbleChart() {
    var trace1 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [8.2, 27.4, 28.1, 8.3, 100, 41.4, 29.4, 30.1],
        text: ['Mass: 0.33', 'Mass: 4.87', 'Mass: 5.97', 'Mass: 0.642', 'Mass: 1898', 'Mass: 568', 'Mass: 86.8', 'Mass: 102'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [8.2, 27.4, 28.1, 8.3, 100, 41.4, 29.4, 30.1]
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Mass (10^24kg)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}

function bubbleChart1() {
    var trace2 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [3.2, 8, 8.5, 4.5, 100, 84, 35.6, 34.4],
        text: ['Diameter: 4879', 'Diameter: 12104', 'Diameter: 12756', 'Diameter: 6792', 'Diameter: 142984','Diameter: 120536', 'Diameter: 51118', 'Diameter: 49528'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [3.2, 8, 8.5, 4.5, 100, 84, 35.6, 34.4]
        }
    };

    var data = [trace2];

    var layout = {
        title: 'Diameter (km)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}

function bubbleChart2() {
    var trace3 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [89.9, 80.1, 100, 61.8, 26, 10, 25.4, 47.2],
        text: ['Density: 5429', 'Density: 5243', 'Density: 5514', 'Density: 3934', 'Density: 1326', 'Density: 687', 'Density: 1270', 'Density: 1638'],
        mode: 'markers',
        marker: {
            size: [89.9, 80.1, 100, 61.8, 26, 10, 25.4, 47.2],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    var data = [trace3];

    var layout = {
        title: 'Density (kg/m^3)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
    
}

function bubbleChart3() {
    var trace4 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [18.5, 44.5, 49, 18.5, 115.5, 45, 43.5, 55],
        text: ['Surface Gravity: 3.7', 'Surface Gravity: 8.9', 'Surface Gravity: 9.8', 'Surface Gravity: 3.7', 'Surface Gravity: 23.1', 'Surface Gravity: 9', 'Surface Gravity: 8.7', 'Surface Gravity: 11'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [18.5, 44.5, 49, 18.5, 115.5, 45, 43.5, 55]
        }
    };

    var data = [trace4];

    var layout = {
        title: 'Surface Gravity (m/s^2)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}

function bubbleChart4() {
    var trace5 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [4.3, 10.4, 11.2, 5, 59.5, 35.5, 21.3, 23.5],
        text: ['Escape Velocity: 4.3', 'Escape Velocity: 10.4', 'Escape Velocity: 11.2', 'Escape Velocity: 5', 'Escape Velocity: 59.5', 'Escape Velocity: 35.5', 'Escape Velocity: 21.3', 'Escape Velocity: 23.5'],
        mode: 'markers',
        marker: {
            size: [8.6, 20.8, 22.4, 10, 119, 71, 42.6, 47], 
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    var data = [trace5];

    var layout = {
        title: 'Escape Velocity (km/s)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}

function bubbleChart5() {
    var trace6 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [96.1, 10, 48.8, 49.6, 48, 48.1, 48.6, 47.8],
        text: ['Rotation Period: 1407.6', 'Rotation Period: -5832.5', 'Rotation Period: 23.9', 'Rotation Period: 24.6', 'Rotation Period: 9.9', 'Rotation Period: 10.7', 'Rotation Period: -17.2', 'Rotation Period: 16.1'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [96.1, 10, 48.8, 49.6, 48, 48.1, 48.6, 47.8],
        }
    };

    var data = [trace6];

    var layout = {
        title: 'Rotaion Period (hours)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
    
}

function bubbleChart6() {
    var trace7 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [208.2, 127.8, 9, 10.2, 3.6, 6.3, 148.5, 106.2],
        text: ['Length of Day: 4222.6', 'Length of Day: 2802', 'Length of Day: 24', 'Length of Day: 24.7', 'Length of Day: 9.9', 'Length of Day: 10.7', 'Length of Day: 17.2', 'Length of Day: 16.1'],
        mode: 'markers',
        marker: {
            size: [208.2, 127.8, 9, 10.2, 3.6, 6.3, 148.5, 106.2],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    var data = [trace7];

    var layout = {
        title: 'Length of Day (hours)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}

function bubbleChart7() {
    var trace8 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [17.2, 33.6, 50, 74.7, 99.8, 134.7, 192.6, 235.1],
        text: ['Distance from Sun: 57.9', 'Distance from Sun: 108.2', 'Distance from Sun: 149.6', 'Distance from Sun: 228', 'Distance from Sun: 778.5', 'Distance from Sun: 1432', 'Distance from Sun: 2867', 'Distance from Sun: 4515'],
        mode: 'markers',
        marker: {
            size: [17.2, 33.6, 50, 74.7, 99.8, 134.7, 192.6, 235.1],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    var data = [trace8];

    var layout = {
        title: 'Distance from Sun (10^6 km)',
        showlegend: false,
        height: 700,
        width: 1200
    };

    Plotly.newPlot('myDiv', data, layout);
}



}