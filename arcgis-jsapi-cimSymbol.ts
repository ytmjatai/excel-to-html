import { Component, OnInit } from '@angular/core';
import * as esri from 'esri-service';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-dictionary-renderer',
  templateUrl: './dictionary-renderer.component.html',
  styleUrls: ['./dictionary-renderer.component.scss']
})
export class DictionaryRendererComponent implements OnInit {
  view: __esri.SceneView;

  constructor() { }

  async ngOnInit() {
    this.view = await esri.getSceneView();

    const graphic = await esri.createGraphic();
    graphic.symbol = await this.createSymbol();
    graphic.geometry = await this.createGeometry();
    this.view.graphics.add(graphic);

  }

  async createGeometry() {

    const [Point] = await loadModules([
      'esri/geometry/Point'
    ]);

    const point = new Point({
      type: 'point',
      longitude: 113.23,
      latitude: 23
    });
    return point;
  }


  async createSymbol() {

    const [CIMSymbol] = await loadModules([
      'esri/symbols/CIMSymbol'
    ]);

    const symbol = new CIMSymbol({
      data: {
        type: "CIMSymbolReference",
        symbol: {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 256,
              colorLocked: true,
              anchorPointUnits: "Relative",
              frame: { xmin: -64, ymin: -64, xmax: 64, ymax: 64 },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",
                  geometry: { x: 4, y: 33 },
                  symbol: {
                    type: "CIMTextSymbol",
                    fontFamilyName: "Arial",
                    fontStyleName: "Regular",
                    height: 7,
                    horizontalAlignment: "Left",
                    verticalAlignment: "Bottom",
                    offsetX: 0,
                    offsetY: 0,
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        {
                          type: "CIMSolidFill",
                          enable: true,
                          color: [255, 255, 255, 255]
                        }
                      ]
                    },
                  },
                  textString:"jatai."
                }
              ],
              scaleSymbolsProportionally: true,
              respectFrame: true
            },
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 256,
              colorLocked: true,
              anchorPointUnits: "Relative",
              frame: { xmin: -64, ymin: -64, xmax: 64, ymax: 64 },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",
                  geometry: { x: 0, y: 0 },
                  symbol: {
                    type: "CIMTextSymbol",
                    fontFamilyName: "Arial",
                    fontStyleName: "Regular",
                    height: 6,
                    horizontalAlignment: "Center",
                    offsetX: 18,
                    offsetY: 24,
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        {
                          type: "CIMSolidFill",
                          enable: true,
                          color: [255, 255, 255, 255]
                        }
                      ]
                    },
                    verticalAlignment: "Center"
                  },
                  textString:"percent: 85%"
                }
              ],
              scaleSymbolsProportionally: true,
              respectFrame: true
            },
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 256,
              colorLocked: true,
              anchorPointUnits: "Relative",
              frame: { xmin: -64, ymin: -64, xmax: 64, ymax: 64 },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",
                  geometry: { x: 0, y: 0 },
                  symbol: {
                    type: "CIMTextSymbol",
                    fontFamilyName: "Arial",
                    fontStyleName: "Regular",
                    height: 6,
                    horizontalAlignment: "Center",
                    offsetX: 18,
                    offsetY: 8,
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        {
                          type: "CIMSolidFill",
                          enable: true,
                          color: [255, 255, 255, 255]
                        }
                      ]
                    },
                    verticalAlignment: "Center"
                  },
                  textString:"total: 100"
                }
              ],
              scaleSymbolsProportionally: true,
              respectFrame: true
            },
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 256,
              frame: {
                xmin: -64,
                ymin: -64,
                xmax: 64,
                ymax: 64
              },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",

                  geometry: {
                    rings: [[
                      [0, 32],
                      [42, 32],
                      [32, 42],
                      [0, 42],
                      [0, 32]
                    ]]
                  },
                  symbol: {
                    type: "CIMPolygonSymbol",
                    symbolLayers: [
                      {
                        type: "CIMSolidStroke",
                        width: 1,
                        color: [255, 175, 26, 255]
                      },
                      {
                        type: "CIMSolidFill",
                        enable: true,
                        color: [255, 175, 26, 255]
                      }
                    ]
                  }
                }]

            },
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 256,
              frame: {
                xmin: -64,
                ymin: -64,
                xmax: 64,
                ymax: 64
              },
              markerGraphics: [
                {
                  type: "CIMMarkerGraphic",

                  geometry: {
                    rings: [[
                      [0, 0],
                      [64, 0],
                      [64, 32],
                      [0, 32],
                      [0, 0]
                    ]]
                  },
                  symbol: {
                    type: "CIMPolygonSymbol",
                    symbolLayers: [
                      {
                        type: "CIMSolidStroke",
                        width: 0.1,
                        color: [0, 0, 0, 255]
                      },
                      {
                        type: "CIMSolidFill",
                        enable: true,
                        color: [0, 0, 0, 200]
                      },

                    ]
                  }
                }]

            },
          ],
          
        }
      }
    });

    return symbol;
  }



}
