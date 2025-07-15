import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import frame from "../assest/post/frame.png";
import image1 from "../assest/post/1 bjp hindi/1.jpg";
import image2 from "../assest/post/1 bjp hindi/2.jpg";
import image3 from "../assest/post/1 bjp hindi/3.jpg";
import image4 from "../assest/post/1 bjp hindi/4.jpg";
import image5 from "../assest/post/1 bjp hindi/5.jpg";
import image6 from "../assest/post/1 bjp hindi/6.jpg";
import image7 from "../assest/post/1 bjp hindi/7.jpg";
import image8 from "../assest/post/1 bjp hindi/8.jpg";
import image9 from "../assest/post/1 bjp hindi/9.jpg";
import image10 from "../assest/post/1 bjp hindi/10.jpg";
import image11 from "../assest/post/1 bjp hindi/11.jpg";
import image12 from "../assest/post/1 bjp hindi/12.jpg";
import image13 from "../assest/post/1 bjp hindi/13.jpg";
import image14 from "../assest/post/1 bjp hindi/14.jpg";
import image15 from "../assest/post/1 bjp hindi/15.jpg";
import image16 from "../assest/post/1 bjp hindi/16.jpg";
import image17 from "../assest/post/1 bjp hindi/17.jpg";
import image18 from "../assest/post/1 bjp hindi/18.jpg";
import image19 from "../assest/post/1 bjp hindi/19.jpg";
import image20 from "../assest/post/1 bjp hindi/20.jpg";
import image21 from "../assest/post/1 bjp hindi/21.jpg";
import image22 from "../assest/post/1 bjp hindi/22.jpg";
import image23 from "../assest/post/1 bjp hindi/23.jpg";
import image24 from "../assest/post/1 bjp hindi/24.jpg";
import image25 from "../assest/post/1 bjp hindi/25.jpg";
import image26 from "../assest/post/1 bjp hindi/26.jpg";
import image27 from "../assest/post/1 bjp hindi/27.jpg";
import image28 from "../assest/post/1 bjp hindi/28.jpg";
import image29 from "../assest/post/1 bjp hindi/29.jpg";
import image30 from "../assest/post/1 bjp hindi/30.jpg";
import image31 from "../assest/post/1 bjp hindi/31.jpg";
import image32 from "../assest/post/1 bjp hindi/32.jpg";
import image33 from "../assest/post/1 bjp hindi/33.jpg";
import image34 from "../assest/post/1 bjp hindi/34.jpg";
import image35 from "../assest/post/1 bjp hindi/35.jpg";
import image36 from "../assest/post/1 bjp hindi/36.jpg";
import image37 from "../assest/post/1 bjp hindi/37.jpg";
import image38 from "../assest/post/1 bjp hindi/38.jpg";
import image39 from "../assest/post/1 bjp hindi/39.jpg";
import image40 from "../assest/post/1 bjp hindi/40.jpg";
import image41 from "../assest/post/1 bjp hindi/41.jpg";
import image42 from "../assest/post/1 bjp hindi/42.jpg";
import image43 from "../assest/post/1 bjp hindi/43.jpg";
import image44 from "../assest/post/1 bjp hindi/44.jpg";
import image45 from "../assest/post/1 bjp hindi/45.jpg";
import image46 from "../assest/post/1 bjp hindi/46.jpg";
import image47 from "../assest/post/1 bjp hindi/47.jpg";
import image48 from "../assest/post/1 bjp hindi/48.jpg";
import image49 from "../assest/post/1 bjp hindi/49.jpg";
import image50 from "../assest/post/1 bjp hindi/50.jpg";
import image51 from "../assest/post/1 bjp hindi/51.jpg";
import image52 from "../assest/post/1 bjp hindi/52.jpg";
import image53 from "../assest/post/1 bjp hindi/53.jpg";
import image54 from "../assest/post/2 bjp english/54.jpg";
import image55 from "../assest/post/3 holi hindi/55.jpg";
import image56 from "../assest/post/3 holi hindi/56.jpg";
import image57 from "../assest/post/3 holi hindi/57.jpg";
import image58 from "../assest/post/3 holi hindi/58.jpg";
import image59 from "../assest/post/3 holi hindi/59.jpg";
import image60 from "../assest/post/3 holi hindi/60.jpg";
import image61 from "../assest/post/3 holi hindi/61.jpg";
import image62 from "../assest/post/3 holi hindi/62.jpg";
import image63 from "../assest/post/3 holi hindi/63.jpg";
import image64 from "../assest/post/3 holi hindi/64.jpg";
import image65 from "../assest/post/3 holi hindi/65.jpg";
import image66 from "../assest/post/3 holi hindi/66.jpg";
import image67 from "../assest/post/3 holi hindi/67.jpg";
import image68 from "../assest/post/3 holi hindi/68.jpg";
import image69 from "../assest/post/3 holi hindi/69.jpg";
import image70 from "../assest/post/3 holi hindi/70.jpg";
import image71 from "../assest/post/3 holi hindi/71.jpg";
import image72 from "../assest/post/3 holi hindi/72.jpg";
import image73 from "../assest/post/3 holi hindi/73.jpg";
import image74 from "../assest/post/3 holi hindi/74.jpg";
import image75 from "../assest/post/3 holi hindi/75.jpg";
import image76 from "../assest/post/3 holi hindi/76.jpg";
import image77 from "../assest/post/3 holi hindi/77.jpg";
import image78 from "../assest/post/3 holi hindi/78.jpg";
import image79 from "../assest/post/3 holi hindi/79.jpg";
import image80 from "../assest/post/3 holi hindi/80.jpg";
import image81 from "../assest/post/3 holi hindi/81.jpg";
import image82 from "../assest/post/3 holi hindi/82.jpg";
import image83 from "../assest/post/4 holi english/83.jpg";
import image84 from "../assest/post/4 holi english/84.jpg";
import image85 from "../assest/post/4 holi english/85.jpg";
import image86 from "../assest/post/4 holi english/86.jpg";
import image87 from "../assest/post/4 holi english/87.jpg";
import image88 from "../assest/post/4 holi english/88.jpg";
import image89 from "../assest/post/4 holi english/89.jpg";
// 5 Republic Day Hindi
import image90 from "../assest/post/5 Republic Day Hindi/90.jpg";
import image91 from "../assest/post/5 Republic Day Hindi/91.jpg";
import image92 from "../assest/post/5 Republic Day Hindi/92.jpg";
import image93 from "../assest/post/5 Republic Day Hindi/93.jpg";
import image94 from "../assest/post/5 Republic Day Hindi/94.jpg";
import image95 from "../assest/post/5 Republic Day Hindi/95.jpg";
import image96 from "../assest/post/5 Republic Day Hindi/96.jpg";
// 6
import image97 from "../assest/post/6 Republic Day English/97.jpg";
import image98 from "../assest/post/6 Republic Day English/98.jpg";
import image99 from "../assest/post/6 Republic Day English/99.jpg";
// 7
import image100 from "../assest/post/7 Diwali hindi/100.jpg";
import image101 from "../assest/post/7 Diwali hindi/101.jpg";
import image102 from "../assest/post/7 Diwali hindi/102.jpg";
import image103 from "../assest/post/7 Diwali hindi/103.jpg";
import image104 from "../assest/post/7 Diwali hindi/104.jpg";
import image105 from "../assest/post/7 Diwali hindi/105.jpg";
import image106 from "../assest/post/7 Diwali hindi/106.jpg";
import image107 from "../assest/post/7 Diwali hindi/107.jpg";
import image108 from "../assest/post/7 Diwali hindi/108.jpg";
// 8
import image109 from "../assest/post/8 DIWALI (English)/109.jpg";
import image110 from "../assest/post/8 DIWALI (English)/110.jpg";
// 9
import image111 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/111.jpg";
import image112 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/112.jpg";
import image113 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/113.jpg";
import image114 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/114.jpg";
import image115 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/115.jpg";
import image116 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/116.jpg";
import image117 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/117.jpg";
import image118 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/118.jpg";
import image119 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/119.jpg";
import image120 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/120.jpg";
import image121 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/121.jpg";
import image122 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/122.jpg";
import image123 from "../assest/post/9 RAKSHA BANDHAN (Hindi)/123.jpg";
// 10
import image124 from "../assest/post/10 RAKSHA BANDHAN (English)/124.jpg";
import image125 from "../assest/post/10 RAKSHA BANDHAN (English)/125.jpg";
import image126 from "../assest/post/10 RAKSHA BANDHAN (English)/126.jpg";
import image127 from "../assest/post/10 RAKSHA BANDHAN (English)/127.jpg";
import image128 from "../assest/post/10 RAKSHA BANDHAN (English)/128.jpg";
import image129 from "../assest/post/10 RAKSHA BANDHAN (English)/129.jpg";
// 11
import image130 from "../assest/post/11. CHHATH PUJA (Hindi)/130.jpg";
import image131 from "../assest/post/11. CHHATH PUJA (Hindi)/131.jpg";
import image132 from "../assest/post/11. CHHATH PUJA (Hindi)/132.jpg";
import image133 from "../assest/post/11. CHHATH PUJA (Hindi)/133.jpg";
import image134 from "../assest/post/11. CHHATH PUJA (Hindi)/134.jpg";
import image135 from "../assest/post/11. CHHATH PUJA (Hindi)/135.jpg";
import image136 from "../assest/post/11. CHHATH PUJA (Hindi)/136.jpg";
// 12
import image137 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/137.jpg";
import image138 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/138.jpg";
import image139 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/139.jpg";
import image140 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/140.jpg";
import image141 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/141.jpg";
import image142 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/142.jpg";
import image143 from "../assest/post/12. CHAITRA NAVRATRI (Hindi)/143.jpg";
// 13
import image144 from "../assest/post/13. CHAITRA NAVRATRI (English)/144.jpg";
import image145 from "../assest/post/13. CHAITRA NAVRATRI (English)/145.jpg";
// 14
import image146 from "../assest/post/14. DUSSEHRA (Hindi)/146.jpg";
import image147 from "../assest/post/14. DUSSEHRA (Hindi)/147.jpg";
import image148 from "../assest/post/14. DUSSEHRA (Hindi)/148.jpg";
// 15
import image149 from "../assest/post/15. DUSSEHRA (English)/149.jpg";
import image150 from "../assest/post/15. DUSSEHRA (English)/150.jpg";
import image151 from "../assest/post/15. DUSSEHRA (English)/151.jpg";
import image152 from "../assest/post/15. DUSSEHRA (English)/152.jpg";
// 16
import image153 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/153.jpg";
import image154 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/154.jpg";
import image155 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/155.jpg";
import image156 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/156.jpg";
import image157 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/157.jpg";
import image158 from "../assest/post/16. INDEPENDANCE DAY (Hindi)/158.jpg";
// 17
import image159 from "../assest/post/17. INDEPENDANCE DAY (English)/159.jpg";
import image160 from "../assest/post/17. INDEPENDANCE DAY (English)/160.jpg";
// 18
import image18and1 from "../assest/post/18. AIDS Day (Hindi)/1.jpg";
// 19
import image19and1 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/1.jpg";
import image19and2 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/2.jpg";
import image19and3 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/3.jpg";
import image19and4 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/4.jpg";
import image19and5 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/5.jpg";
import image19and6 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/6.jpg";
import image19and7 from "../assest/post/19. AKSHAYA TRITIYA (Hindi)/7.jpg";
// 20
import image20and1 from "../assest/post/20. AKSHAYA TRITIYA (English)/1.jpg";
import image20and2 from "../assest/post/20. AKSHAYA TRITIYA (English)/2.jpg";
import image20and3 from "../assest/post/20. AKSHAYA TRITIYA (English)/3.jpg";
// 21
import image21and1 from "../assest/post/21. AMBEDKAR JAYANTI (English)/1.jpg";
import image21and2 from "../assest/post/21. AMBEDKAR JAYANTI (English)/2.jpg";
import image21and3 from "../assest/post/21. AMBEDKAR JAYANTI (English)/3.jpg";
import image21and4 from "../assest/post/21. AMBEDKAR JAYANTI (English)/4.jpg";
import image21and5 from "../assest/post/21. AMBEDKAR JAYANTI (English)/5.jpg";
// 22
import image22and1 from "../assest/post/22. ANANT CHATURDASHI (Hindi)/1.jpg";
// 23
import image23and1 from "../assest/post/23. BAISAKHI (Hindi)/1.jpg";
import image23and2 from "../assest/post/23. BAISAKHI (Hindi)/2.jpg";
import image23and3 from "../assest/post/23. BAISAKHI (Hindi)/3.jpg";
// 24
import image24and1 from "../assest/post/24. Basant Panchmi (Hindi)/1.jpg";
import image24and2 from "../assest/post/24. Basant Panchmi (Hindi)/2.jpg";
import image24and3 from "../assest/post/24. Basant Panchmi (Hindi)/3.jpg";
import image24and4 from "../assest/post/24. Basant Panchmi (Hindi)/4.jpg";
import image24and5 from "../assest/post/24. Basant Panchmi (Hindi)/5.jpg";
import image24and6 from "../assest/post/24. Basant Panchmi (Hindi)/6.jpg";
import image24and7 from "../assest/post/24. Basant Panchmi (Hindi)/7.jpg";
import image24and8 from "../assest/post/24. Basant Panchmi (Hindi)/8.jpg";
// 25
import image25and1 from "../assest/post/25. Basant Panchmi (English)/1.jpg";
// 26
import image26and1 from "../assest/post/26. Bhai Dooj (Hindi)/1.jpg";
import image26and2 from "../assest/post/26. Bhai Dooj (Hindi)/2.jpg";
import image26and3 from "../assest/post/26. Bhai Dooj (Hindi)/3.jpg";
import image26and4 from "../assest/post/26. Bhai Dooj (Hindi)/4.jpg";
import image26and5 from "../assest/post/26. Bhai Dooj (Hindi)/5.jpg";
import image26and6 from "../assest/post/26. Bhai Dooj (Hindi)/6.jpg";
// 27
import image27and1 from "../assest/post/27. Bhai Dooj (English)/1.jpg";
// 28
import image28and1 from "../assest/post/28. Buddha Purnima (hindi)/1.jpg";
// 29
import image29and1 from "../assest/post/29. Cancer Day (Hindi)/1.jpg";
// 30
import image30and1 from "../assest/post/30. Children's Day (Hindi)/1.jpg";
import image30and2 from "../assest/post/30. Children's Day (Hindi)/2.jpg";
import image30and3 from "../assest/post/30. Children's Day (Hindi)/3.jpg";
import image30and4 from "../assest/post/30. Children's Day (Hindi)/4.jpg";
// 31
import image31and1 from "../assest/post/31. Christmas Day (Hindi)/1.jpg";
import image31and2 from "../assest/post/31. Christmas Day (Hindi)/2.jpg";
import image31and3 from "../assest/post/31. Christmas Day (Hindi)/3.jpg";

const Fastible = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  // Array of imported images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    image65,
    image66,
    image67,
    image68,
    image69,
    image70,
    image71,
    image72,
    image73,
    image74,
    image75,
    image76,
    image77,
    image78,
    image79,
    image80,
    image81,
    image82,
    image83,
    image84,
    image85,
    image86,
    image87,
    image88,
    image89,
    // 5 Republic Day Hindi
    image90,
    image91,
    image92,
    image93,
    image94,
    image95,
    image96,
    // 6
    image97,
    image98,
    image99,
    // 7
    image100,
    image101,
    image102,
    image103,
    image104,
    image105,
    image106,
    image107,
    image108,
    //8
    image109,
    image110,
    //9
    image111,
    image112,
    image113,
    image114,
    image115,
    image116,
    image117,
    image118,
    image119,
    image120,
    image121,
    image122,
    image123,
    // 10
    image124,
    image125,
    image126,
    image127,
    image128,
    image129,
    // 11
    image130,
    image131,
    image132,
    image133,
    image134,
    image135,
    image136,
    // 12
    image137,
    image138,
    image139,
    image140,
    image141,
    image142,
    image143,
    // 13
    image144,
    image145,
    // 14
    image146,
    image147,
    image148,
    // 15
    image149,
    image150,
    image151,
    image152,
    // 16
    image153,
    image154,
    image155,
    image156,
    image157,
    image158,
    // 17
    image159,
    image160,
    // 18
    image18and1,
    // 19
    image19and1,
    image19and2,
    image19and3,
    image19and4,
    image19and5,
    image19and6,
    image19and7,
    // 20
    image20and1,
    image20and2,
    image20and3,
    // 21
    image21and1,
    image21and2,
    image21and3,
    image21and4,
    image21and5,
    // 22
    image22and1,
    // 23
    image23and1,
    image23and2,
    image23and3,
    // 24
    image24and1,
    image24and2,
    image24and3,
    image24and4,
    image24and5,
    image24and6,
    image24and7,
    image24and8,
    // 25
    image25and1,
    // 26
    image26and1,
    image26and2,
    image26and3,
    image26and4,
    image26and5,
    image26and6,
    // 27
    image27and1,
    // 28
    image28and1,
    // 29
    image29and1,
    // 30
    image30and1,
    image30and2,
    image30and3,
    image30and4,
    // 31
    image31and1,
    image31and2,
    image31and3,
  ];

  const titles = [
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (English)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    // 5 Republic Day Hindi
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    "REPUBLIC DAY (Hindi)",
    // 6
    "REPUBLIC DAY (English)",
    "REPUBLIC DAY (English)",
    "REPUBLIC DAY (English)",
    // 7
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    "DIWALI (Hindi)",
    // 8
    "DIWALI (English)",
    "DIWALI (English)",
    //9
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    "RAKSHA BANDHAN (Hindi)",
    // 10
    "RAKSHA BANDHAN (English)",
    "RAKSHA BANDHAN (English)",
    "RAKSHA BANDHAN (English)",
    "RAKSHA BANDHAN (English)",
    "RAKSHA BANDHAN (English)",
    "RAKSHA BANDHAN (English)",
    // 11
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    "CHHATH PUJA (Hindi)",
    // 12
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    "CHAITRA NAVRATRI (Hindi)",
    // 13
    "CHAITRA NAVRATRI (English)",
    "CHAITRA NAVRATRI (English)",
    // 14
    "DUSSEHRA (Hindi)",
    "DUSSEHRA (Hindi)",
    "DUSSEHRA (Hindi)",
    // 15
    "DUSSEHRA (English)",
    "DUSSEHRA (English)",
    "DUSSEHRA (English)",
    "DUSSEHRA (English)",
    // 16
    "INDEPENDANCE DAY (Hindi)",
    "INDEPENDANCE DAY (Hindi)",
    "INDEPENDANCE DAY (Hindi)",
    "INDEPENDANCE DAY (Hindi)",
    "INDEPENDANCE DAY (Hindi)",
    "INDEPENDANCE DAY (Hindi)",
    // 17
    "INDEPENDANCE DAY (English)",
    "INDEPENDANCE DAY (English)",
    // 18
    "AIDS Day (Hindi)",
    // 19
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    "AKSHAYA TRITIYA (Hindi)",
    // 20
    "AKSHAYA TRITIYA (English)",
    "AKSHAYA TRITIYA (English)",
    "AKSHAYA TRITIYA (English)",
    // 21
    "AMBEDKAR JAYANTI (English)",
    "AMBEDKAR JAYANTI (English)",
    "AMBEDKAR JAYANTI (English)",
    "AMBEDKAR JAYANTI (English)",
    "AMBEDKAR JAYANTI (English)",
    // 22
    "ANANT CHATURDASHI (Hindi)",
    // 23
    "BAISAKHI (Hindi)",
    "BAISAKHI (Hindi)",
    "BAISAKHI (Hindi)",
    // 24
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    "Basant Panchmi (Hindi)",
    // 25
    "Basant Panchmi (English)",
    // 26
    "Bhai Dooj (Hindi)",
    "Bhai Dooj (Hindi)",
    "Bhai Dooj (Hindi)",
    "Bhai Dooj (Hindi)",
    "Bhai Dooj (Hindi)",
    "Bhai Dooj (Hindi)",
    // 27
    "Bhai Dooj (English)",
    // 28
    "Buddha Purnima (hindi)",
    // 29
    "Cancer Day (Hindi)",
    // 30
    "Children's Day (Hindi)",
    "Children's Day (Hindi)",
    "Children's Day (Hindi)",
    "Children's Day (Hindi)",
    // 31
    "Christmas Day (Hindi)",
    "Christmas Day (Hindi)",
    "Christmas Day (Hindi)",
  ];

  const posts = [
    "BJP (Hindi) - 1 to 53",
    "BJP (English) - 54 to 54",
    "HOLI (Hindi) - 55 to 82",
    "HOLI (English) - 83 to 89",
    "REPUBLIC DAY (Hindi) - 90 to 96",
    "REPUBLIC DAY (English) - 97 to 99",
    "DIWALI (Hindi) - 100 to 108",
    "DIWALI (English) - 109 to 110",
    "RAKSHA BANDHAN (Hindi) - 111 to 123",
    "RAKSHA BANDHAN (English) - 124 to 129",
    "CHHATH PUJA (Hindi) - 130 to 136",
    "CHAITRA NAVRATRI (Hindi) - 137 to 143",
    "CHAITRA NAVRATRI (English) - 144 to 145",
    "DUSSEHRA (Hindi) - 146 to 148",
    "DUSSEHRA (English) - 149 to 152",
    "INDEPENDANCE DAY (Hindi) - 153 to 158",
    "INDEPENDANCE DAY (English) - 159 to 160",
    "AIDS Day (Hindi) - 161 to 161",
    "AKSHAYA TRITIYA (Hindi) - 162 to 168",
    "AKSHAYA TRITIYA (English) - 169 to 171",
    "AMBEDKAR JAYANTI (English) - 172 to 176",
    "ANANT CHATURDASHI (Hindi) - 177 to 177",
    "BAISAKHI (Hindi) - 178 to 180",
    "Basant Panchmi (Hindi) - 181 to 188",
    // 25
    "Basant Panchmi (English) - 189 to 189",
    // 26
    "Bhai Dooj (Hindi) - 190 to 195",
    // 27
    "Bhai Dooj (English) - 196 to 196",
    // 28
    "Buddha Purnima (hindi) - 197 to 197",
    // 29
    "Cancer Day (Hindi) - 198 to 198",
    // 30
    "Children's Day (Hindi) - 199 to 202",
    // 31
    "Christmas Day (Hindi) - 203 to 205",
    "Christmas Day (Hindi) - 203 to 205",
    "Christmas Day (Hindi) - 203 to 205",
  ];

  // Create an array of refs for each image
  const imageRefs = useRef(images.map(() => React.createRef()));

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to download the image as PNG
  const handleDownload = (index) => {
    const ref = imageRefs.current[index];
    if (ref.current) {
      html2canvas(ref.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `downloaded-image-${index + 1}.png`;
        link.click();
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded"
      /> */}
      {/* <div className="mb-4 p-2 border rounded uppercase">
        <h6>Create Post</h6>
        {posts.map((post, index) => (
          <p>
            {index + 1}. {post}
          </p>
        ))}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imgSrc, index) => (
          <div key={index} className="border p-4">
            <div className="mb-2 uppercase">
              {index + 1}. {titles[index] || "Default Title"}
              {/* (Hindi/English) */}
            </div>
            <div ref={imageRefs.current[index]}>
              <img
                src={imgSrc}
                alt={`Image ${index + 1}`}
                className="w-full h-auto mb-2"
              />
              <img
                src={uploadedImage || frame}
                alt={`Overlay ${index + 1}`}
                className="lg:mt-[-55px] sm:mt-[-150px] md:mt-[-200px] mt-[-100px]"
              />
            </div>
            <>
            <button
              onClick={() => handleDownload(index)}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Download as PNG
            </button>
            </>
          </div>
        ))}
      </div>
      <br/>
      <p>
      🚀 More than 450+ New Post Coming Soon... 🔥 

      </p>
    </div>
  );
};

export default Fastible;
