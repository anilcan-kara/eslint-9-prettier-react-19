const todosDefault = [{ text: 'Buy milk' }, { text: 'Buy strawberries' }];

const database =
    // We create an in-memory database.
    // - We use globalThis so that the database isn't reset upon HMR.
    // - The database is reset when restarting the server, use a proper database (SQLite/PostgreSQL/...) if you want persistent data.
    // biome-ignore lint:
    (globalThis.__database ??= { todos: todosDefault });

export const { todos } = database;
