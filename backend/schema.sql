create table users (
    id serial primary key,
    points integer,
    name varchar(100)
);

create table drawing (
    id serial primary key,
    user_id integer references users(id),
    drawing_data text
);
