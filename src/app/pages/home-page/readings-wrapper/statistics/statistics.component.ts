import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  data: any;

    chartOptions: any;

    ngOnInit() {
        this.data = {
            datasets: [
                {
                    data: [300, 50],
                    backgroundColor: [
                        "#FF6384",
                        "#0000001a",
                    ]
                }
            ],
            options: {
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false,
              },
            },
            plugins: [
              {
                id: 'text',
                beforeDraw: function (chart:any) {
                  var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
      
                  ctx.restore();
                  var fontSize = (height / 114).toFixed(2);
                  ctx.font = fontSize + 'em sans-serif';
                  ctx.textBaseline = 'middle';
      
                  var text = '75%',
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
      
                  ctx.fillText(text, textX, textY);
                  ctx.save();
                },
              },
            ],
        };
    }
}
