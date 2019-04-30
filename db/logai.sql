INSERT INTO users (company, pw, email, phone, npc, comptype) VALUES
  (
    'dillon',
    'admin',
    'dillonbartkus@gmail.com',
    '9175455097',
    'Dillon',
    'shipper'
  );

  INSERT INTO inventory (warehouse_id, sku, name, picture, amount) VALUES
    (
      '2',
      '123456',
      'Canned Beans',
      'https://d3cizcpymoenau.cloudfront.net/images/26078/SIL_BlackBeans_Bushs.jpg',
      '50'
    ),
    (
      '2',
      '999999',
      'Twinkies',
      'http://a.abcnews.com/images/Business/HT_Twinkie_Box_jef_130709_16x9_992.jpg',
      '100'
    ),
        (
      '2',
      '152521',
      'Spam',
      'http://4.bp.blogspot.com/-AqCxfV4L3Lg/TbCbVuCf6HI/AAAAAAAAEpA/DCBBIrhKSVk/s1600/_MG_1849.jpg',
      '500'
    ),
        (
      '2',
      '75436',
      'Tomato Sauce',
      'http://ecx.images-amazon.com/images/I/51M2JUAB9pL._SY445_.jpg',
      '200'
    ),
        (
      '2',
      '223333',
      'Ramen Noodles',
      'http://ecx.images-amazon.com/images/I/91aXy3R2SYL._SL1500_.jpg',
      '999'
    );

  INSERT INTO orders (origin_id, content1, date_ordered, orderer, fulfilled) VALUES
    (
      '2',
      '5',
      '04/25/2019',
      'Ramen Noodle Store',
      'No'
    );