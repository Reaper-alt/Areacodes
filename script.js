// Array of area codes with their respective locations
const areaCodes = [
    { code: 201, location: "Jersey City, NJ" },
    { code: 202, location: "Washington, D.C." },
    { code: 203, location: "Bridgeport, CT" },
    { code: 204, location: "Manitoba, Canada" },
    { code: 205, location: "Birmingham, AL" },
    { code: 206, location: "Seattle, WA" },
    { code: 207, location: "Maine" },
    { code: 208, location: "Idaho" },
    { code: 209, location: "Stockton, CA" },
    { code: 210, location: "San Antonio, TX" },
    { code: 211, location: "N/A" },
    { code: 212, location: "New York, NY" },
    { code: 213, location: "Los Angeles, CA" },
    { code: 214, location: "Dallas, TX" },
    { code: 215, location: "Philadelphia, PA" },
    { code: 216, location: "Cleveland, OH" },
    { code: 217, location: "Springfield, IL" },
    { code: 218, location: "Duluth, MN" },
    { code: 219, location: "Hammond, IN" },
    { code: 220, location: "Newark, OH" },
    { code: 221, location: "N/A" },
    { code: 222, location: "N/A" },
    { code: 223, location: "Harrisburg, PA" },
    { code: 224, location: "Evanston, IL" },
    { code: 225, location: "Baton Rouge, LA" },
    { code: 226, location: "London, Ontario, Canada" },
    { code: 227, location: "Frederick, MD" },
    { code: 228, location: "Gulfport, MS" },
    { code: 229, location: "Albany, GA" },
    { code: 230, location: "N/A" },
    { code: 231, location: "Muskegon, MI" },
    { code: 232, location: "N/A" },
    { code: 233, location: "N/A" },
    { code: 234, location: "Akron, OH" },
    { code: 235, location: "N/A" },
    { code: 236, location: "British Columbia, Canada" },
    { code: 237, location: "N/A" },
    { code: 238, location: "N/A" },
    { code: 239, location: "Fort Myers, FL" },
    { code: 240, location: "Frederick, MD" },
    { code: 241, location: "N/A" },
    { code: 242, location: "Bahamas" },
    { code: 243, location: "N/A" },
    { code: 244, location: "N/A" },
    { code: 245, location: "N/A" },
    { code: 246, location: "Barbados" },
    { code: 247, location: "N/A" },
    { code: 248, location: "Pontiac, MI" },
    { code: 249, location: "Ontario, Canada" },
    { code: 250, location: "Victoria, British Columbia, Canada" },
    { code: 251, location: "Mobile, AL" },
    { code: 252, location: "Greenville, NC" },
    { code: 253, location: "Tacoma, WA" },
    { code: 254, location: "Waco, TX" },
    { code: 255, location: "N/A" },
    { code: 256, location: "Huntsville, AL" },
    { code: 257, location: "N/A" },
    { code: 258, location: "N/A" },
    { code: 259, location: "N/A" },
    { code: 260, location: "Fort Wayne, IN" },
    { code: 261, location: "N/A" },
    { code: 262, location: "Racine, WI" },
    { code: 263, location: "N/A" },
    { code: 264, location: "Anguilla" },
    { code: 265, location: "N/A" },
    { code: 266, location: "N/A" },
    { code: 267, location: "Philadelphia, PA" },
    { code: 268, location: "Antigua and Barbuda" },
    { code: 269, location: "Kalamazoo, MI" },
    { code: 270, location: "Bowling Green, KY" },
    { code: 271, location: "N/A" },
    { code: 272, location: "Scranton, PA" },
    { code: 273, location: "N/A" },
    { code: 274, location: "N/A" },
    { code: 275, location: "N/A" },
    { code: 276, location: "Bristol, VA" },
    { code: 277, location: "N/A" },
    { code: 278, location: "N/A" },
    { code: 279, location: "Sacramento, CA" },
    { code: 280, location: "N/A" },
    { code: 281, location: "Houston, TX" },
    { code: 282, location: "N/A" },
    { code: 283, location: "N/A" },
    { code: 284, location: "British Virgin Islands" },
    { code: 285, location: "N/A" },
    { code: 286, location: "N/A" },
    { code: 287, location: "N/A" },
    { code: 288, location: "N/A" },
    { code: 289, location: "Hamilton, Ontario, Canada" },
    { code: 290, location: "N/A" },
    { code: 291, location: "N/A" },
    { code: 292, location: "N/A" },
    { code: 293, location: "N/A" },
    { code: 294, location: "N/A" },
    { code: 295, location: "N/A" },
    { code: 296, location: "N/A" },
    { code: 297, location: "N/A" },
    { code: 298, location: "N/A" },
    { code: 299, location: "N/A" },
    { code: 300, location: "N/A" },
    {
    code: 300,
    location: 'N/A'
  },
  {
    code: 301,
    location: 'Frederick, MD'
  },
  {
    code: 302,
    location: 'Delaware'
  },
  {
    code: 303,
    location: 'Denver, CO'
  },
  {
    code: 304,
    location: 'West Virginia'
  },
  {
    code: 305,
    location: 'Miami, FL'
  },
  {
    code: 306,
    location: 'Saskatchewan, Canada'
  },
  {
    code: 307,
    location: 'Wyoming'
  },
  {
    code: 308,
    location: 'Western Nebraska'
  },
  {
    code: 309,
    location: 'Peoria, IL'
  },
  {
    code: 310,
    location: 'Los Angeles, CA'
  },
  {
    code: 311,
    location: 'N/A'
  },
  {
    code: 312,
    location: 'Chicago, IL'
  },
  {
    code: 313,
    location: 'Detroit, MI'
  },
  {
    code: 314,
    location: 'St. Louis, MO'
  },
  {
    code: 315,
    location: 'Syracuse, NY'
  },
  {
    code: 316,
    location: 'Wichita, KS'
  },
  {
    code: 317,
    location: 'Indianapolis, IN'
  },
  {
    code: 318,
    location: 'Shreveport, LA'
  },
  {
    code: 319,
    location: 'Cedar Rapids, IA'
  },
  {
    code: 320,
    location: 'St. Cloud, MN'
  },
  {
    code: 321,
    location: 'Orlando, FL'
  },
  {
    code: 322,
    location: 'N/A'
  },
  {
    code: 323,
    location: 'Los Angeles, CA'
  },
  {
    code: 324,
    location: 'N/A'
  },
  {
    code: 325,
    location: 'Abilene, TX'
  },
  {
    code: 326,
    location: 'Springfield, OH'
  },
  {
    code: 327,
    location: 'N/A'
  },
  {
    code: 328,
    location: 'N/A'
  },
  {
    code: 329,
    location: 'N/A'
  },
  {
    code: 330,
    location: 'Akron, OH'
  },
  {
    code: 331,
    location: 'Naperville, IL'
  },
  {
    code: 332,
    location: 'New York, NY'
  },
  {
    code: 333,
    location: 'N/A'
  },
  {
    code: 334,
    location: 'Montgomery, AL'
  },
  {
    code: 335,
    location: 'N/A'
  },
  {
    code: 336,
    location: 'Greensboro, NC'
  },
  {
    code: 337,
    location: 'Lafayette, LA'
  },
  {
    code: 338,
    location: 'N/A'
  },
  {
    code: 339,
    location: 'Lynn, MA'
  },
  {
    code: 340,
    location: 'U.S. Virgin Islands'
  }
    {
    code: 341,
    location: 'Oakland, CA'
  },
  {
    code: 342,
    location: 'N/A'
  },
  {
    code: 343,
    location: 'Ottawa, Ontario, Canada'
  },
  {
    code: 344,
    location: 'N/A'
  },
  {
    code: 345,
    location: 'Cayman Islands'
  },
  {
    code: 346,
    location: 'Houston, TX'
  },
  {
    code: 347,
    location: 'New York, NY'
  },
  {
    code: 348,
    location: 'N/A'
  },
  {
    code: 349,
    location: 'Ontario, Canada'
  },
  {
    code: 350,
    location: 'N/A'
  },
  {
    code: 351,
    location: 'Lowell, MA'
  },
  {
    code: 352,
    location: 'Gainesville, FL'
  },
  {
    code: 353,
    location: 'N/A'
  },
  {
    code: 354,
    location: 'N/A'
  },
  {
    code: 355,
    location: 'N/A'
  },
  {
    code: 356,
    location: 'N/A'
  },
  {
    code: 357,
    location: 'N/A'
  },
  {
    code: 358,
    location: 'N/A'
  },
  {
    code: 359,
    location: 'N/A'
  },
  {
    code: 360,
    location: 'Olympia, WA'
  },
  {
    code: 361,
    location: 'Corpus Christi, TX'
  },
  {
    code: 362,
    location: 'N/A'
  },
  {
    code: 363,
    location: 'N/A'
  },
  {
    code: 364,
    location: 'Western Kentucky'
  },
  {
    code: 365,
    location: 'Ontario, Canada'
  },
  {
    code: 366,
    location: 'N/A'
  },
  {
    code: 367,
    location: 'Ontario, Canada'
  },
  {
    code: 368,
    location: 'N/A'
  },
  {
    code: 369,
    location: 'N/A'
  },
  {
    code: 370,
    location: 'N/A'
  },
  {
    code: 371,
    location: 'N/A'
  },
  {
    code: 372,
    location: 'N/A'
  },
  {
    code: 373,
    location: 'N/A'
  },
  {
    code: 374,
    location: 'N/A'
  },
  {
    code: 375,
    location: 'N/A'
  },
  {
    code: 376,
    location: 'N/A'
  },
  {
    code: 377,
    location: 'N/A'
  },
  {
    code: 378,
    location: 'N/A'
  },
  {
    code: 379,
    location: 'N/A'
  },
  {
    code: 380,
    location: 'Columbus, OH'
  },
  {
    code: 381,
    location: 'N/A'
  },
  {
    code: 382,
    location: 'N/A'
  },
  {
    code: 383,
    location: 'N/A'
  },
  {
    code: 384,
    location: 'N/A'
  },
  {
    code: 385,
    location: 'Salt Lake City, UT'
  },
  {
    code: 386,
    location: 'Daytona Beach, FL'
  },
  {
    code: 387,
    location: 'N/A'
  },
  {
    code: 388,
    location: 'N/A'
  },
  {
    code: 389,
    location: 'N/A'
  },
  {
    code: 390,
    location: 'N/A'
  }
  {
    code: 391,
    location: 'N/A'
  },
  {
    code: 392,
    location: 'N/A'
  },
  {
    code: 393,
    location: 'N/A'
  },
  {
    code: 394,
    location: 'N/A'
  },
  {
    code: 395,
    location: 'N/A'
  },
  {
    code: 396,
    location: 'N/A'
  },
  {
    code: 397,
    location: 'N/A'
  },
  {
    code: 398,
    location: 'N/A'
  },
  {
    code: 399,
    location: 'N/A'
  },
  {
    code: 400,
    location: 'N/A'
  }
  {
    code: 401,
    location: 'Rhode Island'
  },
  {
    code: 402,
    location: 'Omaha, NE'
  },
  {
    code: 403,
    location: 'Calgary, Alberta, Canada'
  },
  {
    code: 404,
    location: 'Atlanta, GA'
  },
  {
    code: 405,
    location: 'Oklahoma City, OK'
  },
  {
    code: 406,
    location: 'Montana'
  },
  {
    code: 407,
    location: 'Orlando, FL'
  },
  {
    code: 408,
    location: 'San Jose, CA'
  },
  {
    code: 409,
    location: 'Galveston, TX'
  },
  {
    code: 410,
    location: 'Baltimore, MD'
  },
  {
    code: 411,
    location: 'N/A'
  },
  {
    code: 412,
    location: 'Pittsburgh, PA'
  },
  {
    code: 413,
    location: 'Springfield, MA'
  },
  {
    code: 414,
    location: 'Milwaukee, WI'
  },
  {
    code: 415,
    location: 'San Francisco, CA'
  },
  {
    code: 416,
    location: 'Toronto, Ontario, Canada'
  },
  {
    code: 417,
    location: 'Springfield, MO'
  },
  {
    code: 418,
    location: 'Quebec City, Quebec, Canada'
  },
  {
    code: 419,
    location: 'Toledo, OH'
  },
  {
    code: 420,
    location: 'N/A'
  },
  {
    code: 421,
    location: 'N/A'
  },
  {
    code: 422,
    location: 'N/A'
  },
  {
    code: 423,
    location: 'Chattanooga, TN'
  },
  {
    code: 424,
    location: 'Los Angeles, CA'
  },
  {
    code: 425,
    location: 'Everett, WA'
  },
  {
    code: 426,
    location: 'N/A'
  },
  {
    code: 427,
    location: 'N/A'
  },
  {
    code: 428,
    location: 'N/A'
  },
  {
    code: 429,
    location: 'N/A'
  },
  {
    code: 430,
    location: 'Tyler, TX'
  },
  {
    code: 431,
    location: 'Manitoba, Canada'
  },
  {
    code: 432,
    location: 'Midland, TX'
  },
  {
    code: 433,
    location: 'N/A'
  },
  {
    code: 434,
    location: 'Lynchburg, VA'
  },
  {
    code: 435,
    location: 'St. George, UT'
  },
  {
    code: 436,
    location: 'N/A'
  },
  {
    code: 437,
    location: 'Toronto, Ontario, Canada'
  },
  {
    code: 438,
    location: 'Montreal, Quebec, Canada'
  },
  {
    code: 439,
    location: 'N/A'
  },
  {
    code: 440,
    location: 'Cleveland, OH'
  },
  {
    code: 441,
    location: 'Bermuda'
  },
  {
    code: 442,
    location: 'Palm Springs, CA'
  },
  {
    code: 443,
    location: 'Baltimore, MD'
  },
  {
    code: 444,
    location: 'N/A'
  },
  {
    code: 445,
    location: 'Philadelphia, PA'
  },
  {
    code: 446,
    location: 'N/A'
  },
  {
    code: 447,
    location: 'Springfield, IL'
  },
  {
    code: 448,
    location: 'N/A'
  },
  {
    code: 449,
    location: 'N/A'
  },
  {
    code: 450,
    location: 'Laval, Quebec, Canada'
  },
  {
    code: 451,
    location: 'N/A'
  },
  {
    code: 452,
    location: 'N/A'
  },
  {
    code: 453,
    location: 'N/A'
  },
  {
    code: 454,
    location: 'N/A'
  },
  {
    code: 455,
    location: 'N/A'
  },
  {
    code: 456,
    location: 'N/A'
  },
  {
    code: 457,
    location: 'N/A'
  },
  {
    code: 458,
    location: 'Eugene, OR'
  },
  {
    code: 459,
    location: 'N/A'
  },
  {
    code: 460,
    location: 'N/A'
  },
  {
    code: 461,
    location: 'N/A'
  },
  {
    code: 462,
    location: 'N/A'
  },
  {
    code: 463,
    location: 'Indianapolis, IN'
  },
  {
    code: 464,
    location: 'N/A'
  },
  {
    code: 465,
    location: 'N/A'
  },
  {
    code: 466,
    location: 'N/A'
  },
  {
    code: 467,
    location: 'N/A'
  },
  {
    code: 468,
    location: 'N/A'
  },
  {
    code: 469,
    location: 'Dallas, TX'
  },
  {
    code: 470,
    location: 'Atlanta, GA'
  },
  {
    code: 471,
    location: 'N/A'
  },
  {
    code: 472,
    location: 'N/A'
  },
  {
    code: 473,
    location: 'Grenada'
  },
  {
    code: 474,
    location: 'Manitoba, Canada'
  },
  {
    code: 475,
    location: 'Bridgeport, CT'
  },
  {
    code: 476,
    location: 'N/A'
  },
  {
    code: 477,
    location: 'N/A'
  },
  {
    code: 478,
    location: 'Macon, GA'
  },
  {
    code: 479,
    location: 'Fayetteville, AR'
  },
  {
    code: 480,
    location: 'Mesa, AZ'
  },
  {
    code: 481,
    location: 'N/A'
  },
  {
    code: 482,
    location: 'N/A'
  },
  {
    code: 483,
    location: 'N/A'
  },
  {
    code: 484,
    location: 'Allentown, PA'
  },
  {
    code: 485,
    location: 'N/A'
  },
  {
    code: 486,
    location: 'N/A'
  },
  {
    code: 487,
    location: 'N/A'
  },
  {
    code: 488,
    location: 'N/A'
  },
  {
    code: 489,
    location: 'N/A'
  },
  {
    code: 490,
    location: 'N/A'
  }
  {
    code: 491,
    location: 'N/A'
  },
  {
    code: 492,
    location: 'N/A'
  },
  {
    code: 493,
    location: 'N/A'
  },
  {
    code: 494,
    location: 'N/A'
  },
  {
    code: 495,
    location: 'N/A'
  },
  {
    code: 496,
    location: 'N/A'
  },
  {
    code: 497,
    location: 'N/A'
  },
  {
    code: 498,
    location: 'N/A'
  },
  {
    code: 499,
    location: 'N/A'
  },
  {
    code: 500,
    location: 'N/A'
  }
  {
    code: 501,
    location: 'Little Rock, AR'
  },
  {
    code: 502,
    location: 'Louisville, KY'
  },
  {
    code: 503,
    location: 'Portland, OR'
  },
  {
    code: 504,
    location: 'New Orleans, LA'
  },
  {
    code: 505,
    location: 'Albuquerque, NM'
  },
  {
    code: 506,
    location: 'New Brunswick, Canada'
  },
  {
    code: 507,
    location: 'Rochester, MN'
  },
  {
    code: 508,
    location: 'Worcester, MA'
  },
  {
    code: 509,
    location: 'Spokane, WA'
  },
  {
    code: 510,
    location: 'Oakland, CA'
  },
  {
    code: 511,
    location: 'N/A'
  },
  {
    code: 512,
    location: 'Austin, TX'
  },
  {
    code: 513,
    location: 'Cincinnati, OH'
  },
  {
    code: 514,
    location: 'Montreal, Quebec, Canada'
  },
  {
    code: 515,
    location: 'Des Moines, IA'
  },
  {
    code: 516,
    location: 'Nassau County, NY'
  },
  {
    code: 517,
    location: 'Lansing, MI'
  },
  {
    code: 518,
    location: 'Albany, NY'
  },
  {
    code: 519,
    location: 'London, Ontario, Canada'
  },
  {
    code: 520,
    location: 'Tucson, AZ'
  },
  {
    code: 521,
    location: 'N/A'
  },
  {
    code: 522,
    location: 'N/A'
  },
  {
    code: 523,
    location: 'N/A'
  },
  {
    code: 524,
    location: 'N/A'
  },
  {
    code: 525,
    location: 'N/A'
  },
  {
    code: 526,
    location: 'N/A'
  },
  {
    code: 527,
    location: 'N/A'
  },
  {
    code: 528,
    location: 'N/A'
  },
  {
    code: 529,
    location: 'N/A'
  },
  {
    code: 530,
    location: 'Redding, CA'
  },
  {
    code: 531,
    location: 'Omaha, NE'
  },
  {
    code: 532,
    location: 'N/A'
  },
  {
    code: 533,
    location: 'N/A'
  },
  {
    code: 534,
    location: 'Eau Claire, WI'
  },
  {
    code: 535,
    location: 'N/A'
  },
  {
    code: 536,
    location: 'N/A'
  },
  {
    code: 537,
    location: 'N/A'
  },
  {
    code: 538,
    location: 'N/A'
  },
  {
    code: 539,
    location: 'Tulsa, OK'
  },
  {
    code: 540,
    location: 'Roanoke, VA'
  },
  {
    code: 541,
    location: 'Eugene, OR'
  },
  {
    code: 542,
    location: 'N/A'
  },
  {
    code: 543,
    location: 'N/A'
  },
  {
    code: 544,
    location: 'N/A'
  },
  {
    code: 545,
    location: 'N/A'
  },
  {
    code: 546,
    location: 'N/A'
  },
  {
    code: 547,
    location: 'N/A'
  },
  {
    code: 548,
    location: 'Ontario, Canada'
  },
  {
    code: 549,
    location: 'N/A'
  },
  {
    code: 550,
    location: 'N/A'
  },
  {
    code: 551,
    location: 'Jersey City, NJ'
  },
  {
    code: 552,
    location: 'N/A'
  },
  {
    code: 553,
    location: 'N/A'
  },
  {
    code: 554,
    location: 'N/A'
  },
  {
    code: 555,
    location: 'N/A'
  },
  {
    code: 556,
    location: 'N/A'
  },
  {
    code: 557,
    location: 'N/A'
  },
  {
    code: 558,
    location: 'N/A'
  },
  {
    code: 559,
    location: 'Fresno, CA'
  },
  {
    code: 560,
    location: 'N/A'
  }
  {
    code: 561,
    location: 'West Palm Beach, FL'
  },
  {
    code: 562,
    location: 'Long Beach, CA'
  },
  {
    code: 563,
    location: 'Davenport, IA'
  },
  {
    code: 564,
    location: 'Olympia, WA'
  },
  {
    code: 565,
    location: 'N/A'
  },
  {
    code: 566,
    location: 'N/A'
  },
  {
    code: 567,
    location: 'Toledo, OH'
  },
  {
    code: 568,
    location: 'N/A'
  },
  {
    code: 569,
    location: 'N/A'
  },
  {
    code: 570,
    location: 'Scranton, PA'
  },
  {
    code: 571,
    location: 'Arlington, VA'
  },
  {
    code: 572,
    location: 'N/A'
  },
  {
    code: 573,
    location: 'Columbia, MO'
  },
  {
    code: 574,
    location: 'South Bend, IN'
  },
  {
    code: 575,
    location: 'Las Cruces, NM'
  },
  {
    code: 576,
    location: 'N/A'
  },
  {
    code: 577,
    location: 'N/A'
  },
  {
    code: 578,
    location: 'N/A'
  },
  {
    code: 579,
    location: 'Quebec, Canada'
  },
  {
    code: 580,
    location: 'Lawton, OK'
  },
  {
    code: 581,
    location: 'Quebec, Canada'
  },
  {
    code: 582,
    location: 'N/A'
  },
  {
    code: 583,
    location: 'N/A'
  },
  {
    code: 584,
    location: 'N/A'
  },
  {
    code: 585,
    location: 'Rochester, NY'
  },
  {
    code: 586,
    location: 'Warren, MI'
  },
  {
    code: 587,
    location: 'Calgary, Alberta, Canada'
  },
  {
    code: 588,
    location: 'N/A'
  },
  {
    code: 589,
    location: 'N/A'
  },
  {
    code: 590,
    location: 'N/A'
  }
  {
    code: 591,
    location: 'N/A'
  },
  {
    code: 592,
    location: 'N/A'
  },
  {
    code: 593,
    location: 'N/A'
  },
  {
    code: 594,
    location: 'N/A'
  },
  {
    code: 595,
    location: 'N/A'
  },
  {
    code: 596,
    location: 'N/A'
  },
  {
    code: 597,
    location: 'N/A'
  },
  {
    code: 598,
    location: 'N/A'
  },
  {
    code: 599,
    location: 'N/A'
  },
  {
    code: 600,
    location: 'N/A'
  }
  {
    code: 601,
    location: 'Jackson, MS'
  },
  {
    code: 602,
    location: 'Phoenix, AZ'
  },
  {
    code: 603,
    location: 'New Hampshire'
  },
  {
    code: 604,
    location: 'Vancouver, BC, Canada'
  },
  {
    code: 605,
    location: 'South Dakota'
  },
  {
    code: 606,
    location: 'Eastern Kentucky'
  },
  {
    code: 607,
    location: 'Binghamton, NY'
  },
  {
    code: 608,
    location: 'Madison, WI'
  },
  {
    code: 609,
    location: 'Trenton, NJ'
  },
  {
    code: 610,
    location: 'Allentown, PA'
  },
  {
    code: 611,
    location: 'N/A'
  },
  {
    code: 612,
    location: 'Minneapolis, MN'
  },
  {
    code: 613,
    location: 'Ottawa, Ontario, Canada'
  },
  {
    code: 614,
    location: 'Columbus, OH'
  },
  {
    code: 615,
    location: 'Nashville, TN'
  },
  {
    code: 616,
    location: 'Grand Rapids, MI'
  },
  {
    code: 617,
    location: 'Boston, MA'
  },
  {
    code: 618,
    location: 'Southern Illinois'
  },
  {
    code: 619,
    location: 'San Diego, CA'
  },
  {
    code: 620,
    location: 'Dodge City, KS'
  },
  {
    code: 621,
    location: 'N/A'
  },
  {
    code: 622,
    location: 'N/A'
  },
  {
    code: 623,
    location: 'Glendale, AZ'
  },
  {
    code: 624,
    location: 'N/A'
  },
  {
    code: 625,
    location: 'N/A'
  },
  {
    code: 626,
    location: 'Pasadena, CA'
  },
  {
    code: 627,
    location: 'N/A'
  },
  {
    code: 628,
    location: 'San Francisco, CA'
  },
  {
    code: 629,
    location: 'Nashville, TN'
  },
  {
    code: 630,
    location: 'Aurora, IL'
  },
  {
    code: 631,
    location: 'Long Island, NY'
  },
  {
    code: 632,
    location: 'N/A'
  },
  {
    code: 633,
    location: 'N/A'
  },
  {
    code: 634,
    location: 'N/A'
  },
  {
    code: 635,
    location: 'N/A'
  },
  {
    code: 636,
    location: 'St. Louis, MO'
  },
  {
    code: 637,
    location: 'N/A'
  },
  {
    code: 638,
    location: 'N/A'
  },
  {
    code: 639,
    location: 'Saskatchewan, Canada'
  },
  {
    code: 640,
    location: 'N/A'
  },
  {
    code: 641,
    location: 'Ottawa, Ontario, Canada'
  },
  {
    code: 642,
    location: 'N/A'
  },
  {
    code: 643,
    location: 'N/A'
  },
  {
    code: 644,
    location: 'N/A'
  },
  {
    code: 645,
    location: 'N/A'
  },
  {
    code: 646,
    location: 'New York, NY'
  },
  {
    code: 647,
    location: 'Toronto, Ontario, Canada'
  },
  {
    code: 648,
    location: 'N/A'
  },
  {
    code: 649,
    location: 'Grand Cayman'
  },
  {
    code: 650,
    location: 'Palo Alto, CA'
  },
  {
    code: 651,
    location: 'St. Paul, MN'
  },
  {
    code: 652,
    location: 'N/A'
  },
  {
    code: 653,
    location: 'Hawaii'
  },
  {
    code: 654,
    location: 'N/A'
  },
  {
    code: 655,
    location: 'Alaska'
  },
  {
    code: 656,
    location: 'N/A'
  },
  {
    code: 657,
    location: 'Anaheim, CA'
  },
  {
    code: 658,
    location: 'N/A'
  },
  {
    code: 659,
    location: 'N/A'
  },
  {
    code: 660,
    location: 'Missouri'
  },
  {
    code: 661,
    location: 'California'
  },
  {
    code: 662,
    location: 'Mississippi'
  },
  {
    code: 663,
    location: 'N/A'
  },
  {
    code: 664,
    location: 'N/A'
  },
  {
    code: 665,
    location: 'N/A'
  },
  {
    code: 666,
    location: 'N/A'
  },
  {
    code: 667,
    location: 'Baltimore, MD'
  },
  {
    code: 668,
    location: 'N/A'
  },
  {
    code: 669,
    location: 'California'
  },
  {
    code: 670,
    location: 'Northern Mariana Islands'
  },
  {
    code: 671,
    location: 'Guam'
  }
  {
    code: 672,
    location: 'N/A'
  },
  {
    code: 673,
    location: 'Brunei'
  },
  {
    code: 674,
    location: 'N/A'
  },
  {
    code: 675,
    location: 'Papua New Guinea'
  },
  {
    code: 676,
    location: 'N/A'
  },
  {
    code: 677,
    location: 'Solomon Islands'
  },
  {
    code: 678,
    location: 'Georgia'
  },
  {
    code: 679,
    location: 'Fiji'
  },
  {
    code: 680,
    location: 'Palau'
  },
  {
    code: 681,
    location: 'N/A'
  },
  {
    code: 682,
    location: 'Fort Worth, TX'
  },
  {
    code: 683,
    location: 'Samoa'
  },
  {
    code: 684,
    location: 'American Samoa'
  },
  {
    code: 685,
    location: 'N/A'
  },
  {
    code: 686,
    location: 'N/A'
  },
  {
    code: 687,
    location: 'N/A'
  },
  {
    code: 688,
    location: 'N/A'
  },
  {
    code: 689,
    location: 'Miami, FL'
  },
  {
    code: 690,
    location: 'N/A'
  },
  {
    code: 691,
    location: 'Micronesia'
  },
  {
    code: 692,
    location: 'Marshall Islands'
  },
  {
    code: 693,
    location: 'N/A'
  },
  {
    code: 694,
    location: 'N/A'
  },
  {
    code: 695,
    location: 'N/A'
  },
  {
    code: 696,
    location: 'N/A'
  },
  {
    code: 697,
    location: 'N/A'
  },
  {
    code: 698,
    location: 'N/A'
  },
  {
    code: 699,
    location: 'N/A'
  },
  {
    code: 700,
    location: 'N/A'
  },
  {
    code: 701,
    location: 'North Dakota'
  },
  {
    code: 702,
    location: 'Las Vegas, NV'
  },
  {
    code: 703,
    location: 'Northern Virginia'
  },
  {
    code: 704,
    location: 'Charlotte, NC'
  },
  {
    code: 705,
    location: 'Ontario, Canada'
  },
  {
    code: 706,
    location: 'Georgia'
  },
  {
    code: 707,
    location: 'Napa, CA'
  },
  {
    code: 708,
    location: 'Illinois'
  },
  {
    code: 709,
    location: 'Newfoundland, Canada'
  },
  {
    code: 710,
    location: 'N/A'
  },
  {
    code: 711,
    location: 'N/A'
  },
  {
    code: 712,
    location: 'Western Iowa'
  },
  {
    code: 713,
    location: 'Houston, TX'
  },
  {
    code: 714,
    location: 'Orange County, CA'
  },
  {
    code: 715,
    location: 'Northwest Wisconsin'
  },
  {
    code: 716,
    location: 'Buffalo, NY'
  },
  {
    code: 717,
    location: 'Harrisburg, PA'
  },
  {
    code: 718,
    location: 'New York, NY'
  },
  {
    code: 719,
    location: 'Colorado Springs, CO'
  },
  {
    code: 720,
    location: 'Denver, CO'
  },
  {
    code: 721,
    location: 'Sint Maarten'
  },
  {
    code: 722,
    location: 'N/A'
  },
  {
    code: 723,
    location: 'N/A'
  },
  {
    code: 724,
    location: 'Western Pennsylvania'
  },
  {
    code: 725,
    location: 'Las Vegas, NV'
  },
  {
    code: 726,
    location: 'N/A'
  },
  {
    code: 727,
    location: 'Tampa Bay Area, FL'
  },
  {
    code: 728,
    location: 'N/A'
  },
  {
    code: 729,
    location: 'N/A'
  },
  {
    code: 730,
    location: 'N/A'
  },
  {
    code: 731,
    location: 'Jackson, TN'
  },
  {
    code: 732,
    location: 'New Jersey'
  }
  {
    code: 733,
    location: 'N/A'
  },
  {
    code: 734,
    location: 'Ann Arbor, MI'
  },
  {
    code: 735,
    location: 'N/A'
  },
  {
    code: 736,
    location: 'Austin, TX'
  },
  {
    code: 737,
    location: 'Austin, TX'
  },
  {
    code: 740,
    location: 'Southeastern Ohio'
  },
  {
    code: 747,
    location: 'San Fernando Valley, CA'
  },
  {
    code: 749,
    location: 'N/A'
  },
  {
    code: 750,
    location: 'N/A'
  },
  {
    code: 751,
    location: 'N/A'
  },
  {
    code: 752,
    location: 'N/A'
  },
  {
    code: 754,
    location: 'Broward County, FL'
  },
  {
    code: 757,
    location: 'Hampton Roads, VA'
  },
  {
    code: 758,
    location: 'Saint Lucia'
  },
  {
    code: 759,
    location: 'N/A'
  },
  {
    code: 760,
    location: 'Southern California'
  },
  {
    code: 762,
    location: 'Georgia'
  },
  {
    code: 763,
    location: 'Minnesota'
  },
  {
    code: 764,
    location: 'N/A'
  },
  {
    code: 765,
    location: 'Indiana'
  },
  {
    code: 766,
    location: 'N/A'
  },
  {
    code: 767,
    location: 'Dominica'
  },
  {
    code: 768,
    location: 'N/A'
  },
  {
    code: 769,
    location: 'Mississippi'
  },
  {
    code: 770,
    location: 'Georgia'
  },
  {
    code: 772,
    location: 'Treasure Coast, FL'
  },
  {
    code: 773,
    location: 'Chicago, IL'
  },
  {
    code: 774,
    location: 'Massachusetts'
  },
  {
    code: 775,
    location: 'Northern Nevada'
  },
  {
    code: 778,
    location: 'British Columbia, Canada'
  },
  {
    code: 779,
    location: 'Illinois'
  },
  {
    code: 780,
    location: 'Edmonton, Alberta, Canada'
  },
  {
    code: 781,
    location: 'Eastern Massachusetts'
  },
  {
    code: 782,
    location: 'N/A'
  },
  {
    code: 783,
    location: 'N/A'
  },
  {
    code: 784,
    location: 'Saint Vincent and the Grenadines'
  },
  {
    code: 785,
    location: 'Kansas'
  },
  {
    code: 786,
    location: 'Miami-Dade County, FL'
  },
  {
    code: 787,
    location: 'Puerto Rico'
  },
  {
    code: 788,
    location: 'N/A'
  },
  {
    code: 789,
    location: 'Puerto Rico'
  },
  {
    code: 790,
    location: 'N/A'
  },
  {
    code: 791,
    location: 'N/A'
  },
  {
    code: 792,
    location: 'N/A'
  },
  {
    code: 793,
    location: 'N/A'
  },
  {
    code: 794,
    location: 'N/A'
  },
  {
    code: 795,
    location: 'N/A'
  },
  {
    code: 796,
    location: 'N/A'
  },
  {
    code: 797,
    location: 'N/A'
  },
  {
    code: 798,
    location: 'N/A'
  },
  {
    code: 799,
    location: 'N/A'
  }
  {
    code: 800,
    location: 'Toll-Free (US, Canada, and Caribbean)'
  },
  {
    code: 801,
    location: 'Utah'
  },
  {
    code: 802,
    location: 'Vermont'
  },
  {
    code: 803,
    location: 'South Carolina'
  },
  {
    code: 804,
    location: 'Richmond, VA'
  },
  {
    code: 805,
    location: 'Southern California'
  },
  {
    code: 806,
    location: 'Northwestern Texas'
  },
  {
    code: 807,
    location: 'Ontario, Canada'
  },
  {
    code: 808,
    location: 'Hawaii'
  },
  {
    code: 809,
    location: 'Dominican Republic'
  },
  {
    code: 810,
    location: 'Flint, MI'
  },
  {
    code: 812,
    location: 'Southern Indiana'
  },
  {
    code: 813,
    location: 'Tampa, FL'
  },
  {
    code: 814,
    location: 'Western Pennsylvania'
  },
  {
    code: 815,
    location: 'Northern Illinois'
  },
  {
    code: 816,
    location: 'Kansas City, MO'
  },
  {
    code: 817,
    location: 'Fort Worth, TX'
  },
  {
    code: 818,
    location: 'San Fernando Valley, CA'
  },
  {
    code: 819,
    location: 'Quebec, Canada'
  },
  {
    code: 820,
    location: 'N/A'
  },
  {
    code: 828,
    location: 'Western North Carolina'
  },
  {
    code: 829,
    location: 'Dominican Republic'
  },
  {
    code: 830,
    location: 'Texas Hill Country'
  },
  {
    code: 831,
    location: 'Monterey Bay Area, CA'
  },
  {
    code: 832,
    location: 'Houston, TX'
  },
  {
    code: 843,
    location: 'South Carolina'
  },
  {
    code: 844,
    location: 'Toll-Free (US, Canada, and Caribbean)'
  },
  {
    code: 845,
    location: 'Hudson Valley, NY'
  },
  {
    code: 847,
    location: 'Northern Illinois'
  },
  {
    code: 848,
    location: 'New Jersey'
  },
  {
    code: 849,
    location: 'Dominican Republic'
  },
  {
    code: 850,
    location: 'Florida Panhandle'
  },
  {
    code: 856,
    location: 'Southern New Jersey'
  },
  {
    code: 857,
    location: 'Boston, MA'
  },
  {
    code: 858,
    location: 'San Diego, CA'
  },
  {
    code: 859,
    location: 'Northern Kentucky'
  },
  {
    code: 860,
    location: 'Connecticut'
  },
  {
    code: 862,
    location: 'Northern New Jersey'
  },
  {
    code: 863,
    location: 'Central Florida'
  },
  {
    code: 864,
    location: 'Upstate South Carolina'
  },
  {
    code: 865,
    location: 'Knoxville, TN'
  },
  {
    code: 866,
    location: 'Toll-Free (US, Canada, and Caribbean)'
  },
  {
    code: 867,
    location: 'Northwest Territories, Canada'
  },
  {
    code: 868,
    location: 'Trinidad and Tobago'
  }
  {
    code: 869,
    location: 'Saint Kitts and Nevis'
  },
  {
    code: 870,
    location: 'Arkansas'
  },
  {
    code: 872,
    location: 'Chicago, IL (Overlay)'
  },
  {
    code: 878,
    location: 'Pittsburgh, PA'
  },
  {
    code: 880,
    location: 'Toll-Free (US, Canada, and Caribbean)'
  },
  {
    code: 881,
    location: 'Toll-Free (US, Canada, and Caribbean)'
  },
  {
    code: 901,
    location: 'Memphis, TN'
  },
  {
    code: 902,
    location: 'Nova Scotia, Canada'
  },
  {
    code: 903,
    location: 'Northeast Texas'
  },
  {
    code: 904,
    location: 'Jacksonville, FL'
  },
  {
    code: 905,
    location: 'Ontario, Canada'
  },
  {
    code: 906,
    location: 'Upper Michigan'
  },
  {
    code: 907,
    location: 'Alaska'
  },
  {
    code: 908,
    location: 'Central New Jersey'
  },
  {
    code: 909,
    location: 'Southern California'
  },
  {
    code: 910,
    location: 'Southeastern North Carolina'
  },
  {
    code: 912,
    location: 'Southeast Georgia'
  },
  {
    code: 913,
    location: 'Kansas City, KS'
  },
  {
    code: 914,
    location: 'Westchester County, NY'
  },
  {
    code: 915,
    location: 'El Paso, TX'
  },
  {
    code: 916,
    location: 'Sacramento, CA'
  },
  {
    code: 917,
    location: 'New York City, NY'
  },
  {
    code: 918,
    location: 'Northeast Oklahoma'
  },
  {
    code: 919,
    location: 'Raleigh, NC'
  },
  {
    code: 920,
    location: 'Northeast Wisconsin'
  },
  {
    code: 925,
    location: 'East Bay Area, CA'
  },
  {
    code: 927,
    location: 'N/A'
  },
  {
    code: 928,
    location: 'Northern Arizona'
  },
  {
    code: 929,
    location: 'New York City, NY (Overlay)'
  },
  {
    code: 940,
    location: 'North Texas'
  },
  {
    code: 941,
    location: 'Southwest Florida'
  },
  {
    code: 947,
    location: 'Southeastern Michigan'
  },
  {
    code: 949,
    location: 'Orange County, CA'
  },
  {
    code: 951,
    location: 'Riverside, CA'
  },
  {
    code: 952,
    location: 'Southern Minnesota'
  },
  {
    code: 954,
    location: 'Fort Lauderdale, FL'
  },
  {
    code: 956,
    location: 'South Texas'
  },
    {
    code: 575,
    location: 'Las Cruces, NM'
  },
  {
    code: 576,
    location: 'N/A'
  },
  {
    code: 577,
    location: 'N/A'
  },
  {
    code: 578,
    location: 'N/A'
  },
  {
    code: 579,
    location: 'Quebec, Canada'
  }
  {
    code: 970,
    location: 'Western Colorado'
  },
  {
    code: 971,
    location: 'Portland, OR (Overlay)'
  },
  {
    code: 972,
    location: 'Dallas, TX'
  },
  {
    code: 973,
    location: 'Northern New Jersey'
  },
  {
    code: 975,
    location: 'N/A'
  },
  {
    code: 978,
    location: 'Northeastern Massachusetts'
  },
  {
    code: 979,
    location: 'Southeastern Texas'
  },
  {
    code: 980,
    location: 'Charlotte, NC'
  },
  {
    code: 985,
    location: 'South Louisiana'
  },
  {
    code: 989,
    location: 'Mid-Michigan'
  },
  {
    code: 990,
    location: 'N/A'
  },
  {
    code: 991,
    location: 'N/A'
  },
  {
    code: 992,
    location: 'N/A'
  },
  {
    code: 993,
    location: 'N/A'
  },
  {
    code: 994,
    location: 'N/A'
  },
  {
    code: 995,
    location: 'N/A'
  },
  {
    code: 996,
    location: 'N/A'
  },
  {
    code: 997,
    location: 'N/A'
  },
  {
    code: 998,
    location: 'N/A'
  },
  {
    code: 999,
    location: 'N/A'
  }
];
// Function to flip the card
function flipCard(event) {
    const card = event.currentTarget; // Get the clicked card
    card.classList.toggle('flipped'); // Toggle the 'flipped' class to flip the card
}

// Function to create cards and add them to the container
function createCards() {
    const container = document.querySelector('.container');
    
    areaCodes.forEach(area => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Front of the card
        const front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = `<h2>${area.code}</h2><p>Area Code</p>`;
        
        // Back of the card
        const back = document.createElement('div');
        back.classList.add('back');
        back.innerHTML = `<p>Location: ${area.location}</p>`;
        
        // Append both sides to the card
        card.appendChild(front);
        card.appendChild(back);
        
        // Add card to the container
        container.appendChild(card);
        
        // Add flip functionality to each card
        card.addEventListener("click", flipCard);
    });
}

// Initialize the flashcards
createCards();
