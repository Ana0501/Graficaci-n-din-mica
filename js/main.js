 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});


 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(dibujarGrafica);
 //google.charts.setOnLoadCallback(drawRegionsMap);


 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function dibujarGrafica() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Champiñones', 5],
     ['Cebolla', 1],
     ['Aceitunas', 1],
     ['Zucchini', 1],
     ['Pepperoni', 2]
   ]);

   // Set chart options
   var options = {'title':'¿Cuántas pizza comiste en la noche?',
                  'width':450,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('grafica'));
   chart.draw(data, options);
   
  }
 
   //gRAFICA
  google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(dibujarGraf);
    function dibujarGraf() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Densidad de metales preciosos, in g/cm^3",
        width: 700,
        height: 380,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("grafibar"));
      chart.draw(view, options);
  }
//<div id="grafibar" style="width: 900px; height: 300px;"></div>
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['AÑO', 'VENTAS', 'GASTOS'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Desempeño de la compañía ',
          hAxis: {title: 'AÑO',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('grafarea'));
        chart.draw(data, options);
      }
      
      //CHART COMBO
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Producción mensual de café por país',
          vAxis: {title: 'Tazas'},
          hAxis: {title: 'Mes'},
          seriesType: 'barras',
          series: {5: {type: 'linea'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('grafcombo'));
        chart.draw(data, options);
      }
      //HISTOGRAMA
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(dibujarHistograma);
      function dibujarHistograma() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
          title: 'Lengths of dinosaurs, in meters',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('grafhisto'));
        chart.draw(data, options);
      }

      //----------------------------------------------------
      //Graf couge

      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('grafgauge'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
      }
      //GRÁFICA DE LÍNEA
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'x');
        data.addColumn('number', 'values');
        data.addColumn({id:'i0', type:'number', role:'interval'});
        data.addColumn({id:'i1', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
        data.addColumn({id:'i2', type:'number', role:'interval'});
  
        data.addRows([
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110]]);
  
        // The intervals data as narrow lines (useful for showing raw source data)
        var options_lines = {
            title: 'Line intervals, default',
            curveType: 'function',
            lineWidth: 4,
            intervals: { 'style':'line' },
            legend: 'none'
        };
  
        var chart_lines = new google.visualization.LineChart(document.getElementById('graflineas'));
        chart_lines.draw(data, options_lines);
      }
      //grf 
        //graficas 
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Mon', 20, 28, 38, 45],
  ['Tue', 31, 38, 55, 66],
  ['Wed', 50, 55, 77, 80],
  ['Thu', 77, 77, 66, 50],
  ['Fri', 68, 66, 22, 15]
  // Treat first row as data as well.
], true);

var options = {
  legend:'none'
};

var chart = new google.visualization.CandlestickChart(document.getElementById('grafcandelero'));

chart.draw(data, options);
}