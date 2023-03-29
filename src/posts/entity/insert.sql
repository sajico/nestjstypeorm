INSERT INTO parent_category (id, label, description)
VALUES (
        1000,
        'parentCategory01_label',
        'parentCategory01_description'
    ),
    (
        2000,
        'parentCategory02_label',
        'parentCategory02_description'
    ),
    (
        3000,
        'parentCategory03_label',
        'parentCategory03_description'
    ),
    (
        4000,
        'parentCategory04_label',
        'parentCategory04_description'
    ),
    (
        5000,
        'parentCategory05_label',
        'parentCategory05_description'
    );
INSERT INTO category (id, label, description, parentCategoryId)
VALUES (
        100,
        'category01_label',
        'category01_description',
        1000
    ),
    (
        200,
        'category02_label',
        'category02_description',
        2000
    ),
    (
        300,
        'category03_label',
        'category03_description',
        3000
    ),
    (
        400,
        'category04_label',
        'category04_description',
        4000
    ),
    (
        500,
        'category05_label',
        'category05_description',
        5000
    );
INSERT INTO post (id, title, body, categoryId)
VALUES (1, 'post01_title', 'post01_body', 100),
    (2, 'post02_title', 'post02_body', 200),
    (3, 'post03_title', 'post03_body', 300),
    (4, 'post04_title', 'post04_body', 400),
    (5, 'post05_title', 'post05_body', 500);