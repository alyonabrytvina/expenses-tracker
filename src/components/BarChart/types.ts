import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { ChartData, PluginOptionsByType } from 'chart.js';

export interface BarProps {
  plugins: _DeepPartialObject<PluginOptionsByType<'bar'>> | undefined;
  data: ChartData<'bar'>;
}
