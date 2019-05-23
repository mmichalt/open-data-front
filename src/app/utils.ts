import * as go from 'gojs';

export enum Colors {
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
}

export class GOJS {
  public static createPieChart(id, slicess) {
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
                  slices: slicess
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
