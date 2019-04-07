// !function(globe,fantory){
//
// }(window,function () {
//

$(function () {


        var year=[
            {code:0,
                name:"不限"},
            {code:1,
                name:"其他"}
        ];

        $("#year").dxSelectBox({
            dataSource:year,
            items:name.value,

        });
        //
        // $("#season").dxSelectBox({
        //     // dataSource:year,
        //     items:[],
        //
        // });
        //
        // $("#month").dxSelectBox({
        //     // dataSource:year,
        //     items:[],
        //
        // });

        $("#source").dxSelectBox({
            // dataSource:year,
            items:[],

        });

        $("#fastweek").dxSelectBox({
            // dataSource:year,
            items:[],

        });

        var now=new Date();
        var startime=now-(30*24*60*60*1000);
        $("#begin-time").dxDateBox({
            type:"datetime",
            displayFormat: "yyyy-MM-dd HH:mm:ss",
            value:startime
        });
        $("#end-time").dxDateBox({
            type:"datetime",
            displayFormat: "yyyy-MM-dd HH:mm:ss",
            value:now
        });

        $("#stati").dxButton({
            text:"统计",
            type:"nomar"
        });
        $("#export").dxButton({
            text:"导出",
            type:"nomar"
        });


        $("#1").dxChart({
            dataSource: populationData,
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                visible: true,
            },
            series: {
                type: "bar"
            },
            argumentAxis: {
                tickInterval: 10,
                label: {
                    format: {
                        type: "decimal"
                    }
                }
            },
        });


})



// });
