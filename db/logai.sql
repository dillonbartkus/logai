-- INSERT INTO users (company, pw, email, phone, npc, company_type) VALUES
--   (
--     'dillon',
--     'admin',
--     'dillonbartkus@gmail.com',
--     '9175455097',
--     'Dillon',
--     'shipper'
--   ),
--   (
--     'Steve''s Warehouse',
--     '$2b$11$XqkXv8pXkJsp4tbJyzq6deBKzyLP4dYv2Rg054KRpJj4dJbC/PJ9O',
--     'steve',
--     '5555555555',
--     'Steve',
--     'warehouse'
--   );

  INSERT INTO inventory (warehouse_id, sku, name, location, type, weight, price, last_checked, received_on, FIFO, picture, on_hand, reserved) VALUES
    (
      '2',
      '123456',
      'Canned Beans',
      'Row 5 Shelf 7',
      'Food',
      '10',
      '5',
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
      '5',
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
      '3',
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
      '2',
      '4/30/2019',
      '4/25/2019',
      'True',
      'http://ecx.images-amazon.com/images/I/91aXy3R2SYL._SL1500_.jpg',
      '999',
      '333'
    ),
    (
      '2',
      '420420',
      'Maker''s Mark Whiskey',
      'Row 2 Shelf 6',
      'Spirits',
      '3',
      '20',
      '5/03/2019',
      '6/03/2019',
      'FALSE',
      'http://www.boozebusiness.com/wp-content/uploads/2015/03/makersmark.jpg',
      '23',
      '2'
    );
    
  INSERT INTO carts (owner_id) VALUES
  (
    '1'
  ),
  (
    '2'
  );

  INSERT INTO orders (warehouse_id, ordered_by, status, total_weight, employee, date_placed, trucking_company, truck_driver, delivery_address, customer_confirmed_transport, preferred_dates, actual_date, preferred_times, actual_time) VALUES
    (
      '2',
      '1',
      'incoming',
      '300',
      'Steve',
      '06/20/2019',
      '',
      '',
      '{"name":"Dillon Bartkus","streetnamenumber":"631 van buren st","city":"Brooklyn","state":"NY","zip":"11221"}',
      'FALSE',
      '{"first":"7/5/2019","second":"7/12/2019","third":"7/26/2019"}',
      '',
      '{"first":["8:00AM","9:00AM"],"second":["9:00AM","10:00AM"],"third":["10:00AM","11:00AM"]}',
      ''
    ),
    (
      '2',
      '1',
      'active',
      '250',
      'James',
      '06/21/2019',
      'Sam''s Trucking',
      'Sam',
      '{"name":"Joe Smith","streetnamenumber":"99 Fake st","city":"Boston","state":"MA","zip":"02575"}',
      'FALSE',
      '{"first":"7/5/2019","second":"7/12/2019","third":"7/26/2019"}',
      '06/26/2019',
      '{"first":["8:00AM","9:00AM"],"second":["9:00AM","10:00AM"],"third":["10:00AM","11:00AM"]}',
      '5:00 PM'
    ),
    (
      '2',
      '1',
      'completed',
      '450',
      'Robert',
      '06/25/2019',
      'Best Trucking',
      'Jim',
      '{"name":"Steve Steven","streetnamenumber":"123 Pin oak circle","city":"Vineyard Haven","state":"MA","zip":"02434"}',
      'TRUE',
      '{"first":"7/5/2019","second":"7/12/2019","third":"7/26/2019"}',
      '06/25/2019',
      '{"first":["8:00AM","9:00AM"],"second":["9:00AM","10:00AM"],"third":["10:00AM","11:00AM"]}',
      '6:00 PM'
    );

    INSERT INTO order_items (item_id, amount_ordered, order_id) VALUES
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