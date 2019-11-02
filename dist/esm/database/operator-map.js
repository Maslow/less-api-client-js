import { QUERY_COMMANDS_LITERAL } from './commands/query';
import { LOGIC_COMMANDS_LITERAL } from './commands/logic';
import { UPDATE_COMMANDS_LITERAL } from './commands/update';
import * as camelcase from 'camelcase';
export const OperatorMap = {};
for (const key in QUERY_COMMANDS_LITERAL) {
    OperatorMap[key] = '$' + camelcase(key);
}
for (const key in LOGIC_COMMANDS_LITERAL) {
    OperatorMap[key] = '$' + camelcase(key);
}
for (const key in UPDATE_COMMANDS_LITERAL) {
    OperatorMap[key] = '$' + camelcase(key);
}
OperatorMap[QUERY_COMMANDS_LITERAL.NEQ] = '$ne';
OperatorMap[UPDATE_COMMANDS_LITERAL.REMOVE] = '$unset';
OperatorMap[UPDATE_COMMANDS_LITERAL.SHIFT] = '$pop';
OperatorMap[UPDATE_COMMANDS_LITERAL.UNSHIFT] = '$push';
export function operatorToString(operator) {
    return OperatorMap[operator] || ('$' + camelcase(operator));
}
