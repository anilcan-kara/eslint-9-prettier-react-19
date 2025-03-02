import { todos } from '../../database/todoItems';

export default async function data() {
    return { todo: todos };
}
