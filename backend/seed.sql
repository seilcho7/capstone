insert into host
    (roomId)
values
    ('5545')
;

insert into users
    (room_id, name, points, answer)
values
    ('5545','Rebecca', 2, ''),
    ('5545','Antonio', 5, ''),
    ('5545','Seil', 9, ''),
    ('5545','Ashish', 0, '')
;

insert into drawing 
    (room_id, user_id, drawing_data)
values
    ('5545', '1', '')
;

