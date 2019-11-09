create table houses (
    id serial primary key,
    name varchar,
    address varchar,
    city varchar,
    state varchar,
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

select * from houses;

insert into houses (name, address, city, state, zip, img, mortgage, rent)
values 
('house1', '123 cool st', 'Chicago', 'IL', 45643, 'https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2017/04/BIno18.jpg', 2123321, 1000),
('house2', '456 rad ave', 'Seattle', 'WA', 78643, 'https://i.pinimg.com/originals/dc/6c/0c/dc6c0cfb0ea9bc70500f98ae516d04cc.png', 78462023, 34542);