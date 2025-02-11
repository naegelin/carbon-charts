import React from 'react';
import { LineChart as LC } from '@carbon/charts';
import { ChartConfig, LineChartOptions } from '@carbon/charts/interfaces';
import BaseChart from './base-chart';
import { hasChartBeenInitialized } from './utils';

type LineChartProps = ChartConfig<LineChartOptions>;

export default class LineChart extends BaseChart<LineChartOptions> {
	chartRef!: HTMLDivElement;
	props!: LineChartProps;
	chart!: LC;

	componentDidMount() {
		if (hasChartBeenInitialized(this.chartRef) === false) {
			this.chart = new LC(this.chartRef!, {
				data: this.props.data as any,
				options: this.props.options!,
			});
		}
	}

	render() {
		return (
			<div
				ref={(chartRef) => (this.chartRef = chartRef!)}
				className="chart-holder"></div>
		);
	}
}
