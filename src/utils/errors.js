import { camelize } from './string';
import { mapKeys as _mapKeys } from 'lodash';

export function toClientErrors(errors) {
  return _mapKeys(errors, (_, key) => camelize(key));
}
