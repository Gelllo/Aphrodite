import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { GlucoseService } from 'src/app/services/Glucose/glucose.service';
import { GlucoseRecordsForBarChart } from './glucose-records-for-bar-chart';
import { GlucoseRecordsForLineChart } from './glucose-records-for-line-chart';

@Component({
  selector: 'app-glucose-analysis',
  templateUrl: './glucose-analysis.component.html',
  styleUrls: ['./glucose-analysis.component.css']
})
export class GlucoseAnalysisComponent implements OnInit{

  private barChartServerData:GlucoseRecordsForBarChart[];
  private linerChartServerData:GlucoseRecordsForLineChart[]
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData:ChartConfiguration<'bar'>['data']
  public lineChartData: ChartConfiguration<'line'>['data']

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  initiateCharts(){
    this.barChartData = {
      labels: this.barChartServerData.map(x=>x.date),
      datasets: [
        { data: this.barChartServerData.map(x=>x.avgGlucoseLevels), label: 'Average glucose level' },
      ]
    };
    this.lineChartData = {
      labels: this.barChartServerData.map(x=>x.date),
      datasets: [
        {
          data: this.barChartServerData.map(x=>x.avgGlucoseLevels),
          label: 'Glucose level evolution',
          fill: false,
          tension: 0,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(private _glucoseService:GlucoseService){}

  ngOnInit(): void {
    this.populateCharts();
  }

  populateCharts(){
    this._glucoseService.GetGlucoseRecordsForCharts().subscribe(
      (x:any)=>{
        console.log(x);
        this.barChartServerData = x.chartsData;
        console.log(this.barChartData);
        this.initiateCharts();
      },
      (error:any)=>{

      }
    )
  }
}
