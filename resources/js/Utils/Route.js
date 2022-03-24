import route from 'ziggy';
import { Ziggy } from '../ziggy';

export function routes(name, param = undefined) {
  return route(name, param, undefined, Ziggy);
}
