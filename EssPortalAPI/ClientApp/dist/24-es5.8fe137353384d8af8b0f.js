!function(){function a(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")}function r(a,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{vRsG:function(t,e,o){"use strict";o.r(e),o.d(e,"AppChartsModule",function(){return f});var i,c,n=o("SVse"),s=o("iInd"),h=o("PDjf"),l=o("SqCe"),d=o("u9T3"),b=o("hrfs"),g=o("8Y7J"),C=o("VDRc"),p=o("BSbQ"),u=[{path:"",component:(i=function(){function t(){a(this,t),this.sharedChartOptions={responsive:!0,legend:{display:!1,position:"bottom"}},this.chartColors=[{backgroundColor:"#3f51b5",borderColor:"#3f51b5",pointBackgroundColor:"#3f51b5",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#eeeeee",borderColor:"#e0e0e0",pointBackgroundColor:"#e0e0e0",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.barChartLabels=["1","2","3","4","5","6","7"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[5,6,7,8,4,5,5],label:"Series A",borderWidth:0},{data:[5,4,4,3,6,2,5],label:"Series B",borderWidth:0}],this.barChartOptions=Object.assign({scaleShowVerticalLines:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},position:"left",ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.sharedChartOptions),this.barChartHorizontalType="horizontalBar",this.barChartHorizontalOptions=Object.assign({scaleShowVerticalLines:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}]}},this.sharedChartOptions),this.barChartStackedOptions=Object.assign({scaleShowVerticalLines:!1,tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0}]}},this.sharedChartOptions),this.lineChartData=[{data:[5,5,7,8,4,5,5],label:"Series A",borderWidth:1},{data:[5,4,4,3,6,2,5],label:"Series B",borderWidth:1}],this.lineChartLabels=["1","2","3","4","5","6","7"],this.lineChartOptions=Object.assign({animation:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.sharedChartOptions),this.lineChartLegend=!1,this.lineChartType="line",this.lineChartPointsData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1,fill:!1,pointRadius:10,pointHoverRadius:15,showLine:!1},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1,fill:!1,pointRadius:10,pointHoverRadius:15,showLine:!1}],this.lineChartPointsOptions=Object.assign({scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]},elements:{point:{pointStyle:"rectRot"}}},this.sharedChartOptions),this.bubbleChartData=[{data:[{x:4,y:4,r:15},{x:6,y:12,r:30},{x:5,y:4,r:10},{x:8,y:4,r:6},{x:7,y:8,r:4},{x:3,y:13,r:14},{x:5,y:6,r:8},{x:7,y:2,r:10}],label:"Series A",borderWidth:1}],this.bubbleChartType="bubble",this.bubbleChartLabels=["1","2","3","4","5","6","7"],this.bubbleChartLegend=!0,this.bubbleChartOptions=Object.assign({animation:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.sharedChartOptions),this.doughnutChartColors=[{backgroundColor:["#f44336","#3f51b5","#ffeb3b","#4caf50","#2196f"]}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.doughnutOptions=Object.assign({elements:{arc:{borderWidth:0}}},this.sharedChartOptions),this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A",borderWidth:1},{data:[28,48,40,19,96,27,100],label:"Series B",borderWidth:1}],this.radarChartType="radar",this.radarChartColors=[{backgroundColor:"rgba(36, 123, 160, 0.2)",borderColor:"rgba(36, 123, 160, 0.6)",pointBackgroundColor:"rgba(36, 123, 160, 0.8)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(36, 123, 160, 0.8)"},{backgroundColor:"rgba(244, 67, 54, 0.2)",borderColor:"rgba(244, 67, 54, .8)",pointBackgroundColor:"rgba(244, 67, 54, .8)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(244, 67, 54, 1)"}],this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.pieChartColors=[{backgroundColor:["rgba(255, 217, 125, 0.8)","rgba(36, 123, 160, 0.8)","rgba(244, 67, 54, 0.8)"]}]}var e,o,i;return e=t,(o=[{key:"ngOnInit",value:function(){}},{key:"barChartClicked",value:function(a){}},{key:"barChartHovered",value:function(a){}},{key:"lineChartClicked",value:function(a){}},{key:"lineChartHovered",value:function(a){}},{key:"doughnutChartClicked",value:function(a){}},{key:"doughnutChartHovered",value:function(a){}},{key:"radarChartClicked",value:function(a){}},{key:"radarChartHovered",value:function(a){}},{key:"pieChartClicked",value:function(a){}},{key:"pieChartHovered",value:function(a){}}])&&r(e.prototype,o),i&&r(e,i),t}(),i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=g.Vb({type:i,selectors:[["app-charts"]],decls:73,vars:50,consts:[["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","33"],[1,"p-0"],[1,""],[1,"card-title-text"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType"],["baseChart","",1,"chart",3,"data","labels","options","colors","chartType"],["baseChart","",1,"chart",3,"data","labels","options","colors","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","legend","colors","chartType","chartHover","chartClick"]],template:function(a,r){1&a&&(g.hc(0,"div",0),g.hc(1,"div",1),g.hc(2,"mat-card",2),g.hc(3,"mat-card-title",3),g.hc(4,"div",4),g.fd(5,"Vertical Bar chart"),g.gc(),g.cc(6,"mat-divider"),g.gc(),g.hc(7,"mat-card-content"),g.cc(8,"canvas",5),g.gc(),g.gc(),g.gc(),g.hc(9,"div",1),g.hc(10,"mat-card",2),g.hc(11,"mat-card-title",3),g.hc(12,"div",4),g.fd(13,"Horizontal Bar chart"),g.gc(),g.cc(14,"mat-divider"),g.gc(),g.hc(15,"mat-card-content"),g.cc(16,"canvas",5),g.gc(),g.gc(),g.gc(),g.hc(17,"div",1),g.hc(18,"mat-card",2),g.hc(19,"mat-card-title",3),g.hc(20,"div",4),g.fd(21,"Stacked Bar chart"),g.gc(),g.cc(22,"mat-divider"),g.gc(),g.hc(23,"mat-card-content"),g.cc(24,"canvas",5),g.gc(),g.gc(),g.gc(),g.hc(25,"div",1),g.hc(26,"mat-card",2),g.hc(27,"mat-card-title",3),g.hc(28,"div",4),g.fd(29,"Basic Line chart"),g.gc(),g.cc(30,"mat-divider"),g.gc(),g.hc(31,"mat-card-content"),g.cc(32,"canvas",5),g.gc(),g.gc(),g.gc(),g.hc(33,"div",1),g.hc(34,"mat-card",2),g.hc(35,"mat-card-title",3),g.hc(36,"div",4),g.fd(37,"Point Line chart"),g.gc(),g.cc(38,"mat-divider"),g.gc(),g.hc(39,"mat-card-content"),g.cc(40,"canvas",5),g.gc(),g.gc(),g.gc(),g.hc(41,"div",1),g.hc(42,"mat-card",2),g.hc(43,"mat-card-title",3),g.hc(44,"div",4),g.fd(45,"Bubble chart"),g.gc(),g.cc(46,"mat-divider"),g.gc(),g.hc(47,"mat-card-content"),g.cc(48,"canvas",6),g.gc(),g.gc(),g.gc(),g.hc(49,"div",1),g.hc(50,"mat-card",2),g.hc(51,"mat-card-title",3),g.hc(52,"div",4),g.fd(53,"Doughnut chart"),g.gc(),g.cc(54,"mat-divider"),g.gc(),g.hc(55,"mat-card-content"),g.cc(56,"canvas",7),g.gc(),g.gc(),g.gc(),g.hc(57,"div",1),g.hc(58,"mat-card",2),g.hc(59,"mat-card-title",3),g.hc(60,"div",4),g.fd(61,"Pie chart"),g.gc(),g.cc(62,"mat-divider"),g.gc(),g.hc(63,"mat-card-content"),g.hc(64,"canvas",8),g.pc("chartHover",function(a){return r.pieChartHovered(a)})("chartClick",function(a){return r.pieChartClicked(a)}),g.gc(),g.gc(),g.gc(),g.gc(),g.hc(65,"div",1),g.hc(66,"mat-card",2),g.hc(67,"mat-card-title",3),g.hc(68,"div",4),g.fd(69,"Radar chart"),g.gc(),g.cc(70,"mat-divider"),g.gc(),g.hc(71,"mat-card-content"),g.hc(72,"canvas",9),g.pc("chartHover",function(a){return r.radarChartHovered(a)})("chartClick",function(a){return r.radarChartClicked(a)}),g.gc(),g.gc(),g.gc(),g.gc(),g.gc()),2&a&&(g.Nb(8),g.Bc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartOptions)("colors",r.chartColors)("legend",r.barChartLegend)("chartType",r.barChartType),g.Nb(8),g.Bc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartHorizontalOptions)("colors",r.chartColors)("legend",r.barChartLegend)("chartType",r.barChartHorizontalType),g.Nb(8),g.Bc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartStackedOptions)("colors",r.chartColors)("legend",r.barChartLegend)("chartType",r.barChartType),g.Nb(8),g.Bc("datasets",r.lineChartData)("labels",r.lineChartLabels)("options",r.lineChartOptions)("colors",r.chartColors)("legend",r.lineChartLegend)("chartType",r.lineChartType),g.Nb(8),g.Bc("datasets",r.lineChartPointsData)("labels",r.lineChartLabels)("options",r.lineChartPointsOptions)("colors",r.chartColors)("legend",r.lineChartLegend)("chartType",r.lineChartType),g.Nb(8),g.Bc("datasets",r.bubbleChartData)("labels",r.bubbleChartLabels)("options",r.bubbleChartOptions)("legend",r.bubbleChartLegend)("chartType",r.bubbleChartType),g.Nb(8),g.Bc("data",r.doughnutChartData)("labels",r.doughnutChartLabels)("options",r.doughnutOptions)("colors",r.doughnutChartColors)("chartType",r.doughnutChartType),g.Nb(8),g.Bc("data",r.pieChartData)("labels",r.pieChartLabels)("options",r.doughnutOptions)("colors",r.doughnutChartColors)("chartType",r.pieChartType),g.Nb(8),g.Bc("datasets",r.radarChartData)("labels",r.radarChartLabels)("legend",!1)("colors",r.chartColors)("chartType",r.radarChartType))},directives:[C.d,C.b,h.a,h.i,p.a,h.d,b.a],styles:[""]}),i),data:{title:"Charts"}}],f=((c=function r(){a(this,r)}).\u0275mod=g.Zb({type:c}),c.\u0275inj=g.Yb({factory:function(a){return new(a||c)},imports:[[n.c,l.e,h.g,d.a,b.b,s.k.forChild(u)]]}),c)}}])}();