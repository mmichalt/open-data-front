import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
export class SingleFinanceDataComponent implements OnInit, AfterViewInit {

  pageSizeOptions = [5, 10, 20, 50, 100, 200, 500];
  displayedColumns = ['index', 'spendingTypeText', 'amountOfMoney', 'description', 'date'];
  dataSource = new MatTableDataSource(this.sfds.blobData.budgetSpendings);

  constructor(private sfds: SingleFinanceDataService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.createPieChart('goDiagram');
    this.createPieChart('go2Diagram');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  createPieChart(id) {
    const $ = go.GraphObject.make;
    $(go.Diagram, id, {
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
                              return data.type + ': ' + (data.sweep / 3.6).toFixed(2) + '%';
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
                  slices: this.sfds.makeSlices()
                }
              ]
          })
      }
    );

    function makeGeo(data) {
      // this is much more efficient than calling go.GraphObject.make:
      return new go.Geometry()
        .add(new go.PathFigure(200, 200)  // start point
          .add(new go.PathSegment(go.PathSegment.Arc,
            data.start, data.sweep,  // angles
            200, 200,  // center
            200, 200)  // radius
            .close()));
    }
  }
}
