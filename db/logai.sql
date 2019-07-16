INSERT INTO users (company, pw, email, phone, npc, company_type) VALUES
  (
    'dillon',
    'admin',
    'dillonbartkus@gmail.com',
    '9175455097',
    'Dillon',
    'shipper'
  ),
  (
    'Steve''s Warehouse',
    '$2b$11$XqkXv8pXkJsp4tbJyzq6deBKzyLP4dYv2Rg054KRpJj4dJbC/PJ9O',
    'steve',
    '5555555555',
    'Steve',
    'warehouse'
  );

  INSERT INTO inventory (warehouse_id, sku, name, location, type, weight, last_checked, received_on, FIFO, picture, on_hand, reserved) VALUES
    (
      '2',
      '123456',
      'Canned Beans',
      'Row 5 Shelf 7',
      'Food',
      '10',
      '4/30/2019',
      '4/25/2019',
      'True',
      'https://d3cizcpymoenau.cloudfront.net/images/26078/SIL_BlackBeans_Bushs.jpg',
      '50',
      '20'
    ),
    (
      '2',
      '999999',
      'Twinkies',
      'Row 22 Shelf 3',
      'Food',
      '3',
      '4/30/2019',
      '4/25/2019',
      'True',
      'http://a.abcnews.com/images/Business/HT_Twinkie_Box_jef_130709_16x9_992.jpg',
      '100',
      '30'
    ),
        (
      '2',
      '152521',
      'Spam',
      'Row 19 Shelf 8',
      'Food',
      '5',
      '4/30/2019',
      '4/25/2019',
      'True',
      'http://4.bp.blogspot.com/-AqCxfV4L3Lg/TbCbVuCf6HI/AAAAAAAAEpA/DCBBIrhKSVk/s1600/_MG_1849.jpg',
      '500',
      '100'
    ),
        (
      '2',
      '75436',
      'Tomato Sauce',
      'Row 2 Shelf 7',
      'Food',
      '10',
      '4/30/2019',
      '4/25/2019',
      'True',
      'http://ecx.images-amazon.com/images/I/51M2JUAB9pL._SY445_.jpg',
      '200',
      '0'
    ),
        (
      '2',
      '223333',
      'Ramen Noodles',
      'Row 13 Shelf 5',
      'Food',
      '7',
      '4/30/2019',
      '4/25/2019',
      'True',
      'http://ecx.images-amazon.com/images/I/91aXy3R2SYL._SL1500_.jpg',
      '999',
      '333'
    );

  INSERT INTO carts (owner_id) VALUES
  (
    '1'
  ),
  (
    '2'
  );

  INSERT INTO orders (warehouse_id, ordered_by, status, total_weight, employee, date_received, date_processed, delivery_address, delivery_date, delivery_times) VALUES
    (
      '2',
      '1',
      'incoming',
      '300',
      'Steve',
      '06/20/2019',
      '06/21/2019',
      '123 Fake Street, Faketown NY 12345',
      '06/25/2019',
      '{5:00 PM, 6:00 PM}'
    ),
    (
      '2',
      '1',
      'active',
      '250',
      'James',
      '06/21/2019',
      '06/22/2019',
      '123 Fake Street, Faketown NY 12345',
      '06/25/2019',
      '{4:00 PM, 5:00 PM, 6:00 PM}'
    ),
    (
      '2',
      '1',
      'completed',
      '450',
      'Robert',
      '06/25/2019',
      '06/25/2019',
      '123 Fake Street, Faketown NY 12345',
      '06/25/2019',
      '{5:00 PM, 6:00 PM}'
    );

    INSERT INTO order_items (item_id, item_amount, order_id) VALUES
    (
      '2',
      '25',
      '1'
    ),
    (
      '2',
      '30',
      '2'
    ),
    (
      '3',
      '50',
      '2'
    ),
    (
      '4',
      '30',
      '1'
    ),
    (
      '5',
      '50',
      '3'
    );