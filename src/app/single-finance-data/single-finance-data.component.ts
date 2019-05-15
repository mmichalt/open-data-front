import {Component, OnInit, ViewChild} from '@angular/core';
import {FinanceData} from './FinanceData';
import {SingleFinanceDataService} from './single-finance-data.service';
import {BudgetSpending, BudgetSpendingType} from './BudgetSpending';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as go from 'gojs/release/go';

@Component({
  selector: 'app-single-finance-data',
  templateUrl: './single-finance-data.component.html',
  styleUrls: ['./single-finance-data.component.css']
})
export class SingleFinanceDataComponent implements OnInit {

  dataSource: MatTableDataSource<BudgetSpending>;
  pageSizeOptions: number[];
  displayedColumns: string[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sfds: SingleFinanceDataService) { }

  ngOnInit() {
    this.pageSizeOptions = [5, 10, 20, 50, 100, 200, 500];
    this.displayedColumns = ['No.', 'Type', 'Money', 'Description', 'Date'];
    this.dataSource = new MatTableDataSource(this.sfds.blobData.budgetSpendings);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, 'goDiagram', {
        nodeTemplate:
          $(go.Node, 'Vertical',
            $(go.Panel,
              new go.Binding('itemArray', 'slices'),
              {
                itemTemplate:
                  $(go.Panel,
                    $(go.Shape,
                      {fill: 'lightgreen', isGeometryPositioned: true},
                      new go.Binding('fill', 'color'),
                      new go.Binding('geometry', '', makeGeo)),
                    {
                      toolTip:
                        $('ToolTip',
                          $(go.TextBlock, {margin: 4},
                            new go.Binding('text', '', (data) => {
                              return data.color + ': ' + data.start +
                                ' to ' + (data.start + data.sweep);
                            }))
                        )
                    }
                  )
              }),
            $(go.TextBlock,
              new go.Binding('text'))
          ),
        model: $(go.Model,
          {
            nodeDataArray:
              [  // node data
                {
                  key: 1,
                  slices: this.makeSlices()
                }
              ]
          })
      }
    );

    function makeGeo(data) {
      // this is much more efficient than calling go.GraphObject.make:
      return new go.Geometry()
        .add(new go.PathFigure(50, 50)  // start point
          .add(new go.PathSegment(go.PathSegment.Arc,
            data.start, data.sweep,  // angles
            50, 50,  // center
            50, 50)  // radius
            .close()));
    }



    console.log(this.sfds.blobData.overallSpendings - this.sfds.blobData.Overall);
  }

  getSpendingType(type: number): string {
    return BudgetSpendingType[type];
  }

  indexOfElement(element: BudgetSpending): number {
    return this.sfds.blobData.budgetSpendings.indexOf(element) + 1;
  }

  makeSlices(): any[] {
    const slices = [];
    this.sfds.blobData.budgetSpendings.filter((spend, index) => {
      const obj = {
        start: 0,
        sweep: 0,
        color: go.Brush.randomColor(0, 255)
      };
      if (index) {
        obj.start = slices[index - 1].sweep + slices[index - 1].start;
        obj.sweep = Math.floor(360 / this.sfds.blobData.Overall * spend.amountOfMoney);
      } else {
        obj.sweep = Math.floor(360 / this.sfds.blobData.Overall * spend.amountOfMoney);
      }
      slices.push(obj);
    });
    slices.push({
      start: slices[slices.length - 1].start + slices[slices.length - 1].sweep,
      sweep: 360 - slices[slices.length - 1].start - slices[slices.length - 1].sweep,
      color: go.Brush.randomColor(0, 255)
    });
    console.log(slices);
    return slices;
  }
}
