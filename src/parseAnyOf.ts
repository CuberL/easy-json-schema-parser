import * as _ from 'lodash';
import { parse, AnyOfNode } from "./parse";

export function parseAnyOf(element: Array<any>): AnyOfNode {
    return new AnyOfNode({
        cases: element.map(parse)
    })
}
