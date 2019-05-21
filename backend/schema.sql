create table host (
    id serial primary key, 
    roomId varchar(100)
);

create table users (
    id serial primary key,
    room_id varchar(100),
    name varchar(100),
    points integer,
    answer varchar(300)
);

create table drawing (
    id serial primary key,
    room_id varchar(100),
    user_id integer references users(id),
    drawing_data text
);